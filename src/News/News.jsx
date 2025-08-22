import React, { useEffect, useState } from "react";
import Axios from "axios";
import Spinner from "../Spinner/Spinner";

export default function News() {
  const [ArrNews, setArrNews] = useState(null);

  async function getNews() {
    try {
      const req = await Axios.get(
        `https://newsdata.io/api/1/latest?apikey=pub_aedae97e8ec6485eafc79ad924a528c7&language=en`
      );
      console.log(req.data.results);

      setArrNews(req.data.results);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  }

  useEffect(() => {
    getNews();
  }, []);
  console.log(ArrNews);

  return (
    <>
      <section className="bg-[#222831] py-10">
        <div className="flex flex-wrap justify-center gap-6 px-6 md:px-28">
          {ArrNews ? (
            <>
              {ArrNews?.map((x, index) => {
                return (
                  <div
                    key={index}
                    className="inner w-full sm:w-[48%] md:w-[30%] p-2"
                  >
                    <div className="bg-[#393E46] h-[420px] flex flex-col rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                      <img
                        src={x.image_url}
                        alt="News"
                        className="w-full h-[200px] object-cover rounded-t-2xl"
                      />

                      <div className="p-4  flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="text-xl  md:text-2xl text-[#948979] font-bold mb-2 line-clamp-2">
                            {x.title}
                          </h3>
                          <p className="text-[#dfd0b883] font-thin text-sm md:text-base mb-3 line-clamp-3">
                            {(x.description || "")
                              .split(" ")
                              .splice(0, 15)
                              .join(" ")}
                          </p>
                        </div>
                        <a
                          className="inline-block cursor-pointer text-center mt-auto bg-[#cebfaa] text-[#222831] font-semibold px-4 py-2 rounded-lg hover:bg-[#948979] transition-colors duration-300"
                          href={x.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          See More ...
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </section>
    </>
  );
}
