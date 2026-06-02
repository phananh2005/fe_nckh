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
      <h3 className="font-semibold tracking-widest">
        HELP
      </h3>

      <ul className="mt-6 space-y-4 text-gray-500">
        {helpItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-black"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterHelp;