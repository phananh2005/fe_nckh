import { useState } from "react";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import loginImg from "../assets/login.png";

function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen ">
      <div className="flex w-1/2">
        <img src={loginImg} alt="Fashion" className="w-full object-cover" />
      </div>

      <div className="flex w-1/2 items-center justify-center px-8">
        <div
          className=" w-full max-w-md rounded-2xl border
            border-[#D18B13] bg-white p-8
            shadow-lg"
        >
          {isLogin ? (
            <LoginForm onRegisterClick={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onLoginClick={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
