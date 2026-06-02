const helpItems = [
  "Size Guide",
  "Order & Delivery",
  "Return & Exchange",
  "Material Care",
  "Payment Modes",
];

function FooterHelp() {
  return (
    <div>
      <h3
        style={{ fontFamily: "Work Sans" }}
        className="text-[12px] font-normal tracking-wider"
      >
        HELP
      </h3>

      <ul className="mt-8 space-y-3">
        {helpItems.map((item) => (
          <li
            key={item}
            className="
        text-[12px]
        font-normal
        leading-5
        text-[#000000]
      "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterHelp;
