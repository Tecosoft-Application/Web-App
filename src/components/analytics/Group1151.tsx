// import imgDashboardDrawio213 from "figma:asset/1ae33b1441a77bdf1e366d60901c43de63161240.png";
import { imgDashboardDrawio212 } from "../../imports/svg-e8co2";
import Group1152 from "./Group1152";
import { MotionValue } from "framer-motion";
const imgDashboardDrawio213 = "/assets/platform/analytics/1ae33b1441a77bdf1e366d60901c43de63161240.png";
function MaskGroup() {
  return (
    <div
      className="absolute contents left-[189.85px] top-0"
      data-name="Mask group"
    >
      <div
        className="absolute h-[212.866px] left-[-29.59px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[219.44px_64.928px] mask-size-[162.731px_129.856px] top-[-64.93px] w-[969.813px]"
        data-name="dashboard.drawio 2 1 2"
        style={{ maskImage: `url('${imgDashboardDrawio212}')` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[551.79%] left-[-0.82%] max-w-none top-[-3.73%] w-[101.65%]"
            src={imgDashboardDrawio213}
          />
        </div>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div
      className="absolute contents left-[379.71px] top-0"
      data-name="Mask group"
    >
      <div
        className="absolute h-[212.866px] left-[-26.3px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[406.006px_64.928px] mask-size-[162.731px_129.856px] top-[-64.93px] w-[969.813px]"
        data-name="dashboard.drawio 2 1 3"
        style={{ maskImage: `url('${imgDashboardDrawio212}')` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[551.79%] left-[-0.82%] max-w-none top-[-3.73%] w-[101.65%]"
            src={imgDashboardDrawio213}
          />
        </div>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div
      className="absolute contents left-[569.56px] top-0"
      data-name="Mask group"
    >
      <div
        className="absolute h-[212.866px] left-[-21.37px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[590.928px_64.928px] mask-size-[162.731px_129.856px] top-[-64.93px] w-[969.813px]"
        data-name="dashboard.drawio 2 1 4"
        style={{ maskImage: `url('${imgDashboardDrawio212}')` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[551.79%] left-[-0.82%] max-w-none top-[-3.73%] w-[101.65%]"
            src={imgDashboardDrawio213}
          />
        </div>
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="Mask group"
    >
      <div
        className="absolute h-[212.866px] left-[-34.52px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[34.519px_64.928px] mask-size-[162.731px_129.856px] top-[-64.93px] w-[969.813px]"
        data-name="dashboard.drawio 2 1 1"
        style={{ maskImage: `url('${imgDashboardDrawio212}')` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[551.79%] left-[-0.82%] max-w-none top-[-3.73%] w-[101.65%]"
            src={imgDashboardDrawio213}
          />
        </div>
      </div>
    </div>
  );
}

function MaskGroup4({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <div
      className="absolute contents left-[759.41px] top-0"
      data-name="Mask group"
    >
      <div
        className="absolute h-[212.866px] left-[-18.08px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[777.494px_64.928px] mask-size-[162.731px_129.856px] top-[-64.93px] w-[969.813px]"
        data-name="dashboard.drawio 2 1 5"
        style={{ maskImage: `url('${imgDashboardDrawio212}')` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[551.79%] left-[-0.82%] max-w-none top-[-3.73%] w-[101.65%]"
            src={imgDashboardDrawio213}
          />
        </div>
      </div>
      <div className="absolute left-0 top-[180px] w-[922.144px] h-[134.788px]">
        <Group1152 scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

function Group({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <div className="absolute contents left-0 top-0">
      <MaskGroup3 />
      <MaskGroup4 scrollYProgress={scrollYProgress} />
    </div>
  );
}

export default function Group1({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <div className="relative size-full">
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
      <Group scrollYProgress={scrollYProgress} />
    </div>
  );
}