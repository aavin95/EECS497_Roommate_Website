// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCKbXfVJNoj_D2UCWLmymTYa-KdTL-0-n0",
    authDomain: "eecs497roommatewebsite.firebaseapp.com",
    projectId: "eecs497roommatewebsite",
    storageBucket: "eecs497roommatewebsite.appspot.com",
    messagingSenderId: "301182678531",
    appId: "1:301182678531:web:c6868c06aa509757a34036",
    measurementId: "G-JZ5M7J4CPC"
  });
  
  // Initialize Firestore
  const db = firebase.firestore();
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get values from the form inputs
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const age = document.getElementById('age').value;
    const salary = document.getElementById('salary').value;
    const city = document.getElementById('city').value;
    const livingStyle = document.getElementById('living-style').value;
    const budget = document.getElementById('budget').value;
    const amenities = Array.from(document.querySelectorAll('input[name="amenities"]:checked')).map(el => el.value);
  
    // Set the document ID to the user's email
    db.collection('users').doc(email).set({
      name,
      bio,
      age: parseInt(age, 10), // Ensure age is stored as a number
      salary: parseFloat(salary), // Ensure salary is stored as a number
      city,
      livingStyle,
      budget: parseFloat(budget), // Ensure budget is stored as a number
      amenities
      // Add other fields as needed
    })
    .then(() => {
      console.log(`User added with email: ${email}`);
      // Optional: Clear the form or redirect the user
      document.getElementById('signup-form').reset();
      // window.location.href = 'welcome-page.html'; // Redirect to another page
    })
    .catch((error) => {
      console.error('Error adding user: ', error);
    });
  }

  // Assuming `currentUser` is the user object for whom you're finding matches
  function findMatches(currentUser, allUsers, weights) {
    const matches = allUsers.filter(user => currentUser.city === user.city) // Filter users by city first
                            .map(user => {
        let score = 0;

        // Compare each parameter and add to the score based on weighting
        // Since city is a must-match, it's not included in the score calculation anymore
        score += Math.abs(currentUser.age - user.age) * weights.age;
        score += Math.abs(currentUser.salary - user.salary) * weights.salary;
        score += (currentUser.livingStyle === user.livingStyle) ? 0 : weights.livingStyle;
        score += Math.abs(currentUser.budget - user.budget) * weights.budget;

        // Add more comparisons for other parameters as needed

        return { user, score };
    });

    // Sort by score to find the best matches
    matches.sort((a, b) => a.score - b.score);

    return matches;
}

// Example usage
const weights = { age: 10, salary: 10, livingStyle: 10, budget: 10 };
const matches = findMatches(currentUser, allUsers, weights);


  
  // Add event listener to the signup form
  document.getElementById('signup-form').addEventListener('submit', handleFormSubmit);
  