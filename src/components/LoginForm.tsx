type LoginFormProps = {
  onRegisterClick: () => void;
};

function LoginForm({ onRegisterClick }: LoginFormProps) {
  return (
    <div className="w-full max-w-md font-sans">
      <h1 className="mb-5 text-center text-sm">LOGIN</h1>

      <div className="flex flex-col gap-4">
        <label className="text-sm">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="
            rounded-lg
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-yellow-600
          "
        />
        <label className="text-sm">Password</label>
        <input
          type="password"
          placeholder="Your Password"
          className="
            rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-600
          "
        />
        <div className="flex justify-between">
          <p className="text-center text-[#1a1a1a] underline">
            Forgot Your Password?
          </p>
          <button
            onClick={onRegisterClick}
            className="text-[#1a1a1a] underline"
          >
            Register
          </button>
        </div>

        <button
          className="
            mt-2
            bg-gray-700
            py-3
            border
            border-white
            text-white
            transition
            hover:bg-yellow-700
          "
        >
          LOGIN
        </button>

        <button
          className="
            mt-2
            bg-white
            py-3
            border
            border-gray-700
            text-black
            transition
            hover:bg-yellow-700
          "
        >
          LOGIN WITH GOOGLE
        </button>

        
      </div>
    </div>
  );
}

export default LoginForm;
