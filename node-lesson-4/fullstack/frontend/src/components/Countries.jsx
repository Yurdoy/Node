import React from "react";
import CustomInput from "./ui/CustomInput";
import { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [country, setCountry] = useState("");
  const [form, setForm] = useState({
    country: "",
    capital: "",
    population: "",
  });

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get("http://localhost:5500/countries");
        setCountry(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCountries();
  }, []);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addCountry = () => {
    console.log(form);
  };

  return (
    <div>
      <CustomInput
        value={form.country}
        label="Country"
        onChange={onHandleChange}
        name="Country"
      />
      <CustomInput value={form.capital} label="Capital" name="Capital" />
      <CustomInput
        value={form.population}
        label="Population"
        name="Population"
      />

      <button onClick={addCountry}>Add Country</button>
      {country &&
        country.map((item, index) => (
          <div key={index}>
            {item.country} {item.capital} {item.population}
          </div>
        ))}
    </div>
  );
};

export default Countries;
