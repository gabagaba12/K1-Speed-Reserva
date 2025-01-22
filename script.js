const form = document.getElementById('reservationForm');
const participantsInput = document.getElementById('participants');
const costDisplay = document.getElementById('cost');
const reservationCostPerPerson = 100;

participantsInput.addEventListener('input', () => {
    const participants = parseInt(participantsInput.value) || 0;
    const totalCost = participants * reservationCostPerPerson;
    costDisplay.textContent = `Total Cost: $${totalCost}`;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reservation submitted!');
});
