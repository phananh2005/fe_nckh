import { useState } from "react";

import LoginForm from "../components/account/LoginForm";
import RegisterForm from "../components/account/RegisterForm";
import ResetPasswordForm from "../components/account/ResetPasswForm";
import loginImg from "../assets/login.png";

type AccountMode = "login" | "register" | "reset-password";

function AccountPage() {
  const [mode, setMode] = useState<AccountMode>("login");

  const renderAccountForm = () => {
    if (mode === "register") {
      return <RegisterForm onLoginClick={() => setMode("login")} />;
    }

    if (mode === "reset-password") {
      return <ResetPasswordForm onBackClick={() => setMode("login")} />;
    }

    return (
      <LoginForm
        onRegisterClick={() => setMode("register")}
        onForgotPasswordClick={() => setMode("reset-password")}
      />
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-white pt-10 md:pt-22 pb-10 md:pb-20">
      {/* IMAGE */}
      <div className="hidden md:block md:w-1/2 ">
        <img
          src={loginImg}
          alt="Fashion"
          className="md:w-[714px] md:h-[813px] object-cover"
        />
      </div>

      {/* FORM */}
      <div className="flex w-full md:w-1/2 items-start justify-center pt-10 md:pt-20 px-4 md:px-0">
        <div
          className="
          w-full
          max-w-95
          rounded-lg
          border
          border-[#D18B13]
          bg-white
          px-6 md:px-8
          py-6 md:py-7
        "
        >
          {renderAccountForm()}
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
