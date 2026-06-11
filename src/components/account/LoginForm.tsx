type LoginFormProps = {
  onRegisterClick: () => void;
  onForgotPasswordClick: () => void;
};

function LoginForm({
  onRegisterClick,
  onForgotPasswordClick,
}: LoginFormProps) {
  return (
    <div className="w-full max-w-md">
      <h1
        style={{ fontFamily: "Work Sans" }}
        className="mb-8 text-center text-[12px] font-normal"
      >
        LOGIN
      </h1>

      {/* inp */}
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-[11px]">Email</label>

          <input
            type="email"
            className="h-10 w-full rounded border px-3 text-sm"
          />
        </div>

        <div>
          <label className="block text-[11px]">Password</label>

          <input
            type="password"
            className="h-10 w-full rounded border px-3 text-sm"
          />
        </div>
      </div>

      {/* link */}
      <div className="mt-6 flex justify-between text-sm">
        <button
          type="button"
          onClick={onForgotPasswordClick}
          className="text-center text-[#1a1a1a] underline"
        >
          Forgot Your Password?
        </button>
        <button
          type="button"
          onClick={onRegisterClick}
          className="text-[#1a1a1a] underline"
        >
          Register
        </button>
      </div>

      {/* btn */}
      <div className="flex flex-col gap-5 mt-8">
        <button
          className="
            mt-2
            bg-[#404040]
            py-2.5
            border
            text-[11px]
            text-white
            transition
          "
        >
          LOGIN
        </button>

        <button className="mt-2 w-full border border-[#404040] py-2.5 text-[11px] font-medium text-black">
          LOGIN WITH GOOGLE
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
