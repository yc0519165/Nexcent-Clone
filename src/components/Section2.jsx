import { assets } from "../assets/assete";

export const Section2 = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center lg:px-28 px-6 font-poppins mb-9">
        <h2 className="text-4xl font-medium mb-3 text-[#4D4D4D]">
          Our Clients
        </h2>
        <p className="text-lg font-normal text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="w-full flex justify-between py-10">
          <img src={assets.client1} alt="" />
          <img src={assets.client2} alt="" />
          <img src={assets.client3} alt="" />
          <img src={assets.client4} alt="" />
          <img src={assets.client5} alt="" />
          <img src={assets.client6} alt="" />
          <img src={assets.client7} alt="" />
        </div>
      </div>
    </>
  );
};
