import { assets } from "../assets/assete";

export const Section8 = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between bg-[#e8f5e9] py-3 lg:px-28 px-6 font-poppins mb-9">
        <div className="w-[35%]">
          <img src={assets.tesla} className="w-[350px]" alt="" />
        </div>
        <div className="w-[65%] flex flex-col gap-2 items-start">
          <p className="text-sm font-normal text-[#717171]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h4 className="text-xl font-medium text-[#4CAF4F]">Tim Smith</h4>
          <span className="text-sm font-normal text-[#89939E]">
            British Dragon Boat Racing Association
          </span>
          <div className="w-full mt-4 flex justify-between items-start">
            <div className="flex gap-8">
              <img src={assets.client11} alt="" />
              <img src={assets.client2} alt="" />
              <img src={assets.client3} alt="" />
              <img src={assets.client4} alt="" />
              <img src={assets.client5} alt="" />
            </div>
            <div className="cursor-pointer">
              <p className="text-[#4CAF4F] flex items-center gap-3 font-medium text-base">
                Meet all customers
                <img src={assets.arrowGreen} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
