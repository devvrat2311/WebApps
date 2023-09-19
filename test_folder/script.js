const tshirtImages = [
    '../chillyBeanz/images/shirt1B.jpeg',
    '../chillyBeanz/images/shirt2B.jpeg',
    '../chillyBeanz/images/shirt3B.jpeg',
    // Add more image URLs here
  ];
  
  const grid = document.querySelector('.grid');
  const selectedTshirt = document.querySelector('.selected-tshirt');
  
  // Function to display selected t-shirt
  function displaySelectedTshirt(imageUrl) {
    selectedTshirt.innerHTML = `<img src="${imageUrl}" alt="Selected T-Shirt">`;
  }
  
  // Populate grid with t-shirt images
  tshirtImages.forEach(imageUrl => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'T-Shirt';
    img.addEventListener('click', () => {
      displaySelectedTshirt(imageUrl);
    });
    grid.appendChild(img);
  });
  