import React from "react";
import { Link } from "react-router-dom";

function Fotter() {
  return (
    <footer>
      <div class="footer-content">
        <h3 className="">Library L</h3>
        <p>
          Library List is a website For Popular And New Library This All Content
          Does Not Belong To{" "}
          <a href="https://github.com/maligaurav947">maligaurav</a>. Or You can
          See This is collection of data form internet
        </p>
      </div>
      <div class="footer-bottom">
        <p>
          copyright &copy;2022{" "}
          <a href="https://github.com/maligaurav947">@maligaurav947</a>{" "}
        </p>
        <div class="footer-menu">
          <ul class="f-menu">
            <Link to="/library-list-react/" exact>
              <li>Home</li>
            </Link>
            <Link to="/library-list-react/List" exact>
              <li>List</li>
            </Link>
            <Link to="/library-list-react/About" exact>
              <li>About</li>
            </Link>
            <Link to="/library-list-react/Contact" exact>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;
