export const filterCountries = (
  countries: any,
  searchText?: string,
  region?: string
) => {
  return countries.filter(
    (country: any) =>
      (!searchText ||
        country.name.common.toLowerCase().includes(searchText.toLowerCase())) &&
      (!region || country.region === region)
  );
};

export const numberWithCommas = (number: any) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
