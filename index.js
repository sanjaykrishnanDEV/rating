const submitBtn = document.querySelector(".submit");
const ratingBtn = document.querySelectorAll(".rating");

ratingBtn.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratingBtn.forEach((Element) => {
      Element.classList.remove("active");
    });
    rating.classList.add("active");
    submitBtn.addEventListener("click", () => {
      const submitContainer = document.querySelector(".submit-container");
      const thankContainer = document.querySelector(".thank-container");
      const selectedRating = document.querySelector(".rating-number");
      submitContainer.style.display = "none";
      thankContainer.style.display = "block";
      selectedRating.innerHTML =
        "You selected  " + rating.innerHTML + "  out of 5";
    });
  });
});
