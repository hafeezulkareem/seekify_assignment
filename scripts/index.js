const MAX_CAR_SERVICES_SLIDES = 3;
const MAX_FEATURED_SLIDES = 5;

let servicesSliderIndex = 0;

function querySelector(selector) {
   return document.querySelector(selector);
}
function querySelectorAll(selector) {
   return document.querySelectorAll(selector);
}

function updateSliderIndex(index) {
   servicesSliderIndex = index;
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
   moveSliderTo(servicesSliderIndex);

   setInterval(() => {
      if (servicesSliderIndex < 0) {
         servicesSliderIndex = MAX_CAR_SERVICES_SLIDES - 1;
      } else if (servicesSliderIndex >= MAX_CAR_SERVICES_SLIDES - 1) {
         servicesSliderIndex = 0;
      } else {
         servicesSliderIndex += 1;
      }

      moveSliderTo(servicesSliderIndex);
   }, 5000);
}

startCarServicesSlider();

const featuredSlidesContainer = querySelector(".featured-slides-container");
const featuredSliderWidth = querySelector(
   ".featured-slider-container"
).offsetWidth;
const featuredPreviousButton = querySelector(
   ".featured-section.previous-button"
);
const featuredNextButton = querySelector(".featured-section.next-button");
let featuredSliderIndex = 0;

function moveFeaturedSliderToPrevious() {
   featuredSliderIndex -= 1;
   if (featuredSliderIndex < 0) {
      featuredSliderIndex = MAX_FEATURED_SLIDES - 2;
   }
   featuredSlidesContainer.style.transform = `translateX(-${Math.ceil(
      (featuredSliderIndex * (featuredSliderWidth - 24)) / 2
   )}px)`;
}

function moveFeaturedSliderToNext() {
   featuredSliderIndex += 1;
   if (featuredSliderIndex > MAX_CAR_SERVICES_SLIDES) {
      featuredSliderIndex = 0;
   }
   featuredSlidesContainer.style.transform = `translateX(-${Math.ceil(
      (featuredSliderIndex * (featuredSliderWidth - 24)) / 2
   )}px)`;
}

function startFeaturedSlider() {
   featuredPreviousButton.addEventListener(
      "click",
      moveFeaturedSliderToPrevious
   );
   featuredNextButton.addEventListener("click", moveFeaturedSliderToNext);

   setInterval(moveFeaturedSliderToNext, 3000);
}

startFeaturedSlider();
