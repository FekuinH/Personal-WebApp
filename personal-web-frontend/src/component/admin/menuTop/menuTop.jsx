import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "antd";

import "./menuTop.scss";

export default function MenuTop(props) {
  //destructiring
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <Link to={"/admin"}>
        <h4>AB WebApp</h4>
      </Link>
      <div className="menu-top__left">
        <div className="menu-top__left-logo"></div>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>

      <div className="menu-top__right">
        <Button type="link">
          <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  );
}
