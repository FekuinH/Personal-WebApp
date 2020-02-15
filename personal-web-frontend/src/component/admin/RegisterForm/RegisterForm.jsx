import React, { useState } from "react";
import { Form, Icon, Input, Button, Checkbox, notification } from "antd";
import {
  emailValidation,
  minLengthValidation
} from "../../../utils/formValidation";
import { signUpApi } from "../../../api/userService";
import { sendMessage } from "../../../utils/SuccesErrorMessage";

import "./RegisterForm.scss";

export default function RegisterForm() {
  //nuevo state para manejar el estado de los inputs
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacity: false
  });
  //state para validarFormulario
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacity: false
  });

  //funcion para cambiar el valor de los inputs
  const changeForm = e => {
    if (e.target.name === "privacity") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      });
    }
  };

  const resetForm = () =>{
    
    let inputs = document.getElementsByTagName('input');
    
      for(let i = 0; i < inputs.length; i++){
        inputs[i].classList.remove("success");
        inputs[i].classList.remove("error");
      }
    
    
    setInputs({
      email: "",
      password: "",
      repeatPassword: "",
      privacity: false
    });

    setFormValid({
      email: "",
      password: "",
      repeatPassword: "",
      privacity: false
    });
  }

  //check if form is valid
  const isAValidForm = () => {
    const { email, password, repeatPassword, privacity } = formValid;
    return email && password && repeatPassword && privacity;
  };

  //funcion para validar los input
  const inputvalidation = e => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
    }
    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };

  const register = async e => {
    e.preventDefault();
    const { password, repeatPassword } = inputs;

    //check si las contraseñas son iguales
    if (password !== repeatPassword) {
      notification["error"]({ message: "Las contraseñas deben coincidir" });
      return;
    }
    //conectar API y guardar usuario
    const result = await signUpApi(inputs);
    sendMessage(result.ok, result.message);
    resetForm();
  };

  return (
    <Form className="register-form" onSubmit={register}>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form-input"
          value={inputs.email}
          onChange={e => {
            changeForm(e);
            inputvalidation(e);
          }}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25" }} />}
          type="password"
          name="password"
          placeholder="Password"
          className="register-form-input"
          value={inputs.password}
          onChange={e => {
            changeForm(e);
            inputvalidation(e);
          }}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Confirmar contraseña"
          className="register-form-input"
          value={inputs.repeatPassword}
          onChange={e => {
            changeForm(e);
            inputvalidation(e);
          }}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacity"
          checked={inputs.privacity}
          onChange={e => {
            changeForm(e);
            inputvalidation(e);
          }}
        >
          He leído y estoy de acuerdo con las políticas de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          className="register-form-button"
          disabled={!isAValidForm()}
        >
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
