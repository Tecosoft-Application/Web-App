"use client";

export default function CapabilityCard1() {
  const protocols = [
    { name: "OPC UA", logo: "/assets/platform/eagle/opcua.png" },
    { name: "Modbus", logo: "/assets/platform/eagle/modbus.png" },
    { name: "MTConnect", logo: "/assets/platform/eagle/mtconnect.png" },
    { name: "MQTT", logo: "/assets/platform/eagle/mqtt.png" },
    { name: "FANUC", logo: "/assets/platform/eagle/fanuc.png" },
    { name: "I/O", logo: "/assets/platform/eagle/iot.png" },
    { name: "HTTP", logo: "/assets/platform/eagle/http.png" },
  ];

  return (
    <div className="bg-[#ccf1ff] box-border content-stretch flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[30px] xl:gap-[36px] items-start overflow-clip p-[20px] sm:p-[26px] md:p-[32px] lg:p-[40px] xl:p-[48px] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] w-full relative shadow-[0px_10px_30px_rgba(0,0,0,0.2)] sm:shadow-[0px_12px_36px_rgba(0,0,0,0.2)] md:shadow-[0px_15px_45px_rgba(0,0,0,0.2)] lg:shadow-[0px_18px_52px_rgba(0,0,0,0.2)] xl:shadow-[0px_20px_60px_rgba(0,0,0,0.2)]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[36px] xl:leading-[40px] not-italic relative shrink-0 text-[#005b80] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[31px] xl:text-[34px]">{`Supported Protocols & Drivers`}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-[20px] sm:gap-x-[30px] md:gap-x-[40px] lg:gap-x-[65px] xl:gap-x-[80px] gap-y-[20px] sm:gap-y-[28px] md:gap-y-[35px] lg:gap-y-[50px] xl:gap-y-[60px] w-full mt-[8px] sm:mt-[10px] md:mt-[12px] lg:mt-[16px] xl:mt-[20px]">
        {protocols.map((protocol, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[40px] sm:h-[48px] md:h-[56px] lg:h-[70px] xl:h-[80px]"
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