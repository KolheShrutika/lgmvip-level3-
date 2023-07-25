document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;

   
    const registrationData = `
      <h2>Registration Successful!</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
      <p>Gender: ${gender}</p>
    `;

    const registrationContainer = document.createElement('div');
    registrationContainer.innerHTML = registrationData;

    document.getElementById('registrationForm').reset();

    document.getElementById('registrationForm').appendChild(registrationContainer);
  });