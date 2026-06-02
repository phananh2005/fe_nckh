function AccountMenu() {
  return (
    <div className="group relative">
      <button className="cursor-pointer">
        Account
      </button>

      <div
        className="
          invisible
          absolute
          right-0
          top-full
          mt-2
          w-32
          rounded-lg
          border
          bg-white
          shadow-lg

          opacity-0

          transition-all

          group-hover:visible
          group-hover:opacity-100
        "
      >
        <button
          className="
            block
            w-full
            px-4
            py-2
            text-left
            hover:bg-gray-100
          "
        >
          Login
        </button>

        <button
          className="
            block
            w-full
            px-4
            py-2
            text-left
            hover:bg-gray-100
          "
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default AccountMenu;