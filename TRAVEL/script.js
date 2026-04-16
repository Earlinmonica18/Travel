function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function submitBooking() {
  alert("Booking Successful ✅");
  closePopup();
}

/* DIFFERENT IMAGES FOR EACH HOTEL */
function changeRoom(imgId, type) {

  let img = document.getElementById(imgId);

  const hotelImages = {

    img1: { // Luxury
      home: "https://images.pexels.com/photos/35639940/pexels-photo-35639940.jpeg",
      bedroom: "https://images.pexels.com/photos/7535037/pexels-photo-7535037.jpeg",
      kitchen: "https://images.pexels.com/photos/4682110/pexels-photo-4682110.jpeg",
      living: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
      bathroom: "https://images.pexels.com/photos/8089164/pexels-photo-8089164.jpeg"
    },

    img2: { // Family
      home: "https://images.pexels.com/photos/19240394/pexels-photo-19240394.jpeg",
      bedroom: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      kitchen: "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg",
      living: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      bathroom: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg"
    },

    img3: { // Business
      home: "https://images.pexels.com/photos/15930255/pexels-photo-15930255.jpeg",
      bedroom: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg",
      kitchen: "https://images.pexels.com/photos/17748655/pexels-photo-17748655.jpeg",
      living: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
      bathroom: "https://images.pexels.com/photos/29139295/pexels-photo-29139295.jpeg"
    },

    img4: { // Budget
      home: "https://images.pexels.com/photos/21005729/pexels-photo-21005729.jpeg",
      bedroom: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
      kitchen: "https://images.pexels.com/photos/5824485/pexels-photo-5824485.jpeg",
      living: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      bathroom: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg"
    },

  };

  // Safe check before changing image
  if (hotelImages[imgId] && hotelImages[imgId][type]) {
    img.src = hotelImages[imgId][type];
  }
}