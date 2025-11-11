import { motion } from 'framer-motion';
import svgPathsFeatures from "../imports/svg-ssflelrdzm";




const imgFrame1171277136 = "/assets/platform/eagle/data-process.png";
const imgFrame1171277140 = "/assets/platform/eagle/one-box-solution.png";
const imgFrame1171277142 = "/assets/platform/eagle/operator-dashboard.png";
const imgFrame1171277145 = "/assets/platform/eagle/operator-dashboard.png";
  

export const featureCards = [
  {
    id: 1,
    type: 'image' as const,
    height: 'h-[220px]',
    image: imgFrame1171277136,
    icon: 'floppy-disk',
    title: 'Data Acquisition & Preprocessing'
  },
  {
    id: 2,
    type: 'white' as const,
    height: 'h-[98px]',
    icon: 'refresh',
    title: 'Integrates to MES/ERP/Cloud',
    description: 'Seamlessly forward data to MES, ERP, and cloud systems through built-in APIs.'
  },
  {
    id: 3,
    type: 'white' as const,
    height: 'h-[98px]',
    icon: 'cpu',
    title: 'Flexible Edge Intelligence',
    description: 'Smart edge logic enables faster decisions and lighter upstream data processing.'
  },
  {
    id: 4,
    type: 'image' as const,
    height: 'h-[220px]',
    image: imgFrame1171277140,
    icon: '3d-square',
    title: 'One-box Solution'
  },
  {
    id: 5,
    type: 'white' as const,
    height: 'h-[98px]',
    icon: 'cloud',
    title: 'Real-time KPIs',
    description: 'Edge metrics reveal instant performance insights with minimal latency.'
  },
  {
    id: 6,
    type: 'white' as const,
    height: 'h-[120px]',
    icon: 'link',
    title: 'Connect • Collect • Control',
    description: 'Connect devices, gather telemetry, and control machines from the edge platform.'
  },
  {
    id: 7,
    type: 'image' as const,
    height: 'h-[198px]',
    image: imgFrame1171277142,
    icon: 'grid-lock',
    title: 'Closed-loop System'
  },
  {
    id: 8,
    type: 'image' as const,
    height: 'h-[364px]',
    image: imgFrame1171277145,
    icon: '3d-square',
    title: 'Operator Dashboard'
  },
  {
    id: 9,
    type: 'white' as const,
    height: 'h-[198px]',
    icon: 'driver',
    title: 'Store & Forward',
    description: 'Local buffering prevents data loss and ensures delivery after reconnection.'
  }
];

export function FeatureCard({ card, index }: { card: typeof featureCards[0], index: number }) {
  if (card.type === 'image') {
    return (
      <motion.div 
        className={`box-border content-stretch flex flex-col gap-[12px] items-start justify-end overflow-clip p-[16px] rounded-[12px] ${card.height} w-full relative`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={card.image} />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
        </div>
        
        {/* Icon rendering */}
        {card.icon === 'floppy-disk' && (
          <div className="overflow-clip relative shrink-0 size-[30px] z-10" data-name="floppy-disk">
            <div className="absolute inset-[8.33%_12.5%]">
              <div className="absolute inset-[-3.75%_-4.17%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
                  <path d={svgPathsFeatures.p38be83d0} stroke="white" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M7.75 5.75002H11.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPathsFeatures.p37eac880} stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        )}
        
        {card.icon === '3d-square' && (
          <div className="relative shrink-0 size-[30px] z-10">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsFeatures.pcd9f0c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsFeatures.p219db680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M12 17.77V12.32" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsFeatures.p26c92500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        )}
        
        {card.icon === 'grid-lock' && (
          <div className="relative shrink-0 size-[30px] z-10">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsFeatures.p2c3f66b4} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M2.03 8.5H22" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M2.03 15.5H12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M8.51001 21.99V2.01001" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M15.51 11.99V2.01001" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsFeatures.p3fbc6340} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsFeatures.p2f453700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        )}
        
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full z-10">
          <p className="font-['Gilroy:Semibold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[18px] text-white w-full">{card.title}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={`bg-white box-border content-stretch flex ${card.height === 'h-[198px]' ? 'flex-col' : 'flex-row'} gap-[16px] ${card.height === 'h-[198px]' ? 'items-start' : 'items-center'} p-[16px] rounded-[12px] ${card.height} w-full relative`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      <div className={`box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[28px] py-[29px] relative rounded-[12px] shrink-0 ${card.height === 'h-[198px]' ? 'size-[66px]' : 'aspect-[66/66] h-full'}`}>
        {/* Icon rendering for white cards */}
        {card.icon === 'refresh' && (
          <div className="relative size-[30px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <path d={svgPathsFeatures.p3aa73c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPathsFeatures.p2b7284e8} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        )}
        
        {card.icon === 'cpu' && (
          <div className="relative size-[30px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsFeatures.p4025b00} stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsFeatures.p2a720700} stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M8.01 4V2" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M12 4V2" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M16 4V2" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M20 8H22" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M20 12H22" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M20 16H22" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M16 20V22" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M12.01 20V22" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M8.01 20V22" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M2 8H4" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M2 12H4" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M2 16H4" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        )}
        
        {card.icon === 'cloud' && (
          <div className="relative size-[30px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsFeatures.p4ad57a0} stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d={svgPathsFeatures.p118e600} stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            </svg>
          </div>
        )}
        
        {card.icon === 'link' && (
          <div className="relative size-[30px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsFeatures.p1bd44780} stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsFeatures.p11ecf400} stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        )}
        
        {card.icon === 'driver' && (
          <div className="relative size-[30px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsFeatures.p3589d200} stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsFeatures.p8084070} stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M6 5V7" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M10 5V7" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M6 17V19" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M10 17V19" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M14 6H18" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M14 18H18" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
        <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">{card.title}</p>
        {card.description && (
          <p className="font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">{card.description}</p>
        )}
      </div>
    </motion.div>
  );
}
