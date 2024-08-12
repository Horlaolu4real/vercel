import Digidish from "../asset/Frame 33 (1).png";
import Overview from "../asset/overview 1.png";
import User from "../asset/user-management 1 (1).png";
import Setting from "../asset/setting-1 1 (1).png";
import { HiLogin } from "react-icons/hi";
export default function Header() {
  return (
    <header className="header">
      <div className="Digidish">
        <img src={Digidish} alt="" />
      </div>
      <div className="Digidish-2">
        <img className="image" src={Overview} alt="" />
        <h4 className="image-2">Dashboard</h4>
      </div>
      <div className="Digidish-2">
        <img className="image" src={User} alt="" />
        <h4 className="image-2">Resturaunt management</h4>
      </div>
      <div className="Digidish-2">
        <img className="image" src={Setting} alt="" />
        <h4 className="image-2">Setting</h4>
      </div>
      <div className="log">
        <div className="icons">
          <HiLogin />
        </div>
        <h4>Logout</h4>
      </div>
    </header>
  );
}
