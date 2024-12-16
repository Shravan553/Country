import { fetchAllCountries } from "../../api";
import { filterCountries } from "../../utils";
import Home from "./index";

describe("Test Home Component", () => {
  test("get all countries from api", () => {
    const expected = {
      common: "Barbados",
      official: "Barbados",
      nativeName: {
        eng: {
          official: "Barbados",
          common: "Barbados",
        },
      },
    };

    fetchAllCountries().then((data) => {
      expect(data).toHaveLength(250);
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: expected }),
          expect.objectContaining({ tld: [".io"] }),
        ])
      );
    });
  });

  test("filter countries by searchText bel", () => {
    const expected = {
      common: "Belgium",
      official: "Kingdom of Belgium",
      nativeName: {
        deu: {
          official: "Königreich Belgien",
          common: "Belgien",
        },
        fra: {
          official: "Royaume de Belgique",
          common: "Belgique",
        },
        nld: {
          official: "Koninkrijk België",
          common: "België",
        },
      },
    };
    fetchAllCountries().then((data) => {
      const filteredCountries: any = filterCountries(data, "Bel");
      expect(filteredCountries).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: expected }),
          expect.objectContaining({ ccn3: "084" }),
          expect.objectContaining({ capital: ["Minsk"] }),
        ])
      );
    });
  });
});
