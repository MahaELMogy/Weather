import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function News() {
  const [ArrNews, setArrNews] = useState(null);

  async function getNews() {
    try {
      const req = await Axios.get(
        "https://newsdata.io/api/1/latest?apikey=pub_aedae97e8ec6485eafc79ad924a528c7&country=eg,lb,sy,mc,qa"
      );
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
      <section className="bg-[#222831] ">
        <div className="flex flex-wrap flex-auto px-28">
          {ArrNews?.map((x, index) => {
            return (
              <div key={index} className="inner w-1/4 p-4 ">
                <div className="bg-[#393E46] h-[400px] overflow-auto rounded-2xl">
                  <img
                    src={
                      x.image_url ||
                      "https://via.placeholder.com/400x200?text=No+Image"
                    }
                    alt="News"
                    className="w-full h-[200px] object-cover"
                  />

                  <h3 className="text-2xl text-[#948979] font-bold text-center p-2">
                    {(x.title || "").split(" ").splice(0, 2).join(" ")}
                  </h3>
                  <p className="text-[#dfd0b883] font-thin text-center p-2">
                    {(x.description || "").split(" ").splice(0, 10).join(" ")}
                  </p>
                  <a
                    className="font-medium text-[#cebfaa] underline decoration-solid px-2 block text-center"
                    href={x.link}
                  >
                    See More ...
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
