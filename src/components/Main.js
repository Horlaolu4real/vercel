import { SlCalender } from "react-icons/sl";
import Frame from "../asset/Frame 1618869053 (1).png";
import Recipt from "../asset/receipt-item.png";
import Zero from "../asset/00.png";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Main() {
  return (
    <div className="main-content">
      <div className="header-2">
        <div className="main-header">
          <h1>Admin Dashboard</h1>
          <p> Overview of platform activity and performance metrics.</p>
        </div>
        <div className="main-head">
          <div className="icons">
            <SlCalender />
          </div>
          <h3>Jan 12, 2024-Jan 18, 2024</h3>
          <div className="icons">
            <MdOutlineArrowDropDown />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flx">
          <div className="flx-2">
            <img src={Frame} alt="" />
            <h6>Total resturaunt</h6>
          </div>
          <div className="brb">
            <img className="mid" src={Zero} alt="" />
          </div>
        </div>
        <div className="flx">
          <div className="flx-2">
            <img src={Frame} alt="" />
            <h6>Total menu</h6>
          </div>
          <div className="brb">
            <img className="mid" src={Zero} alt="" />
          </div>
        </div>
        <div className="flx">
          <div className="flx-2">
            <img src={Frame} alt="" />
            <h6>Feedbacks</h6>
          </div>
          <div className="brb">
            <img className="mid" src={Zero} alt="" />
          </div>
        </div>
        <div className="flx">
          <div className="flx-2">
            <img src={Frame} alt="" />
            <h6>Total order made</h6>
          </div>
          <div className="brb">
            <img className="mid" src={Zero} alt="" />
          </div>
        </div>
      </div>

      <div className="frame">
        <div className="mid-flex">
          <img className="receipt" src={Recipt} alt="" />
          <h2 className="act">No activity yet</h2>
          <div className="para">
            <p>
              Once there is an activity in the users page it will reflect here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
