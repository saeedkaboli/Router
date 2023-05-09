import { Link, Outlet } from "react-router-dom";
import data from "../../Data/data.js";
const First = () => {
    return (
      <div className="Header first">
        <div id="R">
          {data.map((link) => (
            <Link to={`${link.id}`} className="LinkFirst">
              {`${link.linkitem}`}
            </Link>
          ))}
        </div>
        <div id="L">
        <Outlet/>
        </div>
      </div>
    )
};
export default First;
