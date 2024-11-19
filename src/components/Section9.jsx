import { assets } from "../assets/assete";

export const Section9 = () => {
  return (
    <>
      <div className="w-full flex items-center flex-col gap-10 h-auto justify-between lg:px-28 px-6 font-poppins mb-9">
        <div className="flex flex-col items-center w-[48%] gap-4">
          <h2 className="text-3xl font-medium text-[#4D4D4D]">
            Caring is the new marketing
          </h2>
          <p className="text-sm font-normal text-[#717171] text-center">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See whos joining the
            community, read about how our community are increasing their
            membership income and lots more{" "}
          </p>
        </div>
        <div className="w-full flex justify-between items-center mb-32">
          <div className="relative flex items-center justify-center">
            <img src={assets.marketing2} className="w-[350px] h-[250px]" />
            <div className="flex flex-col gap-4 items-center text-center justify-center absolute top-48 w-[75%] bg-[#F5F7FA] shadow-xl p-4 rounded-lg transition-all hover:top-44 cursor-pointer">
              <p className="text-base font-medium text-[#717171]">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <span className="text-[#4CAF4F] flex items-center gap-3 font-medium text-base">
                ReadMore
                <img src={assets.arrowGreen} />
              </span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img src={assets.marketing2} className="w-[350px] h-[250px]" />
            <div className="flex flex-col gap-4 items-center text-center justify-center absolute top-48 w-[75%] bg-[#F5F7FA] shadow-xl p-4 rounded-lg transition-all hover:top-44 cursor-pointer">
              <p className="text-base font-medium text-[#717171]">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <span className="text-[#4CAF4F] flex items-center gap-3 font-medium text-base">
                ReadMore
                <img src={assets.arrowGreen} />
              </span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img src={assets.marketing3} className="w-[350px] h-[250px]" />
            <div className="flex flex-col gap-4 items-center text-center justify-center absolute top-48 w-[75%] bg-[#F5F7FA] shadow-xl p-4 rounded-lg transition-all hover:top-44 cursor-pointer">
              <p className="text-base font-medium text-[#717171]">
                Revamping the Membership <br /> Model with Triathlon <br />{" "}
                Australia
              </p>
              <span className="text-[#4CAF4F] flex items-center gap-3 font-medium text-base">
                ReadMore
                <img src={assets.arrowGreen} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
