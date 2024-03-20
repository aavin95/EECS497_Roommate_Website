"use client"
import React, { useState } from 'react';

const matches = [
    { name: 'Eva', imageUrl: 'https://wrisenergy.org/wp-content/uploads/2019/06/Professional-headshot-square.jpg', age: 25 },
    { name: 'Liam', imageUrl: 'https://images.squarespace-cdn.com/content/v1/576bdeb69de4bb52676104fe/1590775980390-9MJJ72CZ5KA4BO9J7AAO/dover-business-headshots-natural-light-2.jpg', age: 30 },
    { name: 'Noah', imageUrl: 'https://www.theflashladyphotography.com/wp-content/uploads/2023/12/9Mundia-Professional-HeadshotsSquare-1024x1024.jpg.webp', age: 28 },
    { name: 'Olivia', imageUrl: 'https://images.squarespace-cdn.com/content/v1/604cfdc39aaba3370efa9ec0/1616003883110-QA8VHNRZFLWUS086ULMP/IMANI-HARDAWAY_60-SQUARE.jpg', age: 32 },
    { name: 'Amelia', imageUrl: 'https://wrisenergy.org/wp-content/uploads/2019/06/Professional-headshot-square-300x300.jpg', age: 27 },
    { name: 'Mia', imageUrl: 'https://ninaparkerstudios.com/wp-content/uploads/2019/10/G2W-Headshots-NinaParkerStudios-0971-Square.jpg', age: 22},
    { name: 'Jack', imageUrl: 'https://ninaparkerstudios.com/wp-content/uploads/2021/01/Seefried-Tripp-headshot-NinaParkerStudios-6742-Square-800x800.jpg', age: 21},
    { name: 'Sophia', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/yeXHOFqEggmNHRpO4gmlUg/348s.jpg', age: 25 },
    { name: 'Isabella', imageUrl: 'https://photos.headshotcrew.com/styles/square_large/s3/avatars/2022/03/deb_040square.jpg?itok=L8J1ymLv', age: 20 },
    { name: 'Jacob', imageUrl: 'https://images.squarespace-cdn.com/content/v1/50f79c6fe4b00d3480c9bbf0/1626635548294-BW5XO6JWVJ94MFLQVDUX/Headshot_20170611_Jed+Franklin_Richard_Waine_Lancaster_PA_0007+%28square+-+1000px%29_1.jpg', age: 29 },
];

export default function Matches() {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const handleClick = (match) => {
        setSelectedProfile(match);
    };

    const [amenities, setAmenities] = useState({
        petFriendly: false,
    });

    const handleAmenitiesChange = (e) => {
        const { name, checked } = e.target;
        setAmenities(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const [showFilter, setShowFilter] = useState(false);
    const [filteredMatches, setFilteredMatches] = useState(matches);
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');

    const toggleFilterPopup = () => {
        setShowFilter(!showFilter);
    };

    const handleMinAgeChange = (e) => {
        setMinAge(e.target.value);
    };

    const handleMaxAgeChange = (e) => {
        setMaxAge(e.target.value);
    };

    const applyFilters = () => {
        const filtered = matches.filter(match => {
            return (!minAge || match.age >= minAge) && (!maxAge || match.age <= maxAge);
        });
        setFilteredMatches(filtered);
        setShowFilter(false);
    };

    // Function to generate random hobbies
    const generateRandomHobbies = () => {
        const hobbies = ['reading', 'cooking', 'hiking', 'painting', 'gardening', 'photography', 'playing guitar', 'traveling', 'yoga', 'running'];
        const randomIndex = Math.floor(Math.random() * hobbies.length);
        return hobbies[randomIndex];
    };

    // Generate a random paragraph with a hobby for each match
    const generateRandomParagraph = (match) => {
        const hobby = generateRandomHobbies(); // Generate a random hobby
        return `Hi, my name is ${match.name}. I'm ${match.age} years old. In my free time, I enjoy ${hobby}.`;
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-50 font-serif">
            <h1 className="text-4xl font-bold mb-8 text-blue-500">Matches</h1>
            <button
                className="px-4 py-2 mb-4 text-sm font-semibold text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
                onClick={toggleFilterPopup}
            >
                Filter
            </button>
            {showFilter && (
                <div className="absolute top-20 bg-white p-4 rounded shadow-lg z-10">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minAge">
                            Min Age
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="minAge"
                            type="number"
                            placeholder="Minimum Age"
                            value={minAge}
                            onChange={handleMinAgeChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxAge">
                            Max Age
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="maxAge"
                            type="number"
                            placeholder="Maximum Age"
                            value={maxAge}
                            onChange={handleMaxAgeChange}
                        />
                    </div>

                    <div className="mb-4">
                        <p className="block text-gray-700 text-sm font-bold mb-2">Use Algo:</p>
                        <label className="block text-gray-700 text-sm mb-2">
                            <input
                                type="checkbox"
                                name="petFriendly"
                                checked={amenities.use}
                                onChange={handleAmenitiesChange}
                            />
                            Use our algorithm
                        </label>
                    </div>

                    <button
                        className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 mt-4"
                        onClick={applyFilters}
                    >
                        Apply Filters
                    </button>
                    <button
                        className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition duration-300 mt-4 ml-4"
                        onClick={toggleFilterPopup}
                    >
                        Close
                    </button>
                </div>
            )}
            <div className="flex flex-wrap justify-center gap-4">
                {filteredMatches.map(match => (
                    <div key={match.name} className="w-40 bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img className="rounded-full mb-2 cursor-pointer" src={match.imageUrl} alt={match.name} onClick={() => handleClick(match)} />
                        <p className="text-gray-700 text-sm font-bold">{match.name}</p>
                        <span className="text-gray-600 text-xs">Age: {match.age}</span>
                    </div>
                ))}
            </div>
            {selectedProfile && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <img src={selectedProfile.imageUrl} alt={selectedProfile.name} className="rounded-full w-24 h-24 mr-4" />
                            <div>
                                <p className="text-gray-700 text-lg font-bold">{selectedProfile.name}</p>
                                <p className="text-gray-600 text-sm">Age: {selectedProfile.age}</p>
                                <p className="text-gray-700 text-sm">{generateRandomParagraph(selectedProfile)}</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 mt-4" onClick={() => setSelectedProfile(null)}>Close</button>
                    </div>
                </div>
            )}
        </main>
    );
}

// "use client"
// import React, { useState } from 'react';

// const matches = [
//     // { name: 'Eva', imageUrl: 'https://wrisenergy.org/wp-content/uploads/2019/06/Professional-headshot-square.jpg', age: 25 },
//     // { name: 'Liam', imageUrl: 'https://images.squarespace-cdn.com/content/v1/576bdeb69de4bb52676104fe/1590775980390-9MJJ72CZ5KA4BO9J7AAO/dover-business-headshots-natural-light-2.jpg', age: 30 },
//     { name: 'Noah', imageUrl: 'https://www.theflashladyphotography.com/wp-content/uploads/2023/12/9Mundia-Professional-HeadshotsSquare-1024x1024.jpg.webp', age: 28 },
//     // { name: 'Olivia', imageUrl: 'https://images.squarespace-cdn.com/content/v1/604cfdc39aaba3370efa9ec0/1616003883110-QA8VHNRZFLWUS086ULMP/IMANI-HARDAWAY_60-SQUARE.jpg', age: 32 },
//     { name: 'Amelia', imageUrl: 'https://wrisenergy.org/wp-content/uploads/2019/06/Professional-headshot-square-300x300.jpg', age: 27 },
// //     { name: 'Mia', imageUrl: 'https://ninaparkerstudios.com/wp-content/uploads/2019/10/G2W-Headshots-NinaParkerStudios-0971-Square.jpg', age: 22},
// //     { name: 'Jack', imageUrl: 'https://ninaparkerstudios.com/wp-content/uploads/2021/01/Seefried-Tripp-headshot-NinaParkerStudios-6742-Square-800x800.jpg', age: 21},
// //     { name: 'Sophia', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/yeXHOFqEggmNHRpO4gmlUg/348s.jpg', age: 25 },
// //     { name: 'Isabella', imageUrl: 'https://photos.headshotcrew.com/styles/square_large/s3/avatars/2022/03/deb_040square.jpg?itok=L8J1ymLv', age: 20 },
// //     { name: 'Jacob', imageUrl: 'https://images.squarespace-cdn.com/content/v1/50f79c6fe4b00d3480c9bbf0/1626635548294-BW5XO6JWVJ94MFLQVDUX/Headshot_20170611_Jed+Franklin_Richard_Waine_Lancaster_PA_0007+%28square+-+1000px%29_1.jpg', age: 29 },
// ];


// export default function Matches() {
//     const [selectedProfile, setSelectedProfile] = useState(null);
//     const [likeConfirmation, setLikeConfirmation] = useState(null); // New state for the like confirmation popup

//     const handleClick = (match) => {
//         setSelectedProfile(match);
//     };

//     const likeProfile = () => {
//         setLikeConfirmation(`You liked ${selectedProfile.name}! This is the first step to finding the first roommate! If ${selectedProfile.name} likes you back, we will offer a way of contacting them through the website!`); // Set the like confirmation message
//         setSelectedProfile(null); // Close the profile modal
//     };

//     const dislikeProfile = () => {
//         console.log("Disliked Profile:", selectedProfile.name);
//         setSelectedProfile(null); // Close the modal after disliking
//     };

//     // Function to generate random hobbies
//     const generateRandomHobbies = () => {
//         const hobbies = ['reading', 'cooking', 'hiking', 'painting', 'gardening', 'photography', 'playing guitar', 'traveling', 'yoga', 'running'];
//         const randomIndex = Math.floor(Math.random() * hobbies.length);
//         return hobbies[randomIndex];
//     };

//     // Generate a random paragraph with a hobby for each match
//     const generateRandomParagraph = (match) => {
//         const hobby = generateRandomHobbies(); // Generate a random hobby
//         return `Hi, my name is ${match.name}. I'm ${match.age} years old. In my free time, I enjoy ${hobby}.`;
//     };


//     return (
//         <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-50 font-serif">
//             <h1 className="text-4xl font-bold mb-8 text-blue-500">Matches</h1>
//             <div className="flex flex-wrap justify-center gap-4">
//                 {matches.map(match => (
//                     <div key={match.name} className="w-40 bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
//                         <img className="rounded-full mb-2 cursor-pointer" src={match.imageUrl} alt={match.name} onClick={() => handleClick(match)} />
//                         <p className="text-gray-700 text-sm font-bold">{match.name}</p>
//                         <span className="text-gray-600 text-xs">Age: {match.age}</span>
//                     </div>
//                 ))}
//             </div>
//             {selectedProfile && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-4 rounded-lg">
//                         <div className="flex items-center justify-between mb-4">
//                             <img src={selectedProfile.imageUrl} alt={selectedProfile.name} className="rounded-full w-24 h-24 mr-4" />
//                             <div>
//                                 <p className="text-gray-700 text-lg font-bold">{selectedProfile.name}</p>
//                                 <p className="text-gray-600 text-sm">Age: {selectedProfile.age}</p>
//                                 <p className="text-gray-700 text-sm">{generateRandomParagraph(selectedProfile)}</p>
//                             </div>
//                         </div>
//                         <div className="flex justify-between">
//                             <button className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300" onClick={likeProfile}>✔ Like</button>
//                             <button className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition duration-300" onClick={dislikeProfile}>✖ Not Like</button>
//                         </div>
//                         <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 mt-4" onClick={() => setSelectedProfile(null)}>Close</button>
//                     </div>
//                 </div>
//             )}
//             {likeConfirmation && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-4 rounded-lg">
//                         <p className="text-gray-700 text-lg">{likeConfirmation}</p>
//                         <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 mt-4" onClick={() => setLikeConfirmation(null)}>OK</button>
//                     </div>
//                 </div>
//             )}
//         </main>
//     );
// }