// Array for card text
const text1_options = [
    "What if I told you this art wasn't created by a human",
    "Created by AI",
    "Midjourney have created artificial intelligence to generate endless art",
    "Create everlasting art"
  ];
  
  // Array for card color and image
  const color_options = ["#3b388f", "#FE9968", "#ec98d2", "#cd712c"];
  const image_options = [
    "images/ChillsVille_art_nouveau_landscape_picture_of_the_night_sky_hype_685d43d4-f35b-4cd6-a97b-0a4a7a9aa098.png",
    "images/lbock317_all_arches_landscape_vista_photograph_by_carr_Clifton__0f3f7a1a-5086-474f-a8b7-b1a17049ce5b.png",
    "images/Mase_between_two_19th-century_Brooklyn_brownstone_buildings_a_s_5d77f507-0342-4ae9-b42c-e03b596b43da.png",
    "images/Risebringer_epic_landscape_of_mountains_at_night_unsplash_aed9f975-99bb-4b6a-9c72-abe3ce2396f7.png"
  ];
  var i = 0;

  // Grabing document elements
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  // Set current card text/color/image
  currentOptionText1.innerText = text1_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  // Function to switch to next image
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  

  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  // Switch to previous image
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      
      carousel.classList.remove("anim-previous");
    }, 650);
  };
  