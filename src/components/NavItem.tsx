import { useNavigate } from "react-router-dom";

type NavIemProps = {
  title: string;
};

function NavItem({ title }: NavIemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "Account") {
      navigate("/account");
      return;
    }

    alert("Đây là: " + title);
  };
  return (
    <button
      onClick={handleClick}
      className="font-medium text-gray-700 hover:text-black"
    >
      {title}
    </button>
  );
}

export default NavItem;
