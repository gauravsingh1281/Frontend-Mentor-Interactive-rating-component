let activeRating;

function rating(number) {
  let rating = document.querySelectorAll(".ratingNumber");

  rating.forEach((ratingNumber) => {
    ratingNumber.classList.remove("rating-active");
  });

  rating[number - 1].classList.add("rating-active");
  rating[number - 1].classList.remove("ratinghover");
  document.getElementById("ratingValue").innerHTML = number;
  activeRating = number;
}

function submitRating() {
  if (activeRating) {
    document.querySelector("#ratingCard").classList.add("hidden");
    document.querySelector("#thankuCard").classList.remove("hidden");
  }
  else{
    document.querySelector("#alert").innerHTML="Please select a number";
    
  }
}
