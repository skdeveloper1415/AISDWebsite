import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import SignatureProgram from "./signatureprogram";
import StudentFamilySupport from "./studentfamilysupport";
import PerformanceComponent from "./Performance";
import SchoolDemographics from "./SchoolDemographics";
import { useDispatch } from "react-redux";
import { setGlobalState } from "@/redux/slice/globalState";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import axios from "axios";
import SchoolDetails from "@/components/website/popups/schooldetails";

const SchoolComparisonPage = () => {
  const [comparisonArray, setComparisonArray] = useState([]);
  const [scDetails, setScDetails] = useState([]);
  const [schoolDetail, setSchoolDetail] = useState(false);
  const [scroll, setScroll] = useState(false);


  // Get dispatch function
  const dispatch = useDispatch();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 30.2879265, lng: -97.7386039 }), []);

  const createCustomIcon = (url) => ({
    url: url,
    scaledSize: new window.google.maps.Size(70, 50), // Adjust the size as needed
    anchor: new window.google.maps.Point(70, 70), // Set the anchor point to the center
  });

  const getMapId = async (schoolId) => {
    // Find the school with the given ID
    try {
      let response = await axios({
        method: "GET",
        url: process.env.STRAPI_URL + "/schools",
      });

      // Array for names

      const foundSchool = response.data.data.find(
        (school) => school.id === schoolId
      );
      console.log("foundSchool", foundSchool);
      if (foundSchool) {
        setScDetails(foundSchool);
        setSchoolDetail(true);
      } else {
        console.log("School not found with ID:", schoolId);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios errors (e.g., network error, timeout)
        console.error("Axios error:", error.message);
        return <div>{error.message}</div>;
      } else {
        // Handle non-Axios errors
        console.error("Error:", error.message);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 550);
    });

    const storedComparisonArray =
      JSON.parse(localStorage.getItem("comparisonArray")) || [];
    setComparisonArray(storedComparisonArray);
  }, []);

  const updateGlobalState = (data) => {
    // Extract id from the data
    const itemIdToDelete = data.id;

    // Filter out the item with the specified id
    const updatedComparisonArray = comparisonArray.filter(
      (item) => item.id !== itemIdToDelete
    );

    // Update the global state with the new array
    dispatch(setGlobalState({ comparisonArray: updatedComparisonArray }));

    // Update the local state to trigger a re-render
    setComparisonArray(updatedComparisonArray);

    // Store the updated array in local storage
    try {
      localStorage.setItem(
        "comparisonArray",
        JSON.stringify(updatedComparisonArray)
      );
    } catch (error) {
      console.error("Error storing data in local storage:", error);
    }
  };

  const handleClick = (event, data) => {
    event.preventDefault(); // Prevent default behavior
    // Your button click logic here
    updateGlobalState(data);
  };

  return (
    <>
      <Layout pageTitle="School Comparison">
        <span className="marker">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <GoogleMap
                mapContainerClassName="map-container"
                center={center}
                zoom={10}
              >
                {comparisonArray.map((marker) => (
                  <Marker
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                    icon={createCustomIcon(marker.logo.url)}
                    // icon={{ url: marker.logo.url, scale: 0.02 }}
                    onClick={() => getMapId(marker.id)}
                    key={marker.id}
                  />
                ))}
              </GoogleMap>
            </>
          )}
        </span>

        {/**School Comparison Sticky**/}
      
        <div className={`${scroll === false ? 'top-[100%]' : 'top-[30%]'} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-[1.667vw] gap-[30px] sticky z-30 xl:px-[6.042vw] px-5 md:px-[100px] max-xl:hidden md:-mb-[18.625vw]`}>
          {comparisonArray?.slice(0, 4).map((elm, index) => (
            <div
              key={index}
              className="shadows_shadow-lg bg-white xl:rounded-[0.833vw] rounded-[14px] xl:pt-[0.313vw] pt-1 xl:pb-[0.833vw] pb-4 xl:px-[0.833vw] px-4 space-y-[12px]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src={elm.logo.url}
                    width={84}
                    height={81}
                    alt="school-icon"
                    className="shadows_shadow-xl rounded-full"
                  />
                </div>
                <div className="bg-[#A93439] text-white flex items-center xl:gap-[0.833vw] gap-3 py-1 px-3 rounded-full">
                  <div className="xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]">
                    Phone:
                  </div>
                  <div className="xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]">
                    {elm.phone}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[#374151] xl:text-[1.042vw] text-[18px] font-bold">
                  {elm.name}
                </div>
                <div className="text-[#4B586E] xl:text-[0.833vw] text-[16px] font-normal">
                  {elm.location}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/**School Comparison Sticky**/}

        {/**School Comparison**/}
        <div className="xl:px-[6.042vw] px-[20px] relative z-40 xl:mt-[10.208vw] mt-[50px]">
          <div className="xl:space-y-[0.833vw] space-y-[14px] mt-[50px]">
            <div className="breadCrumb flex flex-wrap justify-start gap-[16px] mb-[20px] xl:mb-[1.04vw]">
              <div className="col">
                <Link href={""}>
                  <i className="austin-home"></i> Home  
                </Link>
              </div>
              <div className="col">
                <i className="austin-arrow-open-right"></i>
              </div>
              <div className="col text-[#4B586E]">Austin Schools</div>
              <div className="col">
                <i className="austin-arrow-open-right"></i>
              </div>
              <div className="col">School Comparison</div>
            </div>
            <div className="xl:text-[1.875vw] text-[#374151] font-[400] xl:leading-[2.083vw] leading-[40px]">
              School <span className="font-[800]">Comparison</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-[1.667vw] gap-[30px] xl:mt-[1.667vw] mt-[30px]">
            {/**col**/}
            {comparisonArray?.slice(0, 4).map((elm, index) => (
              <div>
                <div className="rounded-tl-2xl rounded-tr-2xl relative">
                  <div className="overflow-auto relative option_effect transition ease-in-out delay-150">
                    {elm.images && elm.images.length > 0 && (
                      <Image
                        src={elm.images[0].url}
                        width={385}
                        height={179}
                        alt="banner"
                        className="w-full"
                        onClick={() => getMapId(elm.id)}
                      />
                    )}
                    <div className="bg-[#E5E7EB] xl:py-[0.469vw] py-2 xl:px-[0.625vw] px-3 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl pb-[20px] optionbar w-full text-[#4B586E] xl:text-[1.042vw] text-[18pxs]">
                      <div>
                        <Link href={""} className="xl:pl-[1.042vw] pl-[18px]">
                          <i className="autinisd-dost-Frame"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href={""}
                          onClick={(event) => handleClick(event, elm, index)}
                          className="xl:pr-[1.042vw] pr-[18px]"
                        >
                          <i className="autinisd-trash"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-1.5 left-1.5"
                    onClick={() => getMapId(elm.id)}
                  >
                    <Image
                      src={elm.logo.url}
                      width={84}
                      height={81}
                      alt="school-icon"
                      className="shadows_shadow-xl"
                    />
                  </div>
                </div>
                <div
                  className="bg-white rounded-bl-2xl rounded-br-2xl xl:p-[0.833vw] p-4 xl:space-y-[1.250vw] space-y-[20px]"
                  onClick={() => getMapId(elm.id)}
                >
                  <div>
                    <div className="text-[#374151] font-bold xl:text-[1.042vw] text-[18px]">
                      {elm.name}
                    </div>
                    <div className="text-[#4B586E] xl:text-[0.833vw] text-[14px] font-normal">
                      {elm.location}
                    </div>
                  </div>
                  <div>
                    {/**col**/}
                    <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] font-normal">Phone</div>
                      <div className="text-[#374151] font-semibold">
                        {elm.phone}
                      </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] font-normal">Fax</div>
                      <div className="text-[#374151] font-semibold">
                        {elm.fax}
                      </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] font-normal">
                        Principal
                      </div>
                      <div className="text-[#374151] font-semibold">
                        {elm.principal}
                      </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px]">
                      <div className="text-[#4B586E] font-normal">
                        Grade Levels
                      </div>
                      <div className="text-[#374151] font-semibold">
                        {elm.grade_level}
                      </div>
                    </div>
                    {/**col**/}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <SchoolDetails
            data={scDetails}
            visible={schoolDetail}
            onHides={() => setSchoolDetail(false)}
          />
        </div>
        {/**School Comparison**/}
        <SignatureProgram data={comparisonArray} />
        <StudentFamilySupport data={comparisonArray} />
        <PerformanceComponent data={comparisonArray} />
        <SchoolDemographics data={comparisonArray} />
      </Layout>
    </>
  );
};
export default SchoolComparisonPage;
