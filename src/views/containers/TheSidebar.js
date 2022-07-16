import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Sidebar,
  ContainerSidebar,
  SidebarNav,
  SidebarTitle,
  SidebarElement,
  SidebarNavItems,
  SidebarIcons,
  SidebarNavTitle,
} from "../elements/_container";
import "../../assets/scss/_container.scss";
import { useHistory } from "react-router-dom";
import _nav from "./_nav";
import { useEffect } from "react";
import { profileClient } from "../../redux/action/Auth/ProfileClientAction";
import { useDispatch } from "react-redux";

const TheSidebar = () => {
  const show = useSelector((state) => state.user.sidebarShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileClient());
  }, []);

  const profile = useSelector((state) => state.profileClient.profileClient);

  const [activeItemNav, setActiveItemNav] = useState("");

  const history = useHistory();

  return (
    <Sidebar show={show} className="_sidebar">
      <SidebarNav>
        <SidebarTitle style={{ fontFamily: "monospace" }}>
          {profile.name}
        </SidebarTitle>
      </SidebarNav>
      <ContainerSidebar>
        {_nav.map((nav, idx) => (
          <div key={idx}>
            {nav._tag === "SidebarNavItem" ? (
              <SidebarNavItems
                className={`sidebar_nav_items ${
                  nav.navName === activeItemNav ? "activeNav" : ""
                }`}
                to={nav.to}
                onClick={() => {
                  setActiveItemNav(nav.navName);
                }}
                style={{ textDecoration: "none" }}
              >
                <SidebarElement>
                  <SidebarIcons>{nav.icon}</SidebarIcons>
                  <SidebarTitle>{nav.name}</SidebarTitle>
                </SidebarElement>
              </SidebarNavItems>
            ) : (
              <SidebarNavTitle>{nav.name}</SidebarNavTitle>
            )}
          </div>
        ))}
      </ContainerSidebar>
    </Sidebar>
  );
};

export default TheSidebar;
