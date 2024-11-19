export const Header = () => {
  return (
    <>
      <div className="h-16 w-full flex items-center justify-between lg:px-28 px-6 font-poppins">
        <div className="text-3xl cursor-pointer">
          <img src="/src/assets/Logo.svg" alt="" className="w-32" />
        </div>
        <div className="flex items-center justify-center gap-5 text-[#4D4D4D]">
          <ul className="flex items-center justify-center gap-6 text-base font-medium cursor-pointer">
            <li className="mr-6">Home</li>
            <li>Feature</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
          <div className="flex items-center justify-end py-2 px-6 bg-[#4CAF4F] rounded-[5px] transition-all hover:bg-[#3b803d] cursor-pointer">
            <p className="text-[#fff] flex gap-4 text-base">
              Register Now{" "}
              {/* <img src={assets.arroWhite} className="text-[#fff]" /> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
