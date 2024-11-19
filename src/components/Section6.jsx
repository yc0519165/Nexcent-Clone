import { assets } from "../assets/assete";

export const Section6 = () => {
  return (
    <>
      <div className="w-full flex items-center h-[250px] justify-between bg-[#e8f5e9] lg:px-28 px-6 font-poppins mb-9">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium text-[#4D4D4D]">
            Helping a local <br />
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h1>
          <p className="text-[#18191F]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex items-center justify-between w-[50%] flex-wrap">
          <div className="flex items-center gap-5 p-6 ">
            <img src={assets.bussMember} alt="" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-[#4D4D4D]">2,245,341</h2>
              <p className="text-xs font-normal text-[#717171]">Members</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-6 ">
            <img src={assets.bussClubs} alt="" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-[#4D4D4D]">1,926,436</h2>
              <p className="text-xs font-normal text-[#717171]">Clubs</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-6 ">
            <img src={assets.bussEvents} alt="" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-[#4D4D4D]">828,867</h2>
              <p className="text-xs font-normal text-[#717171]">
                Event Bookings
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-6 pr-6">
            <img src={assets.bussPaymment} alt="" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-[#4D4D4D]">9,26,4361</h2>
              <p className="text-xs font-normal text-[#717171]">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
