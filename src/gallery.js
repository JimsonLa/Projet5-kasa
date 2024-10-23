// Charger les données JSON
fetch("../public/logements.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("card-container");

    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.style.backgroundImage = `url(${item.image})`;

      const title = document.createElement("div");
      title.classList.add("card-title");
      title.textContent = item.title;

      card.appendChild(title);

      container.appendChild(card);
    });
  })
  .catch((error) =>
    console.error("Erreur lors du chargement du fichier JSON:", error)
  );
