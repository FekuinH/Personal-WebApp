import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

//recibe todos los props proveniente del sistema de rutas, dentro de ellos esta el header, content, (layout)
export default function LayoutBasic(props) {
  //extraigo el objeto rutas de los props
  const { routes } = props;
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu sider</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Alejandro Bruzzese</Footer>
      </Layout>
    </Layout>
  );
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
