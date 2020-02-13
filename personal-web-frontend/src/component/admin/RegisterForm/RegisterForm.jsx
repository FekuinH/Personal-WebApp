import React from "react";
import { Form, Icon, Input, Button, Checkbox, nofi } from "antd";

import "./RegisterForm.scss";

export default function RegisterForm() {
  return (
    <Form className="register-form">
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form-input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25" }} />}
          type="password"
          name="password"
          placeholder="Password"
          className="register-form-input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Confirmar contraseña"
          className="register-form-input"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
            name="privacity"
        >He leído y estoy de acuerdo con las políticas de privacidad</Checkbox>
      </Form.Item>
      <Form.Item>
          <Button
          htmlType="submit"
          className="register-form-button"
          >Crear cuenta</Button>
      </Form.Item>
    </Form>
  );
}
