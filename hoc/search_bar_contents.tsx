import { useState } from "react";
import { SearchBar } from "./serch_bar";
import { SearchResults } from "./serch_result";

const SearchBarContents = () => {
  const [results, setResults] = useState<any[]>([]);
  return (
    <div className="search-glass-contents">
      <SearchBar setResults={setResults} />

      {results.length == 0 ? null : <SearchResults results={results} />}
    </div>
  );
};

export default SearchBarContents;
