// Charger les données JSON
fetch("../public/logements.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("card-container");

    // Boucler à travers les éléments JSON pour créer des cartes
    data.forEach((item) => {
      // Créer une div pour chaque carte
      const card = document.createElement("div");
      card.classList.add("card");

      // Ajouter l'image de fond à la carte
      card.style.backgroundImage = `url(${item.image})`;

      // Créer une div pour le titre
      const title = document.createElement("div");
      title.classList.add("card-title");
      title.textContent = item.title;

      // Ajouter le titre à la carte
      card.appendChild(title);

      // Ajouter la carte au container
      container.appendChild(card);
    });
  })
  .catch((error) =>
    console.error("Erreur lors du chargement du fichier JSON:", error)
  );
