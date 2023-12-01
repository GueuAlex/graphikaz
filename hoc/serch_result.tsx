export const SearchResults = ({ results }: { results: {} }) => {
  // Vérifie si results est un tableau
  if (!Array.isArray(results)) {
    return <div className="not-result">Aucun resultat</div>; // ou un message d'erreur, selon le cas
  }

  return (
    <div className="search-result-container">
      <ul>
        {results.map((result: any) => (
          <li>{result.libelle}</li>
        ))}
      </ul>
    </div>
  );
};
