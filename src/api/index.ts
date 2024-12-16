import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1";

export const fetchAllCountries = async () => {
  const { data } = await axios.get(`${baseUrl}/all`);
  return data;
};

export const fetchSingleCountry = async (code: string) => {
  const { data } = await axios.get(`${baseUrl}/alpha/${code}`);
  return data;
};

export const fetchBorderCountries = async (codes: any) => {
  const { data } = await axios.get(
    `${baseUrl}/alpha?codes=${codes.map((code: any) => code)}`
  );
  return data;
};
