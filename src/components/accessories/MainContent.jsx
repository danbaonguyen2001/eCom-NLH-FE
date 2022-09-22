import React,{useEffect, useState,useRef} from "react";
import ListCate from "./ListCate";

import "../../sass/accessories/accessories.scss";
import ListBrand from "./ListBrand";
import ProductDeal from "./ProductDeal";
import AppleAccessries from "./AppleAccessries";
import BackupBattery from "./BackupBattery";
import CableCharge from "./CableCharge";
import Headphone from "./Headphone";
import Speaker from "./Speaker";
import Tech from "./Tech";
import Gaming from "./Gaming";
import MenuTopFixed from "./MenuTopFixed";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function MainContent() {

  

  return (
    <div className="mainContent">
      <MenuTopFixed />
      <div className="accessories-container">
        <ListCate />
        <ListBrand />
        <ProductDeal />
      
        <AppleAccessries   />
      
        <BackupBattery   />
        <CableCharge />
        <Headphone />
        <Speaker />
        <Tech />
        <Gaming />
      </div>
    </div>
  );
}

export default MainContent;
