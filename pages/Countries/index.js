import Link from "next/link";
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  console.log(data);
  return {
    props: { country: data },
  };
};

const Countries = ({ country }) => {
  const [userInput, setUserInput] = useState("");
  const [userSubmit, setUserSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserSubmit(userInput);
  };

  const filteredCountries = country.filter((country) =>
    country?.name.common.toLowerCase().includes(userSubmit.toLowerCase())
  );

  return (
    <div>
      {userInput}
      <form>
        <input
          type="search"
          placeholder="search here"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <h1>Country list</h1>

      {filteredCountries.length ? (
        filteredCountries.map((country) => (
          <Link
            href={`/Countries/${country?.name.common}`}
            key={country.name.common}
          >
            <a>
              <h1>{country?.name.common}</h1>
              <li> Capital: {country?.capital}</li>
            </a>
          </Link>
        ))
      ) : (
        <h1>Sorry!</h1>
      )}
    </div>
  );
};

export default Countries;
