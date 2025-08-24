export default function Footer() {
  return (
    <>
      <footer className="text-[#DFD0B8]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#393E46] px-6 md:px-15 py-10 md:py-10">
          {/* Left Section - Email Subscription */}
          <div className="col-span-2 relative text-center md:text-left order-2 md:order-1">
            <div className="relative w-full md:w-[90%]">
              <input
                type="text"
                placeholder="Enter your email to subscribe..."
                className="bg-[#222831] w-full outline-0 p-3.5 rounded-4xl placeholder:text-sm "
              />
              <button className="bg-[#948979] px-4 rounded-r-full absolute right-0 top-0 bottom-0 hover:text-white duration-300">
                <a href="#">Subscribe</a>
              </button>
            </div>
            <p className="pt-7 text-sm md:text-base">
              Copyright 2014 Company name. Designed by Themezy. All rights
              reserved
            </p>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex justify-center md:justify-evenly items-center gap-4 flex-wrap order-1 md:order-2">
            {["facebook-f", "twitter", "google-plus-g", "pinterest"].map(
              (icon, i) => (
                <a
                  key={i}
                  className="bg-[#222831] px-2.5 rounded-4xl h-[50px] w-[50px] relative hover:bg-[#948979] hover:text-white duration-300"
                  href="#"
                >
                  <i
                    className={`fa-brands fa-${icon} absolute start-[50%] top-[50%] translate-[-50%]`}
                  ></i>
                </a>
              )
            )}
          </div>
        </div>
      </footer>
    </>
  );
}
