import { useEffect, useState } from "react";
const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  const paths = data.map((country) => {
    return {
      params: { id: country?.name.common },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
  const data = await res.json();

  return {
    props: { country: data },
  };
};

const Details = ({ country }) => {
  const [countryWeather, setCountryWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        setCountryWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    getWeather();
  }, []);
  console.log(countryWeather, "WEATHER");

  return (
    <div>
      <p>{country[0].name.common}</p>
      <p>{country[0].name.official}</p>
      <p>{country[0].capital}</p>
      <img src={country[0].flags.png} alt="flag" />

      <div>
        <p>
          Temperature: {countryWeather?.main?.temp}
          <span>ºC</span>
        </p>
        <p>
          Feels like: {countryWeather?.main?.feels_like}
          <span>ºC</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
