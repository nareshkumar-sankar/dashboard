import React, { useState } from 'react'
import "../components/css/Silder.css"
import icon1 from "../assets/app.png"
import icon2 from "../assets/allCourse.png"
import icon3 from "../assets/message.png"
import icon4 from "../assets/friends.png"
import icon5 from "../assets/schedule.png"
import icon6 from "../assets/setting.png"
import icon7 from "../assets/directory.png"
import Content from './Content'
import Content2 from './Content2'

const Silder = () => {
    // const menu =[
    //     {icon:icon1,content:"Dashboard"},
    //     {icon:icon2,content:"All Courses"},
    //     {icon:icon3,content:"Messages"},
    //     {icon:icon4,content:"Friends"},
    //     {icon:icon5,content:"Schedule"}
    // ];
    
  return (
    <>
      <div id='silder'>
       <div id='main'>
       <h2>ēCoursie</h2>
        <div className='sidebar'>
             <button id='menu'><img src={icon1} /><span>Dashboard</span></button>
             <button className='menus'><img src={icon2} alt="" /><span>All Courses</span></button>
             <button className='menus'><img src={icon3} alt="" /><span>Messages</span></button>
             <button className='menus'><img src={icon4} alt="" /><span>Friends</span></button>
             <button className='menus'><img src={icon5} alt="" /><span>Schedule</span></button>
        </div>
        <div id='setting'>
            <button className='menus'><img src={icon6} alt="" /><span>Settings</span></button>
            <button className='menus'><img src={icon7} alt="" /><span>Directory</span></button>
        </div>
       </div>
       <Content/>
       <Content2/>
      </div>
    </>
  )
}


export default Silder
