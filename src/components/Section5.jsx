import { assets } from "../assets/assete";

export const Section5 = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center h-[350px] lg:px-28 px-6 font-poppins mb-9">
        <div className="w-[50%]">
          <img src={assets.unseen} className="w-[400px]" alt="" />
        </div>
        <div className="flex flex-col gap-9 w-[50%]">
          <h2 className="text-4xl font-medium text-[#4D4D4D]">
            The unseen of spending three years at Pixelgrade
          </h2>
          <span className="text-sm font-normal text-[#717171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </span>
          <div className="flex items-center justify-center w-24 py-2 px-6 bg-[#4CAF4F] rounded-[5px] transition-all hover:bg-[#3b803d] cursor-pointer">
            <p className="text-[#fff] text-base">Learn</p>
          </div>
        </div>
      </div>
    </>
  );
};
