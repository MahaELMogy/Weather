import React, { useEffect, useState } from "react";
import Axios from "axios";
import Spinner from "../Spinner/Spinner";

export default function News() {
  const [ArrWeather, setArrWeather] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  function handleSearch(e) {
    getWeather(searchCity);
    let clear = document.querySelector("input").value;
    clear = "";
    setSearchCity(clear);
  }

  async function getWeather(city = "Cairo") {
    try {
      const req = await Axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=b5b77108ceff42e882b210837251206&q=${city}&days=3`
      );
      setArrWeather(req.data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <section className="bg-[#222831]">
        <div className="">
          <div className="banner bg-no-repeat bg-cover text-[#DFD0B8]">
            <div className="relative text-center top-[20%] ">
              <input
                type="text"
                value={searchCity}
                onInput={(e) => setSearchCity(e.target.value)}
                placeholder="Enter your email to subscribe..."
                className="bg-[#222831] w-[90%] outline-0 p-3.5 rounded-4xl m-auto "
              />
              <button onClick={handleSearch}>
                <a
                  href="#"
                  className="bg-[#948979] p-2.5 rounded-4xl absolute end-[5.5%] bottom-[5px] hover:text-[white] duration-300"
                >
                  Subscribe
                </a>
              </button>
            </div>
          </div>
          {ArrWeather ? (
            <>
              {ArrWeather && (
                <div className="grid grid-cols-1 gap-6 xl:gap-0 xl:grid-cols-3  text-[#DFD0B8] relative px-28 bottom-[150px]">
                  {/* DAY 1 */}
                  <div className="bg-[#393E46] pb-6 rounded-lg xl:rounded-none xl:rounded-l-lg overflow-hidden">
                    <div className="bg-[#191c22] flex justify-between p-2.5  ">
                      <span>
                        {new Date(
                          ArrWeather.forecast.forecastday[0].date
                        ).toLocaleDateString("en-US", { weekday: "long" })}
                      </span>
                      <span>
                        {new Date(
                          ArrWeather.forecast.forecastday[0].date
                        ).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                        })}
                      </span>
                    </div>
                    <div className="px-6">
                      <p className="font-[400] text-[1.2857142857em] mt-3">
                        {ArrWeather.location.name}
                      </p>
                      <p className="font-[700] text-[5rem]">
                        {ArrWeather.forecast.forecastday[0].day.avgtemp_c}
                        <span className="relative bottom-[45px] start-[0px]">
                          o
                        </span>
                        C
                      </p>
                      <img
                        src={
                          ArrWeather.forecast.forecastday[0].day.condition.icon
                        }
                        alt="icon weather"
                      />
                      <p className="pb-3.5">
                        {ArrWeather.forecast.forecastday[0].day.condition.text}
                      </p>
                      <div>
                        <span>
                          <i className="fa-solid fa-umbrella pe-1.5"></i>{" "}
                          {
                            ArrWeather.forecast.forecastday[0].day
                              .daily_chance_of_rain
                          }
                          %
                        </span>
                        <span className="px-2.5">
                          <i className="fa-solid fa-wind pe-1.5"></i>{" "}
                          {ArrWeather.forecast.forecastday[0].day.maxwind_kph}
                          km/h
                        </span>
                        <span>
                          <i className="fa-solid fa-compass pe-1.5"></i>{" "}
                          {ArrWeather.forecast.forecastday[0].hour[12].wind_dir}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* DAY 2 */}
                  <div className="text-center pb-6 bg-[#1b1e24] rounded-lg xl:rounded-none ">
                    <div className="bg-[#191c22] text-center rounded-lg xl:rounded-none p-2.5 ">
                      <span>
                        {new Date(
                          ArrWeather.forecast.forecastday[1].date
                        ).toLocaleDateString("en-US", { weekday: "long" })}
                      </span>
                    </div>
                    <img
                      className="mx-auto my-2.5"
                      src={
                        ArrWeather.forecast.forecastday[1].day.condition.icon
                      }
                      alt="icon weather"
                    />
                    <p className="font-[500] text-[1.7142857143em]">
                      {ArrWeather.forecast.forecastday[1].day.maxtemp_c}
                      <span className="relative bottom-[10px] start-[0px]">
                        o
                      </span>
                      C
                    </p>
                    <p className="font-[500] text-[1.1428571429em]  my-2.5">
                      {ArrWeather.forecast.forecastday[1].day.mintemp_c}
                      <span className="relative bottom-[10px] start-[0px]">
                        o
                      </span>
                      C
                    </p>
                    <p>
                      {ArrWeather.forecast.forecastday[1].day.condition.text}
                    </p>
                  </div>

                  {/* DAY 3 */}
                  <div className="bg-[#393E46] text-center pb-6 rounded-lg xl:rounded-none xl:rounded-r-lg overflow-hidden">
                    <div className="bg-[#191c22] text-center  p-2.5 ">
                      <span>
                        {new Date(
                          ArrWeather.forecast.forecastday[2].date
                        ).toLocaleDateString("en-US", { weekday: "long" })}
                      </span>
                    </div>
                    <img
                      className="mx-auto my-2.5"
                      src={
                        ArrWeather.forecast.forecastday[2].day.condition.icon
                      }
                      alt="icon weather"
                    />
                    <p className="font-[500] text-[1.7142857143em]">
                      {ArrWeather.forecast.forecastday[2].day.maxtemp_c}
                      <span className="relative bottom-[10px] start-[0px]">
                        o
                      </span>
                      C
                    </p>
                    <p className="font-[500] text-[1.1428571429em] my-2.5">
                      {ArrWeather.forecast.forecastday[2].day.mintemp_c}
                      <span className="relative bottom-[10px] start-[0px]">
                        o
                      </span>
                      C
                    </p>
                    <p>
                      {ArrWeather.forecast.forecastday[2].day.condition.text}
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </section>
    </>
  );
}
