import React from "react";
import { Link, useLocation } from "react-router";

function Header() {
  const location = useLocation();
  const navbar = [
    {
      id: 1,
      pathname: "/",
      pathvalue: "HTML",
    },
    {
      id: 2,
      pathname: "/css",
      pathvalue: "CSS",
    },
    {
      id: 3,
      pathname: "/javascript",
      pathvalue: "Javascript",
    },
    {
      id: 4,
      pathname: "/sql",
      pathvalue: "Sql",
    },
    {
      id: 5,
      pathname: "/python",
      pathvalue: "Python",
    },
  ];

  return (
    <div className="bg-black text-white p-2 mt-10 flex">
      {navbar.map((item, index) => (
        <div key={index}>
          <Link
            to={item.pathname}
            className={` ${ location.pathname === item.pathname ? "bg-green-950 p-2 ml-5" : "bg-black ml-5"}`} >{item.pathvalue}  </Link>
        </div>
      ))
      }
    </div>
  );
}

export default Header;
