import React, { useEffect, useState } from "react";
import Axios from "axios";

import Spinner from "../Spinner/Spinner";

export default function Photos() {
  const [ArrPhotos, setArrPhotos] = useState(null);

  async function getNews() {
    try {
      const req = await Axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      setArrPhotos(req.data);
    } catch (err) {
      console.error("Error fetching Photos:", err);
    }
  }

  useEffect(() => {
    getNews();
  }, []);
  console.log(ArrPhotos);

  return (
    <>
      <section className="bg-[#222831] Photos py-10">
        {ArrPhotos ? (
          <div className="flex flex-wrap px-4 sm:px-10 md:px-16 lg:px-28 ">
            {ArrPhotos?.map((x, index) => (
              <div
                key={index}
                className="inner w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              >
                <div className="bg-[#393E46] rounded-2xl overflow-hidden relative hover:shadow-xl transition duration-300">
                  <div className="relative">
                    <img
                      src={
                        x.download_url ||
                        "https://via.placeholder.com/400x200?text=No+Image"
                      }
                      alt={x.author}
                      className="w-full h-[200px] object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition duration-300"></div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#cebfaa] absolute bottom-3 left-3 right-3 bg-[#222831] rounded-2xl px-3 py-2 opacity-0 hover:opacity-100 transition duration-300 hover:text-white hover:bg-[#948979] text-center"
                      href={x.url}
                    >
                      Visit Site...
                    </a>
                  </div>

                  <h3 className="text-center my-4 text-[#cebfaa] text-lg font-medium">
                    {x.author}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Spinner />
        )}
      </section>
    </>
  );
}
