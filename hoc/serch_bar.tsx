import Search from "@/app/search/page";
import { apiServiceProps, packProps } from "@/types";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<apiServiceProps[]>>;
  updateToggle: (value: boolean) => void;
}
export const SearchBar: React.FC<SearchBarProps> = ({
  setResults,
  updateToggle,
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
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vous pouvez ajouter ici la logique que vous souhaitez effectuer lorsque le formulaire est soumis
    if (input.trim().length <= 0) {
      return;
    }
    updateToggle(false);
    router.push("/categories/" + input.toString());
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar shadow">
        <input
          type="search"
          placeholder="Recherche..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          required
        />
        <button type="submit" className=" bg-white">
          {" "}
          <i className="ri-search-line"></i>
        </button>
      </div>
    </form>
  );
};
export default Search;
