import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";
import {loginApi} from '../../../api/userService';
import { sendMessage } from "../../../utils/SuccesErrorMessage";
import { Redirect } from "react-router-dom";

import "./LoginForm.scss";

export default function LoginForm() {
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });

    const handleForm =(e) =>{
       setInputs({
        ...inputs,
        [e.target.name]: e.target.value
       })
        
    }

    const login = async (e) =>{
        e.preventDefault()
       const result = await loginApi(inputs); 
       sendMessage(result.ok,result.message);
       //si fue un login correcto guardo el token y redirect to admin
       if (result.ok){
        localStorage.setItem('accesToken',result.accesToken);
        localStorage.setItem('refreshToken',result.refreshToken);
        window.location.href = '/admin';
       }
    }
  return (
    <Form className="login-form" onChange={handleForm} onSubmit={login}>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.12" }} />}
          type="email"
          name="email"
          placeholder="Correo Electronico"
          className="login-form-input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.12" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form-input"
        />
      </Form.Item>
      <Form.Item>
        <Button className="login-form-button" htmlType="submit">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
}
;