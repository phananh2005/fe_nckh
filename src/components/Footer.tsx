import FooterBrand from "./FooterBrand";
import FooterHelp from "./FooterHelp";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F7F7F7] ">
      <div className="footer-circles" aria-hidden="true">
        <div className="circle circle-left"></div>
        <div className="circle circle-top"></div>
        <div className="circle circle-right"></div>
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-8
          py-16
          lg:px-10
          lg:py-20
        "
      >
        <div className="max-w-md">
          <FooterBrand />
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 lg:w-[62%] lg:grid-cols-[1fr_1.25fr_1fr]">
          <FooterHelp />
          <FooterContact />
          <FooterSocial />
        </div>
      </div>

      <div className="h-24 bg-[#EBCB88]" />
    </footer>
  );
}

export default Footer;
