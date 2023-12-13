import { useState } from "react";
import { SearchBar } from "./serch_bar";
import { SearchResults } from "./serch_result";

interface SearchBarContentsPropo {
  updateToggle: (value: boolean) => void;
}

const SearchBarContents: React.FC<SearchBarContentsPropo> = ({
  updateToggle,
}) => {
  const [results, setResults] = useState<any[]>([]);
  return (
    <div className="search-glass-contents">
      <SearchBar setResults={setResults} updateToggle={updateToggle} />

      {results.length == 0 ? null : <SearchResults results={results} />}
    </div>
  );
};

export default SearchBarContents;
