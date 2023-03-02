const boyNames = [
    "Liam",
    "Noah",
    "William",
    "James",
    "Oliver",
    "Benjamin",
    "Elijah",
    "Lucas",
    "Mason",
    "Logan"
  ];
  
  const girlNames = [
    "Emma",
    "Olivia",
    "Ava",
    "Isabella",
    "Sophia",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Evelyn"
  ];
  
  const boyButton = document.getElementById("boy-button");
  const girlButton = document.getElementById("girl-button");
  const nameDisplay = document.getElementById("name");
  
  function generateName(names) {
    const index = Math.floor(Math.random() * names.length);
    return names[index];
  }
  
  boyButton.addEventListener("click", function() {
    const name = generateName(boyNames);
    nameDisplay.textContent = name;
  });
  
  girlButton.addEventListener("click", function() {
    const name = generateName(girlNames);
    nameDisplay.textContent = name;
  });