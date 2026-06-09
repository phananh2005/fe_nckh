import FooterBrand from "./FooterBrand";
import FooterHelp from "./FooterHelp";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FFFFFF] ">
      <div className="footer-circles" aria-hidden="true">
        <div className="circle circle-left"></div>
        <div className="circle circle-top"></div>
        <div className="circle circle-right"></div>
      </div>

      <div
        className=" relative z-10 px-8 py-16 lg:px-13 lg:py-18"
      >
        <div className="max-w-md">
          <FooterBrand />
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-3 lg:w-180 lg:grid-cols-[180px_250px_1fr] lg:gap-13.5">
          <FooterHelp />
          <FooterContact />
          <FooterSocial />
        </div>
      </div>

      <div className="h-19.75  bg-yellow-600" />
    </footer>
  );
}

export default Footer;
