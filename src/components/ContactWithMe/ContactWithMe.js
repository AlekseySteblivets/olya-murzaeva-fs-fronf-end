// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
import SocialMedia from "@/src/lib/SocialMedia/SocialMedia";
import AboutMe from "../AboutMe/AboutMe";
// import SocialMedia from "@/lib/SocialMedia/SocialMedia";
import ContactData from "../ContactData/ContactData";
import ItemSocialMedia from "../ItemSocialMedia/ItemSocialMedia";
// import SendForm from "../../forms/SendForm/SendForm";
// import SendForm from "../../forms/SendForm";

export default function ContactWithMe() {
  // const location = useLocation();

  // const [pathnameLocationContactIsTrue, setPathnameLocationContactIsTrue] =
  //   useState(false);

  // console.log("locationContact", location);

  // const curPathnameLocation = () => {
  //   if (location.pathname === "/contact")
  //     return setPathnameLocationContactIsTrue(true);
  // };

  // useEffect(() => {
  //   curPathnameLocation();
  // });

  return (
    <div>
      <AboutMe pathnameLocationContactIsTrue={true}>
        <SocialMedia>
          <ItemSocialMedia />
        </SocialMedia>
        <ContactData />
      </AboutMe>
      {/* <SendForm /> */}
    </div>
  );
}
