import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import RegisterForm from "../../../component/admin/RegisterForm/RegisterForm";

import "./SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <Layout className="sign-in">
      <Content className="sign-in-content">
        <h1 className="sign-in-content-logo">Alejandro Bruzzese WebApp</h1>

        <div className="sign-in-content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              Componente LoginForm
            </TabPane>
            <TabPane tab={<span>Nuevo usuario</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
