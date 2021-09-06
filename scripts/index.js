const MAX_CAR_SERVICES_SLIDES = 3;

let sliderIndex = 0;

function updateSliderIndex(index) {
   sliderIndex = index;
}

function moveSliderTo(index) {
   const slides = document.querySelectorAll(".car-services-slider");
   const sliderButtons = document.querySelectorAll(
      `.car-services-slider.slider-${index} .slider-buttons-container .slider-button`
   );

   updateSliderIndex(index);

   slides.forEach((slide, i) => {
      slide.style.display = "none";

      if (slide.classList.contains("active")) {
         slide.classList.remove("active");
      }

      if (i === index) {
         slide.style.display = "flex";
         slide.classList.add("active");
      }
   });

   sliderButtons.forEach((sliderButton, i) => {
      if (sliderButton.classList.contains("active")) {
         sliderButton.classList.remove("active");
      }

      if (i === index) {
         sliderButton.className += " active";
      }
   });
}

function startCarServicesSlider() {
   moveSliderTo(sliderIndex);

   setInterval(() => {
      if (sliderIndex < 0) {
         sliderIndex = MAX_CAR_SERVICES_SLIDES - 1;
      } else if (sliderIndex >= MAX_CAR_SERVICES_SLIDES - 1) {
         sliderIndex = 0;
      } else {
         sliderIndex += 1;
      }

      moveSliderTo(sliderIndex);
   }, 5000);
}

startCarServicesSlider();
