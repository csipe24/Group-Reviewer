import React, { useRef } from "react";
import api from "../utils/api";
import { useLogin } from "../utils/auth";
import RegisterForm from "../components/RegisterForm"

function Register() {

  return (
    <div>
    <RegisterForm/>
    </div>

  );
}

export default Register;
