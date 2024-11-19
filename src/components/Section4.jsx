import { assets } from "../assets/assete";

export const Section4 = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between lg:px-28 px-6 font-poppins mb-9">
        <div className="flex items-center justify-between gap-16">
          <div className="p-8 shadow-lg flex items-center flex-col gap-4">
            <img src={assets.community1} alt="" />
            <h3 className="text-2xl font-medium text-center text-[#4D4D4D]">
              Membership Organisations
            </h3>
            <p className="text-center font-normal text-sm text-[#717171]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="p-8 shadow-lg flex items-center flex-col gap-4">
            <img src={assets.community2} alt="" />
            <h3 className="text-2xl font-medium text-center text-[#4D4D4D]">
              National <br />
              Associations
            </h3>
            <p className="text-center font-normal text-sm text-[#717171]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="p-8 shadow-lg flex items-center flex-col gap-4">
            <img src={assets.community3} alt="" />
            <h3 className="text-2xl font-medium text-center text-[#4D4D4D]">
              Clubs <br /> And Groups
            </h3>
            <p className="text-center font-normal text-sm text-[#717171]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
