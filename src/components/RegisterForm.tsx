type RegisterFormProps = {
  onLoginClick: () => void;
};

function RegisterForm({ onLoginClick }: RegisterFormProps) {
  return (
    <div className="w-full max-w-md">
      <h1
        style={{ fontFamily: "Work Sans" }}
        className="mb-8 text-center text-[12px] font-normal"
      >
        REGISTER
      </h1>

      <div className="flex flex-col gap-4">
        {/* First + Last Name */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-[11px]">
              First Name
            </label>

            <input
              type="text"
              className="h-10 w-full rounded border px-3 text-sm"
            />
          </div>

          <div className="flex-1">
            <label className="block text-[11px]">
              Last Name
            </label>

            <input
              type="text"
              className="h-10 w-full rounded border px-3 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px]">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="h-10 w-full rounded border px-3 text-sm"
          />
        </div>

        <div>
          <label className="block text-[11px]">
            Password
          </label>

          <input
            type="password"
            className="h-10 w-full rounded border px-3 text-sm"
          />
        </div>

        <div>
          <label className="block text-[11px]">
            Confirm Password
          </label>

          <input
            type="password"
            className="h-10 w-full rounded border px-3 text-sm"
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          className="
            w-full
            bg-gray-700
            py-2.5
            text-[11px]
            text-white
            transition
            hover:bg-black
          "
        >
          REGISTER
        </button>
      </div>

      <div className="mt-6 text-center text-sm">
        <button
          type="button"
          onClick={onLoginClick}
        >
          &larr; Back to Login
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
