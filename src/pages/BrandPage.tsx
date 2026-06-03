import brandImg from "../assets/thebracnh.png";

export default function BranchPage() {
  return <>
    {/* header */}
    <h2 style={{fontFamily: "Work Sans"}} className="text-center text-[24px]">THE BRAND</h2>
    <p className="mt-2 text-[16px] text-justify px-12">Bella Wang creates artful designs for women on the move, blending modern aesthetics with precision in every cut to craft pieces that are both striking and versatile. Always ahead of the curve, each Bella Wang creation is a statement of style, celebrating individuality, dependence, and the free sprit of the contemporary woman.</p>


    {/* img */}
    <div className="mt-8">
      <img src={brandImg} alt="the brand" className="mx-auto w-full object-cover" />
    </div>
  </>;
}
