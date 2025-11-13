"use client";

export default function CapabilityCard3() {
  const protocols = [
    { name: "ethernet", logo: "/assets/platform/eagle/ethernet.png" },
    { name: "wifi", logo: "/assets/platform/eagle/wifi.png" },
    { name: "GSM", logo: "/assets/platform/eagle/GSM.png" }
  ];

  return (
    <div className="bg-[#005b80] box-border content-stretch flex flex-col gap-[36px] items-start overflow-clip p-[48px] rounded-[16px] w-[1152px] relative shadow-[0px_20px_60px_rgba(0,0,0,0.2)]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[40px] not-italic relative shrink-0 text-white text-[34px]">{`Supported Protocols & Drivers`}</p>

      <div className="grid grid-cols-3 gap-x-[80px] gap-y-[60px] w-full mt-[20px] justify-between">
        {protocols.map((protocol, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[156px]"
          >
            <img
              src={protocol.logo}
              alt={protocol.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}