
document.getElementById('generateBtn').addEventListener('click', fetchRandomUser);

function fetchRandomUser() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            displayUser(data.results[0]);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayUser(user) {
    const userProfile = document.getElementById('userProfile');
    userProfile.innerHTML = `
        <img src="${user.picture.large}" alt="User Photo">
        <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
        <p><strong>Age:</strong> ${user.dob.age}</p>
    `;
}

// Initial load
fetchRandomUser();
