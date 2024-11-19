import { assets } from "../assets/assete";

const Section7 = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center h-[350px] lg:px-28 px-6 font-poppins mb-9">
        <div className="w-[50%]">
          <img src={assets.designSection} className="w-[400px]" alt="" />
        </div>
        <div className="flex flex-col gap-9 w-[50%]">
          <h2 className="text-4xl font-medium text-[#4D4D4D]">
            How to design your site footer like we did
          </h2>
          <span className="text-sm font-normal text-[#717171]">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </span>
          <div className="flex items-center justify-center w-24 py-2 px-6 bg-[#4CAF4F] rounded-[5px] transition-all hover:bg-[#3b803d] cursor-pointer">
            <p className="text-[#fff] text-base">Learn</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
