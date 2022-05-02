import React from "react";
import Navbar from "../components/Navbar";
import "../styles/sections/Home.css";
import "../styles/components/Navbar.css";
import { Button, TextInput } from "@mantine/core";
import MessageIcon from "../images/MessageIcon.svg";
import ArrowRightIcon from "../images/ArrowRightIcon.svg";
import HeroImg1 from "../images/HeroImg1.webp";
import HeroImg2 from "../images/HeroImg2.webp";
import { homeFormValidation } from "../helpers/validation";

import FormControl from "../Form/FormControl";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-alpha">
          <h2>Earn crypto by learning crypto skills</h2>
          <p className="home-text">
            Contribute to earn platform where anyone can earn crypto by learning
            how to use blockchain products and completing quests.
          </p>
          <div className="home-form">
            <div>
              <img
                className="home-svg"
                src={MessageIcon}
                alt={MessageIcon}
              ></img>
            </div>
            <div>
              <FormControl
                control="input"
                type="email"
                name="email"
                placeholder="Sign up for Alpha Testing"
                radius={0}
              />
            </div>
            <div className="home-btn">
              <Button radius={0}>Submit</Button>
            </div>
          </div>
          <div className="home-video">
            <a href="">Or Watch Demo Video</a>
            <img src={ArrowRightIcon} alt={ArrowRightIcon}></img>
          </div>
        </div>
        <div className="home-beta">
          <img className="heroimg1" src={HeroImg1} alt={HeroImg1}></img>
          <img className="heroimg2" src={HeroImg2} alt={HeroImg2}></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
