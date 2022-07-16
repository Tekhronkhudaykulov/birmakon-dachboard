import React, { useEffect } from "react";
import { Header, HeaderBrand } from "../elements/_container";
import { FaBars } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import RossiaFlag from "../../assets/img/russia.png";
import "../../assets/scss/_container.scss";
import { useDispatch, useSelector } from "react-redux";
import { categoryProduct } from "../../redux/action/Product/CategoryProductAction";
import { categoryRegion } from "../../redux/action/Product/CategoryRegionAction";
import { useHistory } from "react-router-dom";
import { ImExit } from "react-icons/im";

const TheHeader = () => {
  const dispatch = useDispatch();

  const sidebarShow = useSelector((state) => state.user.sidebarShow);
  const history = useHistory();
  useEffect(() => {
    dispatch(categoryProduct());
    dispatch(categoryRegion());
  }, []);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "sidebar_toggle", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";

    dispatch({ type: "sidebar_toggle", sidebarShow: val });
  };

  const handleLogout = () => {
    window.localStorage.removeItem("@token");
    history.push("/dashboard");
    window.location.reload();
  };

  return (
    <Header className="header">
      <FaBars
        className="header_bars_mobile"
        size="18"
        style={{ color: "white", cursor: "pointer" }}
        onClick={toggleSidebarMobile}
      />
      <FaBars
        className="header_bars"
        size="18"
        style={{ color: "white", cursor: "pointer" }}
        onClick={toggleSidebar}
      />

      <HeaderBrand></HeaderBrand>
      <div className="header_notification">
        <BsFillBellFill
          size="20"
          className="BsFillBellFill"
          style={{ color: "white", cursor: "pointer" }}
        />
        <div className="_language">
          <img src={RossiaFlag} alt="Russia" />
          <span>Py</span>
        </div>
        <div
          className="exitButton"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginLeft: "25px",
          }}
        >
          <ImExit onClick={handleLogout} color="white" size={20} />
        </div>
      </div>
    </Header>
  );
};

export default TheHeader;
