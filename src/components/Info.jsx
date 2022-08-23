import React from "react";
// import portrait from "../assets/img/portrait.jpg";
import SocialProfileSimple from "./SocialProfileSimple";

import { ChakraProvider } from "@chakra-ui/react";

export default function Info() {
  return (
    <ChakraProvider>
      <SocialProfileSimple />
      {/* <div>
      <img src={portrait} alt="portrait" />
      <h1 className="info--name">Laura Smith</h1>
      <h3 className="info--job">Front End Developer</h3>
      <h4 className="info--website">laurasmith.website</h4>
      <button className="button--email">Email</button>
      <button className="button--linkedin">Linkedin</button>
    </div> */}
    </ChakraProvider>
  );
}
