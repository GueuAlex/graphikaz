import Search from "@/app/search/page";
import { apiServiceProps, packProps } from "@/types";
import { useState } from "react";

export const SearchBar = ({
  setResults,
}: {
  setResults: React.Dispatch<React.SetStateAction<apiServiceProps[]>>;
}) => {
  const fetchData = (value: string) => {
    fetch("https://graphikaz.digifaz.com/api/services")
      .then((response) => response.json())
      .then((json) => {
        const results: apiServiceProps[] = json.filter(
          (serv: apiServiceProps) => {
            return (
              value &&
              serv &&
              serv.libelle &&
              serv.libelle.toLowerCase().includes(value.toLowerCase()) &&
              //serv.pack_services.ligne_services && // Vérifier que pack.ligne_services est défini
              serv.pack_services.map((option) =>
                option.libelle.toLowerCase().includes(value.toLowerCase())
              )
            );
          }
        );
        console.log(results);
        setResults(results);
      });
  };
  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };
  const [input, setInput] = useState("");
  return (
    <div className="search-bar shadow">
      <input
        type="search"
        placeholder="Recherche..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <i className="ri-search-line"></i>
    </div>
  );
};
export default Search;
