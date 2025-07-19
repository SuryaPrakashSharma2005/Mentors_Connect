// Star Rating Interaction
const stars = document.querySelectorAll('.star-rating .fa-star');
const ratingValue = document.getElementById('rating-value');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = star.getAttribute('data-rating');
    stars.forEach(s => {
      s.classList.remove('checked');
    });
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('checked');
    }
    ratingValue.textContent = `You rated this mentor: ${rating} stars`;
  });
});

// Booking Form Submission
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.getElementById('session-date').value;
  if (date) {
    alert(`Session booked for ${date}`);
    bookingForm.reset();
  }
});