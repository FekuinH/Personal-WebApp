import React, { useState, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../component/admin/menuTop";
import MenuSider from "../component/admin/menuSider/MenuSider";
import AdmingSignIn from '../pages/Admin/SignIn/SignIn';
import {getAccesToken} from '../api/auth';
import useAuth from '../hooks/useAuth'

import "./LayoutAdmin.scss";


//recibe las props del componente App
export default function LayoutAdmin(props) {
  //extraigo el objeto rutas de los props
  const { routes } = props;
  //estado del menu
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  //destroy
  const { Header, Content, Footer } = Layout;

  //usuario modelo en la pantalla
  const user = null;


  

  //cada vez que se accede a esta ruta, check si el usuario no esta logeado o identificado (null) devuelve la pagina de login
  return (!user)

  ?

  <Fragment>
    <Route path='/admin/login' component={AdmingSignIn}></Route>
    <Redirect to='/admin/login' />
  </Fragment>
  
  :

    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
       className="layout-admin"
       style={{marginLeft: menuCollapsed ? "80px" : "200px"}}
       >
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer">Alejandro Bruzzese</Footer>
      </Layout>
    </Layout>
  
  
  
  
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
