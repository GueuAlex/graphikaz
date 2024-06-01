export function formatDate(date: Date): string {
  // Les noms des mois en français
  const months = [
    "Jan.",
    "Fév.",
    "Mar.",
    "Avr.",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ];

  // Extraire les composants de la date
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Construire la chaîne de caractères formatée
  const formattedDate = `${day} ${month} ${year} à ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}
