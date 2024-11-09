document.getElementById('schedule-form').addEventListener('submit', function(event){
    event.preventDefault();

    const firstNameInput = document.getElementById('first-name').value;
    const lastNameInput = document.getElementById('last-name').value;
    const emailInput = document.getElementById('email').value;
    const dateInput = document.getElementById('appointment-date').value;
    const timeInput = document.getElementById('appointment-time').value;

    // Validation and display modal if all inputs are filled
    if (firstNameInput && lastNameInput && emailInput && dateInput && timeInput) {
        document.getElementById('modal-body').innerHTML = `Thank you for scheduling your appointment on ${dateInput} at ${timeInput}, ${firstNameInput}!`;
    } else {
        document.getElementById('modal-body').innerHTML = `Please fill out all required fields.`;
    }

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    modal.show();
});
