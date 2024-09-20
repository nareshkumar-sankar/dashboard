import React from "react";
import "../components/css/Content.css";
import img1 from "../assets/content1.png";
import img2 from "../assets/content2.png";
import img3 from "../assets/content3.png";
import red from "../assets/red.png";

const Content = () => {
  return (
    <>
      <div id="content">
        <div id="header">
          <h1>My Courses</h1>
          <div>
            <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            <i class="fa-regular fa-bell fa-lg"></i>
            <img src={red} alt=""/>
          </div>
        </div>
        <div id="filter">
          <p>Filter By:</p>
          <select>
            <option value="Time">Time</option>
          </select>
          <select>
            <option value="Level">Level</option>
          </select>
          <select>
            <option value="Language">Language</option>
          </select>
          <select>
            <option value="Type">Type</option>
          </select>
        </div>
        <div id="cards">
          <div className="card" id="card1">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="card-content">
              <h3>Operating System</h3>
              <p className="text">
                Learn the basic operating system abstractions,mechanisms,and
                their implementations.
              </p>
              <p className="text2">
                Created by
                <b>Mark Lee</b>
              </p>
              <i class="fa-solid fa-angle-right fa-lg" id="arrow1"></i>
            </div>
          </div>
          <div className="card" id="card2">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="card-content">
              <h3>Artificial Intelligence</h3>
              <p className="text">
                Intelligence demonstrated by machines unlike the natural
                intelligence displayed by humans and animais.
              </p>
              <p className="text2">
                Created by
                <b>Jung Jaehyun</b>
              </p>
              <i class="fa-solid fa-angle-right fa-lg" id="arrow2"></i>
            </div>
          </div>
          <div className="card" id="card3">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="card-content">
              <h3>Software Engneering</h3>
              <p className="text">
                Learn detailed of engineering to the design, development and
                maintenance of software
              </p>
              <p className="text2">
                Created by
                <b>Kim Taeyeong</b>
              </p>
              <i class="fa-solid fa-angle-right fa-lg" id="arrow3"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
