import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaTv, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Logo", iconUrl:"images/northeastern.jpeg", className: "wd-nav-image"},
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 red-icons" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 red-icons" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 red-icons" /> },
    { label: "Inbox",    icon: <FaInbox className="fs-2 red-icons" />},
    {label: "History", icon: <FaHistory className="fs-2 red-icons" />},
    {label: "Studio" , icon: <FaTv className="fs-2 red-icons" />},
    {label: "Commons", icon: <FaSignOutAlt className="fs-2 red-icons" />},
    {label: "Help", icon: <FaQuestionCircle className="fs-2 red-icons" />}
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={link.label !== "Account" && pathname.includes(link.label) ? "wd-active" : ""}>
           {/* Conditionally render the image */}
           {link.label === "Logo" ? (
            <a href="http://northeastern.edu"><img src={link.iconUrl} alt={link.label} className={link.className} /></a>
          ) : (
            <Link to={`/Kanbas/${link.label}`}>{link.icon} {link.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;