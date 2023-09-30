import React from "react";

// Styles
import "./style.scss";
const Navbar = ({ slideTheNav }) => {
  return (
    <div className="flex flex-col gap-14 h-full">
      <div className="navClose_btn" onClick={slideTheNav}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
            fill="rgba(255,255,255,1)"
          ></path>
        </svg>
      </div>
      <div className="logo_section">
        <h1>NotizBuch</h1>
        {/* <h1>Taccunio</h1>
        <h1>Noto</h1> */}
      </div>
      <nav className="main_nav">
        {/* <div className="nav_items before:bg-[#eeff04]"> */}
        <div className="nav_items before:bg-[#e22ae8]">
          {" "}
          <div className="nav_button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001ZM9 10.0001V16.0001H15V10.0001H9ZM11 12.0001H13V14.0001H11V12.0001Z"
                fill="rgba(250,250,250,1)"
              ></path>
            </svg>
            Home
          </div>
        </div>
        <div className="nav_items active  before:bg-cyan-400 before:saturate-200">
          <div className="nav_button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.1039 5.90984C6.68754 6.38398 6.90648 6.3478 8.00238 6.27469L18.3342 5.6543C18.5533 5.6543 18.3711 5.43569 18.2981 5.39936L16.5822 4.15891C16.2534 3.90367 15.8153 3.61134 14.9758 3.68446L4.9715 4.41415C4.60665 4.45033 4.53377 4.63274 4.67909 4.77898L6.1039 5.90984ZM6.72422 8.31764L6.72422 19.1885C6.72422 19.7728 7.01618 19.9913 7.6733 19.9552L19.028 19.2982C19.6854 19.262 19.7586 18.8602 19.7586 18.3856V7.58765C19.7586 7.11382 19.5764 6.85828 19.1739 6.89476L7.30815 7.58765C6.87027 7.62445 6.72422 7.84349 6.72422 8.31764ZM17.9335 8.90078C18.0063 9.22945 17.9335 9.5578 17.6043 9.59473L17.0571 9.70373V17.7293C16.5822 17.9846 16.1441 18.1306 15.7791 18.1306C15.1947 18.1306 15.0484 17.948 14.6107 17.4011L11.0321 11.7832V17.2187L12.1645 17.4742C12.1645 17.4742 12.1645 18.1306 11.2509 18.1306L8.73222 18.2767C8.65905 18.1306 8.73222 17.7661 8.98769 17.693L9.64494 17.5109V10.3241L8.73237 10.251C8.6592 9.92234 8.84146 9.44849 9.35298 9.41171L12.0549 9.22958L15.7791 14.9207V9.88615L14.8296 9.77716C14.7567 9.37538 15.0484 9.08365 15.4135 9.04747L17.9335 8.90078ZM4.13151 3.42922L14.5376 2.66291C15.8155 2.55331 16.1443 2.62672 16.9475 3.21017L20.2692 5.54485C20.8173 5.94632 21 6.05563 21 6.49328V19.2982C21 20.1007 20.7077 20.5753 19.6856 20.6479L7.60101 21.3776C6.83376 21.4142 6.4686 21.3049 6.0668 20.7938L3.6206 17.62C3.18227 17.0358 3 16.5988 3 16.0874L3 4.70557C3 4.0493 3.29242 3.50189 4.13151 3.42922Z"></path>
            </svg>
            Notes
          </div>
        </div>
        <div className="nav_items  before:bg-[#04ff96]">
          <div className="nav_button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M14 18V20L16 21V22H8L7.99639 21.0036L10 20V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H14ZM4 14V16H20V14H4Z"
                fill="rgba(255,255,255,1)"
              ></path>
            </svg>
            About
          </div>
        </div>
      </nav>

      <div className="auth h-full">
        <h3>
          Are you a member? <span className="auth_link">Login</span>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
