export const Secrion1 = () => {
  return (
    <>
      <div className="h-[500px] w-full flex items-center justify-between bg-[#E8F5E9] lg:px-28 px-6 font-poppins mb-9">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-medium mr-28 text-[#4D4D4D]">
            Lessons and insights{" "}
            <span className="text-[#4CAF4F]">from 8 years</span>
          </h1>
          <p className="text-base font-normal text-[#717171]">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="flex items-center justify-center w-24 py-2 px-6 bg-[#4CAF4F] rounded-[5px] transition-all hover:bg-[#3b803d] cursor-pointer">
            <p className="text-[#fff] text-base">Register</p>
          </div>
        </div>
        <div className="ml-6">
          <img
            src="/src/assets/Illustration-section-1.svg"
            className="w-[450px] animate-pulse"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
