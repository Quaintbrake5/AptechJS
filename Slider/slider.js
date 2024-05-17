let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider img');
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
} //The `showSlide(index)` function is responsible for displaying the slide at the given index. It first retrieves all the slides using the querySelectorAll method. Then, it checks if the index is out of bounds. If it is, it corrects the index to be within the valid range. Next, it hides all the slides by setting their display style to 'none'. Finally, it displays the slide at the corrected index by setting its display style to 'block'.

function nextSlide() {
  showSlide(slideIndex += 1);
} // The `nextSlide()` function is used to display the next slide in the slider. It increments the slideIndex variable by 1 and then calls the showSlide function with the new index.

function prevSlide() {
  showSlide(slideIndex -= 1);
} // The `prevSlide()` function is used to display the previous slide in the slider. It decrements the slideIndex variable by 1 and then calls the showSlide function with the new index.

// Auto slide
setInterval(() => {
  nextSlide();
}, 5000); // The setInterval() function is used to set the next slide in the slider. It decrements the slideIndex variable by 1 and then calls the showSlide function with the new index. This function is called after the slide has finished.
