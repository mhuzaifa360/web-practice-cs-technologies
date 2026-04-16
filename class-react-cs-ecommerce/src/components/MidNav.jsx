import React from "react";

function MidNav() {
  return (
    <div>
        {/* Logo */}
      <div className="logoSection">
        <p>LOGO HERE</p>
      </div>

        {/* Search Section */}
      <div className="searchSection">
        <form action="">
          <div>
            <select name="" id="">
              <option value="">All Categories</option>
            </select>
          </div>
        </form>
        <div>
          <form action="">
            <input type="text" placeholder="search..." />
          </form>
        </div>
        <button></button>
      </div>

    {/* User Section     */}
      <div className="userSection">

      </div>
    </div>
  );
}

export default MidNav;
