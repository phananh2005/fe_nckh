import { useState } from "react";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import ResetPasswordForm from "../components/ResetPasswForm";
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
    <div className="flex bg-white pt-22 pb-20">
      <div className="flex w-1/2">
        <img
          src={loginImg}
          alt="Fashion"
          className="h-182 w-full object-cover"
        />
      </div>

      <div className="flex w-1/2 items-start justify-center pt-20">
        <div
          className="
            w-full
            max-w-95
            rounded-lg
            border
            border-[#D18B13]
            bg-white
            px-8
            py-7
          "
        >
          {renderAccountForm()}
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
