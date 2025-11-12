// import imgMaskGroup1 from "figma:asset/86d49a9dd851ed3d992fa3956880167c29418c5d.png";
// import imgAnalytics82 from "figma:asset/2365256c5cc237022032765fdfed6ef06f27b1d5.png";
// import imgAnalytics122 from "figma:asset/25a21b1412bf3c6a3c30ba47753b472b719f9f86.png";
// import imgAnalytics92 from "figma:asset/03b517d93a0c48f360042bad2d2318c6967c9dac.png";

const imgMaskGroup1 = "/assets/platform/analytics/86d49a9dd851ed3d992fa3956880167c29418c5d.png";
const imgAnalytics82 = "/assets/platform/analytics/2365256c5cc237022032765fdfed6ef06f27b1d5.png";
const imgAnalytics122 = "/assets/platform/analytics/25a21b1412bf3c6a3c30ba47753b472b719f9f86.png";
const imgAnalytics92 = "/assets/platform/analytics/03b517d93a0c48f360042bad2d2318c6967c9dac.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[52.07px] left-0 pointer-events-none rounded-[8.219px] top-0 w-[922.144px]" data-name="Mask group 1">
        <div className="absolute inset-0 overflow-hidden rounded-[8.219px]">
          <img alt="" className="absolute h-[106.45%] left-[-0.21%] max-w-none top-[-3.23%] w-[100.43%]" src={imgMaskGroup1} />
        </div>
        <div aria-hidden="true" className="absolute border-[#d2d2d2] border-[0.616px] border-solid inset-0 rounded-[8.219px]" />
      </div>
      <div className="absolute h-[205.65px] left-0 pointer-events-none rounded-[8.219px] top-[69.59px] w-[318.888px]" data-name="Analytics8 2">
        <div className="absolute inset-0 overflow-hidden rounded-[8.219px]">
          <img alt="" className="absolute h-[105.49%] left-[-1.92%] max-w-none top-[-2.95%] w-[103.17%]" src={imgAnalytics82} />
        </div>
        <div aria-hidden="true" className="absolute border-[#d2d2d2] border-[0.616px] border-solid inset-0 rounded-[8.219px]" />
      </div>
      <div className="absolute h-[205.54px] left-[342.31px] pointer-events-none rounded-[8.219px] top-[69.64px] w-[237.522px]" data-name="Analytics12 2">
        <div className="absolute inset-0 overflow-hidden rounded-[8.219px]">
          <img alt="" className="absolute h-[103.82%] left-[-0.9%] max-w-none top-[-1.49%] w-[101.97%]" src={imgAnalytics122} />
        </div>
        <div aria-hidden="true" className="absolute border-[#d2d2d2] border-[0.616px] border-solid inset-0 rounded-[8.219px]" />
      </div>
      <div className="absolute h-[205.734px] left-[603.26px] pointer-events-none rounded-[8.219px] top-[69.55px] w-[318.888px]" data-name="Analytics9 2">
        <div className="absolute inset-0 overflow-hidden rounded-[8.219px]">
          <img alt="" className="absolute h-[104.17%] left-[-1.09%] max-w-none top-[-1.87%] w-[102.58%]" src={imgAnalytics92} />
        </div>
        <div aria-hidden="true" className="absolute border-[#d2d2d2] border-[0.616px] border-solid inset-0 rounded-[8.219px]" />
      </div>
    </div>
  );
}