const form = document.getElementById('booking-form');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const service = form.service.value;
  const date = form.date.value;
  const time = form.time.value;

  confirmation.classList.remove('hidden');
  confirmation.innerHTML = `
    <h3>✅ Booking Confirmed!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
  `;

  form.reset();
});
