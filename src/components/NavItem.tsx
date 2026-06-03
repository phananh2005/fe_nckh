import { useNavigate } from "react-router-dom";

type NavItemProps = {
  title: string;
};

function NavItem({ title }: NavItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title.toLowerCase() === "account") {
      navigate("/account");
      return;
    }
    if (title.toLowerCase() === "the brand") {
      navigate("/brand");
      return;
    }
    if (title.toLowerCase() === "bella wang") {
      navigate("/");
      return;
    }


    // alert("Day la: " + title);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-[11px] font-normal uppercase text-[#1A1A1A] hover:text-yellow-700"
    >
      {title}
    </button>
  );
}

export default NavItem;
