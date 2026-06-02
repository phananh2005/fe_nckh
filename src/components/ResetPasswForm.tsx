type ResetPasswordFormProps = {
  onBackClick: () => void;
};

function ResetPasswordForm({ onBackClick }: ResetPasswordFormProps) {
  return (
    <div className="w-full max-w-md">
      <h1
        style={{ fontFamily: "Work Sans" }}
        className="mb-8 text-center text-[12px] font-normal"
      >
        RESET YOUR PASSWORD
      </h1>

      <p className="mb-8 text-center text-sm text-gray-600">
        Enter your email address below and we will send you a code to reset
        password.
      </p>

      <div>
        <label className="block text-[11px]">Email</label>

        <input type="email" className="h-10 w-full rounded border px-3 text-sm" />
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
          RESET PASSWORD
        </button>
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onBackClick}
          className="font-medium"
        >
          &larr; Back to Login
        </button>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
