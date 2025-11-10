import img from "figma:asset/82dd0515bceaed0e1f5b0ddeaee16daa2e70e9c6.png";

export default function CapabilityCard2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[36px] items-start overflow-clip p-[40px] rounded-[16px] w-[1152px] relative shadow-[0px_20px_60px_rgba(0,0,0,0.2)]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[39px] not-italic relative shrink-0 text-[#005b80] text-[32px] w-[308px]">Universal Machine Connectivity</p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4f4f4f] text-[16px] w-[610px]">EAGLE connects CNCs, VMCs, HMCs, and molding systems through industry-standard protocols to ensure reliable, unified data flow across machines. It streamlines production monitoring, enhances visibility, and drives smarter, faster decisions in manufacturing environments.</p>
      <div className="absolute h-[250px] right-[80px] top-1/2 -translate-y-1/2 w-[350px]" data-name="Generated Image November 01, 2025 - 4_47PM 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={img} />
      </div>
    </div>
  );
}
