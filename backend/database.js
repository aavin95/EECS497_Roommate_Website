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
  const age = document.getElementById('age').value;
  const bio = document.getElementById('bio').value;
  const salary = document.getElementById('salary').value;
  const desiredLocation = document.getElementById('desiredLocation').value;
  const desiredRoommates = document.getElementById('desiredRoomates').value;
  const desiredNeighborhood = document.getElementById('desiredNeighborhood').value;
  const amenities = [];
  const amenityCheckboxes = document.querySelectorAll('input[name="amenities"]:checked');
  amenityCheckboxes.forEach(checkbox => {
  amenities.push(checkbox.value);
  });

  // Set the document ID to the user's email
  db.collection('users').doc(email).set({
    name,
    age: parseInt(age, 10), // Ensure age is stored as a number
    bio,
    salary: parseFloat(salary), // Ensure salary is stored as a number
    desiredLocation,
    livingStyle,
    budget: parseFloat(budget), // Ensure budget is stored as a number
    amenities: amenities, // Include the amenities variable
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


// Function to store a like in Firestore
function recordLike(likerId, likedId) {
  const like = {
      liker: likerId,
      liked: likedId,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
  };
  return db.collection('Likes').add(like);
}

// Function to store a match in Firestore
function storeMatch(user1Id, user2Id) {
  return db.collection('Matches').add({
      users: [user1Id, user2Id],
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

// Function to store an entity or group in Firestore
function storeEntity(members, groupName, groupPreferences) {
  return db.collection('Entities').add({
      members: members,
      groupName: groupName,
      groupPreferences: groupPreferences,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

// Cloud Function to check for a match when a new like is created
exports.checkForMatch = functions.firestore.document('Likes/{likeId}').onCreate(async (snap, context) => {
  const like = snap.data();
  const likedId = like.liked;
  const likerId = like.liker;

  // Check if there's a mutual like
  const potentialMatch = await db.collection('Likes')
      .where('liker', '==', likedId)
      .where('liked', '==', likerId)
      .get();

  if (!potentialMatch.empty) {
      // Match found, create a new document in Matches collection
      await storeMatch(likerId, likedId);
  }
});