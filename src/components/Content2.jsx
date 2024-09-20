import React from "react";
import "../components/css/Content2.css";
import user_icon from "../assets/123.png";
import user1 from "../assets/icon1.png";
import user2 from "../assets/icon2.png";
import user3 from "../assets/icon3.png";
import user4 from "../assets/icon4.png";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Content2 = () => {
  const users = [
    {
      icon: user1,
      name: "Maren Maureen",
      id: 123456789,
      status: <i class="fa-solid fa-circle"></i>,
    },
    {
      icon: user2,
      name: "Jenniffer Jane",
      id: 32347589,
      status: <i class="fa-solid fa-circle"></i>,
    },
    {
      icon: user3,
      name: "Ryan Herwinds",
      id: 823456789,
      status: <i class="fa-solid fa-circle"></i>,
    },
    {
      icon: user4,
      name: "Kierra Culhane",
      id: 423456789,
      status: <i class="fa-solid fa-circle"></i>,
    },
  ];
  return (
    <>
      <div id="content2">
        <div id="con-header">
          <div>
            <h4>Christine Eva</h4>
            <p>123456789</p>
          </div>
          <div>
            <img src={user_icon} alt="" />
          </div>
        </div>

        <div id="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar"]}>
              <DateCalendar
                referenceDate={dayjs("2022-04-17")}
                views={["year", "month", "day"]}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div id="con-footer">
          <div id="f-header">
            <h3>Online Users</h3>
            <span>See all</span>
          </div>

          {users.map((user) => (
            <div className="f-main">
              <div>
                <img src={user.icon} alt="" />
              </div>
              <div className="f-user">
                <h5>{user.name}</h5>
                <p>{user.id}</p>
              </div>
              <div className="f-footer">
                <span>{user.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Content2;
