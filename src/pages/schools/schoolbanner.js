import { useEffect, useState } from "react";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import PreviousNextMethods from "@/components/website/PreviousNextMethods";
import SchoolDetails from "@/components/website/popups/schooldetails";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { Montserrat } from "@next/font/google";
import { Inter } from "@next/font/google";
import axios from "axios";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const myInter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Schoolbanner(props) {
  const [selectedschool, setSelectedschool] = useState(null);
  const [schoolList, setSchoolList] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [searchByProgram, setSearchByProgram] = useState('');
  const [programList, setProgramList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [scDetails, setScDetails] = useState([]);

  // Pagination
  const [sortColumn, setSortColumn] = useState('name');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const { updateSchoolList, loadMoreCount, appendSchoolList, loadMoreReset } = props;

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: process.env.STRAPI_URL + "/schools",
      });

      // Array for names
      const namesArray = response.data.data.map(
        ({ id, name, latitude, longitude, logo }) => ({
          id,
          name,
          latitude,
          longitude,
          logo,
        })
      );
      setSchoolList(namesArray);
      console.log("schoollist", schoolList);
      // Array for programs
      const programsArray = response.data.data.map(({ programs }) => programs);
      // Use a Set to filter unique titles
      const uniqueTitlesSet = new Set();
      const uniqueArray = programsArray.flat().filter(({ title }) => {
        if (!uniqueTitlesSet.has(title)) {
          uniqueTitlesSet.add(title);
          return true;
        }
        return false;
      });

      // Create an array of objects
      const flattenedArray = uniqueArray.map(({ id, title }) => ({
        value: id,
        label: title,
      }));

      setProgramList(flattenedArray);
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

  const schoolListWithAllOption = [
    { id: null, name: "All Schools" },
    ...schoolList,
  ];

  const handleSchoolChange = async (e) => {
    const selectedSchoolName = e.value.name;
    setSelectedschool(e.value);
    loadMoreReset()
    console.log("e.value", selectedSchoolName);
    // if (selectedSchoolName === "All Schools") {
    //   try {
    //     const response = await axios.get(process.env.STRAPI_URL + "/schools");
    //     console.log("format data", response.data);

    //     console.log("updating from here only")
    //     updateSchoolList(response.data);
    //   } catch (error) {
    //     console.error("Error fetching all schools:", error);
    //   }
    // } else {
    //   try {
    //     const response = await axios.get(
    //       process.env.STRAPI_URL +
    //         "/schools" +
    //         `?filters[name][$contains]=${selectedSchoolName}`
    //     );
    //     console.log("updating from here only")
    //     updateSchoolList(response.data);
    //     //setSearchResults(response.data);
    //   } catch (error) {
    //     console.error("Error fetching search results:", error);
    //   }
    // }
  };

  const handleProgramChange = async (val) => {
    const selectedProgramName = val;
    setSelectedProgram(val);

    if (selectedProgramName.label === "All Programs") {
      setSearchByProgram('')
      // try {
      //   const response = await axios.get(process.env.STRAPI_URL + "/schools");
      //   console.log("format data11111", response.data);
      //   console.log("updating from here only")
      //   updateSchoolList(response.data);
      // } catch (error) {
      //   console.error("Error fetching all schools:", error);
      // }
    } else {
      const foundProgram = programList.find((program) => program.value === val);
      
      if (foundProgram) {
        setSearchByProgram(foundProgram.label)
        // try {
        //   const response = await axios.get(
        //     process.env.STRAPI_URL +
        //       "/schools" +
        //       `?filters[programs][title][$contains]=${foundProgram.label}`
        //   );
        //   console.log("found final", response.data);
        //   console.log("updating from here only")
        //   updateSchoolList(response.data);
        //   // Array for programs
        //   const programsArray = response.data.data.map(
        //     ({ programs }) => programs
        //   );
        //   // Use a Set to filter unique titles
        //   const uniqueTitlesSet = new Set();
        //   const uniqueArray = programsArray.flat().filter(({ title }) => {
        //     if (!uniqueTitlesSet.has(title)) {
        //       uniqueTitlesSet.add(title);
        //       return true;
        //     }
        //     return false;
        //   });
        //   // setSearchResults(response.data);
        // } catch (error) {
        //   console.error("Error fetching search results:", error);
        // }
      } else {
        console.error("Selected program not found in programList:", val);
      }
    }
  };

  const programListWithAllOption = [
    { id: null, label: "All Programs" },
    ...programList,
  ];

  const handleSearch = async () => {
    
    try {
      const response = await axios.get(
        process.env.STRAPI_URL +
          "/schools" +
          `?filters[name][$contains]=${searchTerm}`
      );

      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
   
      if(loadMoreCount === 1){
        appendSchoolList(searchResults);
      }
      else if(loadMoreCount === 2){
        // appendSchoolList(searchResults);
      }
      else{
        updateSchoolList(searchResults);
      }
    
  }, [searchResults]);

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    loadMoreReset()
    // Clear the previous typing timeout
    clearTimeout(typingTimeout);
  };

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

  // Need to Remove after pagination done
  // useEffect(() => {
  //   // Set a new typing timeout
  //   const timeoutId = setTimeout(() => handleSearch(), 1000); // Adjust the delay as needed
  //   setTypingTimeout(timeoutId);

  //   // Clear the typing timeout when the component unmounts or when the input changes
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [searchTerm]);


  // New code Pratap

  const getSchools = async (schoolDropDownName="") => {

    let loadPage = 1;//pageNumber
    if(loadMoreCount === 0){
      setPageNumber(1)
    }
    else if(loadMoreCount === 1){
      let newPageNumber = pageNumber;
      newPageNumber++;
      setPageNumber(newPageNumber)
      loadPage = newPageNumber;

      console.log("loading page", loadPage)
    }
    else if(loadMoreCount === 2){
      return;
    }


    let searchSchool = '';
    if(schoolDropDownName){
      if(schoolDropDownName === 'All Schools'){
        searchSchool = '';
      }
      else{
        searchSchool = schoolDropDownName
      }
    }
    else{
      searchSchool = searchTerm
    }

    let program = '';
    if(searchByProgram){
      program = searchByProgram
    }
    
  

    const response = await axios.get(
      process.env.STRAPI_URL + `/schools?filters[name][$contains]=${searchSchool}&sort[${sortColumn}]=asc&pagination[page]=${loadPage}&pagination[pageSize]=${pageSize}&filters[programs][title][$contains]=${program}`
    );

    setSearchResults(response.data);
    
    console.log("response------>", response);
  }

  useEffect(()=>{
    // We are using timeout for adding delay
    const timeoutId = setTimeout(() => getSchools(), 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, searchByProgram, loadMoreCount])

  const markerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'red',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
  };



  useEffect(()=>{
    if(selectedschool){
      getSchools(selectedschool.name)
    }
  }, [selectedschool])

  const [visible, setVisible] = useState(false);
  const [schoolDetail, setSchoolDetail] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 30.2879265, lng: -97.7386039 }), []);
  const createCustomIcon = (url) => ({
    url: url,
    scaledSize: new window.google.maps.Size(45, 45), // Adjust the size as needed
    anchor: new window.google.maps.Point(70, 70), // Set the anchor point to the center
    
    // styles={styles.fab}
    
  });
  //   map-pin.png
  return (
    <div className="school_banner_wrap">
      <div className="xl:pt-[2.344vw] pt-[40px] xl:px-[5.990vw] px-[20px]">
        <div className="flex justify-center xl:pt-[1.042vw] pt-5 xl:px-[17.396vw] px-[20px]">
          <div className="text-center">
            <div className="breadCrumb flex flex-wrap justify-center gap-[16px] mb-[20px] xl:mb-[1.04vw]">
              <div className="col">
                <Link href={"/"}>
                  <i className="austin-home"></i> Home
                </Link>
              </div>
              <div className="col">
                <i className="austin-arrow-open-right"></i>
              </div>
              <div className="col">Austin Schools</div>
            </div>
            <div className={myMontserrat}>
              <div className="xl:text-[2.500vw] text-[40px] font-extrabold text-[#374151]">
                Austin <span className="font-medium">Schools</span>{" "}
              </div>
            </div>
            <div className={myInter}>
              <div className="text-[#9CA1AB] xl:text-[1.042vw] text-lg font-medium">
                Austin ISD is dedicated to preparing your child for college,
                career, and life. They provide a safe, academically challenging
                environment from Pre-K to 12th grade, emphasizing
                social-emotional learning.{" "}
              </div>
              <div className="text-[#374151] xl:text-[1.042vw] text-lg font-[500]">
                {" "}
                We're ready! Are you?
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between xl:gap-[1.250vw] gap-5 xl:px-[5.208vw] xl:mt-[1.875vw] mt-[30px]">
          {/*col*/}
          <div className="grow xl:w-[32.083vw]">
            <div className="p-inputgroup flex-1 custmSearch">
              <Button icon="austin-search" onClick={handleSearch} />
              <InputText
                placeholder="Search"
                style={{ height: "54px" }}
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <Button icon="austin-close" onClick={handleClearSearch} />
            </div>
          </div>
          {/*col*/}
          <div className="flex flex-wrap items-center xl:gap-[0.417vw] gap-2 customDropdown CusttDropdown">
            <div>
              <Dropdown
                value={selectedschool}
                onChange={handleSchoolChange}
                options={schoolListWithAllOption}
                optionLabel="name"
                placeholder="Select School"
                className="w-full md:w-14rem"
              />
            </div>
            <div>
              <Dropdown
                value={selectedProgram}
                onChange={(e) => {handleProgramChange(e.value); loadMoreReset();}}
                options={programListWithAllOption}
                optionLabel="label"
                placeholder="Program Selection"
                className="w-full md:w-14rem"
              />
            </div>
          </div>
          {/*col*/}
          <div>
            <div
              className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[15px] xl:px-[1.042vw] text-[12px] xl:text-[0.938vw] text-white flex justify-center min-h-full items-center h-[54px] cursor-pointer"
              onClick={() => setVisible(true)}
            >
              Advanced School Search
            </div>
          </div>
        </div>
      </div>
      <div className=" mapouter marker relative w-full h-[420px] ">
        <span className="">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <GoogleMap
                mapContainerClassName="map-container"
                center={center}
                zoom={12}
              >
                {schoolList.map((marker) => (
                  <Marker
                  
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                    icon={createCustomIcon(marker.logo.url)}
                    zIndex={9999}
                    options={{ style: markerStyle }}
                    style={{borderRadius:'50%',border:'2px soild #333'}}
                    // icon={{ url: marker.logo.url, scale: 0.02 }}
                    onClick={() => getMapId(marker.id)}
                    key={marker.id}
                  />
                ))}
              </GoogleMap>
            </>
          )}
        </span>
      </div>

      <div className="w-full">
        <Dialog
          header="Header"
          showHeader={false}
          visible={visible}
          className="Cust_Dialog"
          onHide={() => setVisible(false)}
        >
          <div>
            <div className="flex justify-center xl:mt-[1.875vw] mt-[36px]">
              <Link
                href={""}
                className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2"
                onClick={() => setVisible(false)}
              >
                <span>Cancel</span>
                <i className="autinisd-close-circle"></i>
              </Link>
            </div>
            <div className="flex flex-col items-center text-center xl:mt-[3.281vw] mt-[50px]">
              <div className="xl:w-[25.625vw] xl:space-y-[0.668vw] space-y-2">
                <div className="text-[#374151] xl:text-[1.527vw] text-[20px] font-semibold">
                  Advanced Search
                </div>
                <div className="text-[#4B586E] xl:text-[0.859vw] text-[14px] font-light">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed qu
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                <Link
                  href={""}
                  className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2"
                >
                  <span>Zip: 59632</span>
                  <i className="autinisd-close-circle"></i>
                </Link>
                <Link
                  href={""}
                  className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2"
                >
                  <span>Pre K</span>
                  <i className="autinisd-close-circle"></i>
                </Link>
                <Link
                  href={""}
                  className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2"
                >
                  <span>AVID</span>
                  <i className="autinisd-close-circle"></i>
                </Link>
                <Link
                  href={""}
                  className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2"
                >
                  <span>Creative Learning Iniciative</span>
                  <i className="autinisd-close-circle"></i>
                </Link>
                <Link
                  href={""}
                  className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2"
                >
                  <span>GearUp</span>
                  <i className="autinisd-close-circle"></i>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center xl:mt-[3.125vw] mt-[60px]">
              <div className="xl:w-[28.594vw]">
                <PreviousNextMethods />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
      <SchoolDetails
        data={scDetails}
        visible={schoolDetail}
        onHides={() => setSchoolDetail(false)}
      />
    </div>
  );
}
