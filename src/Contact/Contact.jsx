import React from "react";
import video from "../assets/WhatsApp Video 2025-06-13 at 02.41.33_b603ed7b.mp4";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#222831] text-[#DFD0B8] px-6 md:px-28 py-10 md:py-20">
          {/* Left Side */}
          <div>
            <div className="bg-[#393E46]">
              <video
                className="h-[250px] md:h-[400px] w-full object-cover"
                controls
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="pt-4">
              <div className="py-3 flex items-center">
                <i className="fa-solid fa-location-dot px-3"></i>
                Company Name INC. 2803 Avenue Street, Los Angeles
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-3">
                <div className="flex items-center">
                  <i className="fa-solid fa-phone px-3"></i>+1 800 314 235
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-envelope px-3"></i>
                  contact@companyname.com
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-2xl md:text-4xl pb-5">Contact us</h2>
            <p className="pb-5 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              consectetur inventore ducimus, facilis, numquam id soluta omnis
              eius recusandae nesciunt vero repellat harum cum. Nisi facilis
              odit hic, ipsum sed!
            </p>
            <form action="">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="border p-2 rounded-4xl outline-[#DFD0B8] w-full md:w-1/2"
                />
                <input
                  type="text"
                  placeholder="Email Address..."
                  className="border p-2 rounded-4xl outline-[#DFD0B8] w-full md:w-1/2"
                />
              </div>

              <div className="py-4 flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Company name..."
                  className="border p-2 rounded-4xl outline-[#DFD0B8] w-full md:w-1/2"
                />
                <input
                  type="text"
                  placeholder="Website..."
                  className="border p-2 rounded-4xl outline-[#DFD0B8] w-full md:w-1/2"
                />
              </div>

              <textarea
                placeholder="Message..."
                className="border p-2 rounded-4xl outline-[#DFD0B8] w-full h-32"
              />

              <div className="pt-2.5 text-center">
                <input
                  type="submit"
                  className="w-1/2 md:w-1/4 px-4 py-2.5 rounded-4xl border hover:bg-[#DFD0B8] hover:text-white duration-300"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
