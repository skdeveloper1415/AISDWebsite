import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "@/components/loader";
import { Toast } from "primereact/toast";

const adminStylesheets = [
  "/styles/admin/filtercomponent.css",
  "/styles/admin/leftmenu.css",
  "/styles/admin/nstyle.css",
  "/styles/admin/skstyle.css",
  "/styles/admin/systyle.css",
];

export default function Index() {
  const [Loading, setLoading] = useState(false);

  const toast = useRef(null);

  const router = useRouter();
  // Google Login
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setLoading(true);
      sessionStorage.setItem("GoogleAccessToken", tokenResponse?.access_token);
      try {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenResponse?.access_token}`
          )
          .then((resp) => {
            // sessionStorage.setItem("UserName", resp?.data?.name)
            sessionStorage.setItem("UserImage", resp?.data?.picture);
            sessionStorage.setItem("UserEmail", resp?.data?.email);
            axios
              .post(process.env.BASE_URL + "/auth/login", {
                email: resp?.data?.email,
                googleToken: tokenResponse?.access_token,
              })
              .then((response) => {
                response?.data?.message.includes("successfully") &&
                  sessionStorage.setItem(
                    "UserName",
                    `${response?.data?.user?.firstName} ${response?.data?.user?.lastName}`
                  );
                // response?.data?.message.includes('successfully') && sessionStorage.setItem("UserImage", `${response?.data?.user?.profile_pic}`)
                response?.data?.message.includes("successfully") &&
                  sessionStorage.setItem(
                    "AccessToken",
                    `${response?.data?.token}`
                  );
                response?.data?.message.includes("successfully") &&
                  sessionStorage.setItem(
                    "UserID",
                    `${response?.data?.user?.user_id}`
                  );
                response?.data?.message.includes("successfully") &&
                  sessionStorage.setItem("IsAuthenticated", true);
                router.push("/");
              })
              .catch((error) => {
                router.push("/logoutRedirect");
                console.log(error, "error logged");
              });
          });
      } catch (error) {
        setLoading(false);
        console.log(error, "error logged");
      }
    },
    onFailure: (error) => console.log(error, "error logged"),
  });

  return (
    <>
      {Loading ? (
        <Loader message="Authenticating..." />
      ) : (
        <>
          <Head>
            <title>Welcome to Austin ISD</title>
            <meta
              name="google-site-verification"
              content="W6XmndxNINBwm3c3p5KH0Sar2-92Hufz7t4kD0-d1HA"
            />
            <meta name="description" content="" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
            {router.pathname.startsWith("/admin") &&
              adminStylesheets.map((stylesheet, index) => (
                <link key={index} rel="stylesheet" href={stylesheet} />
              ))}
          </Head>

          <div className="bg-[#FAF9F9] website_login-wrap-bg  h-screen">
            <div className="flex items-center justify-between py-[16px] px-[115px] xl:py-[0.833vw] xl:px-[5.990vw] bg-[#FAF9F9] border-[1px] border-[#E6E3D9] z-[999999]">
              <div>
              <Link href="/">
                <Image
                  src="/assets/images/logo.svg"
                  width="24"
                  height="24"
                  className="w-[10.365vw]"
                  alt=""
                />
                </Link>
              </div>
              <div className="text-[16px] xl:text-[0.833vw] font-semibold px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-[8px] cursor-pointer text-[#FFFFFF] bg-[#1F2A37]">
                Contact Us
              </div>
            </div>
            <div className="flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-0">
              <div className="flex flex-wrap flex-row justify-center auto-rows-max xl:pt-[5.958vw]">
                <div className=" max-w-md 2xl:max-w-lg w-full p-2">
                  <form autoComplete="off">
                    <div className="mb-[26px] xl:mb-[1.354vw]">
                      <h2 className="text-[24px] xl:text-[1.875vw] font-semibold text-[#242526]">
                        Login
                      </h2>
                    </div>

                    <div className="flex w-full mb-[40px] xl:mb-[2.083vw]">
                      <span
                        onClick={() => login()}
                        className="cursor-pointer flex items-center justify-center gap-2 text-[#53565A] bg-[#FFFFFF] border-[1px] border-[#E6E3D9] text-[16px] xl:text-[0.833vw] rounded-lg w-full text-center py-[12px] xl:py-[0.625vw] "
                      >
                        <Image
                          src="/assets/images/Google_icon.png"
                          width="24"
                          height="24"
                          className=""
                          alt=""
                        />
                        Sign in with Google
                      </span>
                    </div>
                  </form>
                </div>
              </div>

              <div className="hidden 2xl:block lg:block">
                <div className="login-wrap-bg h-screen"></div>
              </div>
            </div>
          </div>
        </>
      )}
      <Toast ref={toast}></Toast>
    </>
  );
}
