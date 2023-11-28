import Search from "@/app/search/page";
import { packProps } from "@/types";
import { useState } from "react";

export const SearchBar = ({
  setResults,
}: {
  setResults: React.Dispatch<React.SetStateAction<packProps[]>>;
}) => {
  const fetchData = (value: string) => {
    fetch("https://graphikaz.digifaz.com/api/packServices")
      .then((response) => response.json())
      .then((json) => {
        const results: packProps[] = json.filter((pack: packProps) => {
          return (
            value &&
            pack &&
            pack.service.libelle &&
            pack.service.libelle.toLowerCase().includes(value.toLowerCase()) &&
            pack.ligne_services && // Vérifier que pack.ligne_services est défini
            pack.ligne_services.map((option) =>
              option.libelle.toLowerCase().includes(value.toLowerCase())
            )
          );
        });
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
