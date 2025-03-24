let selectedRating = 0;
const stars = document.querySelectorAll(".star");
const modal = document.getElementById("feedbackModal");
const openModalButton = document.querySelectorAll(".openModal");
const closeModal = document.getElementById("closeModal");
const submitFeedbackButton = document.getElementById("submitFeedback");

openModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


stars.forEach((star) => {
  star.addEventListener("click", function () {
    selectedRating = this.getAttribute("data-value");
    stars.forEach((s) => s.classList.remove("selected"));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add("selected");
    }
  });
});

submitFeedbackButton.addEventListener("click", () => {
  alert(`Thank you for your feedback!`);
  modal.style.display = "none";
});
