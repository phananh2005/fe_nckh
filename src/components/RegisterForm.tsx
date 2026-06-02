type RegisterFormProps = {
  onLoginClick: () => void;
};

function RegisterForm({ onLoginClick }: RegisterFormProps) {
  return (
    <div className="w-full max-w-md font-sans">
      <h1 className="text-center text-xl  text-[#444439] mb-5">
        Register
      </h1>
      <div >
        <label className="text-sm ">First Name</label>
        <input type="text" className="border border-gray-400 "/>
        <input type="text" className="border border-gray-400 "/>
        <label className="text-sm ">Last Name</label>

      </div>

      <div className="flex flex-col gap-4">
        <label>Email</label>
        <input
          className="rounded-md
            border
            border-gray-300
            px-3
            py-2
            outline-none
            focus:border-yellow-600"
          type="email"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Your Password"
          className="
            rounded-lg
            border
            border-gray-300
            px-3
            py-2
            outline-none
            focus:border-yellow-600
          "
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="
            rounded-lg
            border
            border-gray-300
            px-3
            py-2
            outline-none
            focus:border-yellow-600
          "
        />
      </div>

      <button
        className=" mt-2
            rounded-lg
            bg-yellow-600
            w-full
            py-3
            font-medium
            text-white
            transition
            hover:bg-yellow-700 "
      >
        Register
      </button>

      <p className="mt-5 text-center text-gray-600">
        Already have an account?
        <button
          onClick={onLoginClick}
          className="ml-2 text-yellow-600 hover:underline"
        >
          Login 
        </button>
      </p>
    </div>
  );
}

export default RegisterForm;
