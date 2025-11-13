"use client";

export default function CapabilityCard4() {
  const protocols = [
    { name: "OPC UA", logo: "/assets/platform/eagle/opcua.png" },
    { name: "Modbus", logo: "/assets/platform/eagle/modbus.png" },
    { name: "MTConnect", logo: "/assets/platform/eagle/mtconnect.png" },
    { name: "MQTT", logo: "/assets/platform/eagle/mqtt.png" },
    { name: "FANUC", logo: "/assets/platform/eagle/fanuc.png" },
    { name: "I/O", logo: "/assets/platform/eagle/io.png" },
    { name: "HTTP", logo: "/assets/platform/eagle/http.png" },
  ];

  return (
    <div className="bg-[#2ac3ff] box-border content-stretch flex flex-col gap-[36px] items-start overflow-clip p-[48px] rounded-[16px] w-[1152px] relative shadow-[0px_20px_60px_rgba(0,0,0,0.2)]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#005b80] text-[34px]">{`Supported Protocols & Drivers`}</p>

      <div className="grid grid-cols-4 gap-x-[80px] gap-y-[60px] w-full mt-[20px]">
        {protocols.map((protocol, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[80px]"
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