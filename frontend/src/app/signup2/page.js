"use client"; // This is a client component
import Link from 'next/link';
import React, { useState } from 'react';

const locations = [
  'New York',
  'Chicago',
  'Los Angeles',
  'Dallas',
  'Houston',
  'DC',
  'Detroit',
  'Miami',
  'San Francisco',
  'Atlanta',
  'Philadelphia',
  'Boston',
  'Seattle'
];

export default function Signup() {
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [roommates, setRoommates] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [amenities, setAmenities] = useState({
    petFriendly: false,
    ownRoom: false,
    kitchen: false,
    gym: false
  });

  const handleAmenitiesChange = (e) => {
    const { name, checked } = e.target;
    setAmenities(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, e.g., send the form data to your backend or API
    const formData = {
      age,
      bio,
      location,
      budget,
      roommates,
      neighborhood,
      amenities
    };
    console.log('Submitted Form Data:', formData);
    // After submission, you might want to navigate the user to another page or show a success message
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
              Short Bio
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bio"
              placeholder="Tell us something about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Desired Location
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="">Select Location</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">
              Budget
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="budget"
              type="number"
              placeholder="Your Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roommates">
              Number of Desired Roommates
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="roommates"
              type="number"
              placeholder="Number of Roommates"
              value={roommates}
              onChange={(e) => setRoommates(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="neighborhood">
              Neighborhood
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="neighborhood"
              type="text"
              placeholder="Desired Neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <p className="block text-gray-700 text-sm font-bold mb-2">Amenities:</p>
            <label className="block text-gray-700 text-sm mb-2">
              <input
                type="checkbox"
                name="petFriendly"
                checked={amenities.petFriendly}
                onChange={handleAmenitiesChange}
              />
              Pet Friendly
            </label>
            <label className="block text-gray-700 text-sm mb-2">
              <input
                type="checkbox"
                name="ownRoom"
                checked={amenities.ownRoom}
                onChange={handleAmenitiesChange}
              />
              Own Room
            </label>
            <label className="block text-gray-700 text-sm mb-2">
              <input
                type="checkbox"
                name="kitchen"
                checked={amenities.kitchen}
                onChange={handleAmenitiesChange}
              />
              Kitchen
            </label>
            <label className="block text-gray-700 text-sm mb-2">
              <input
                type="checkbox"
                name="gym"
                checked={amenities.gym}
                onChange={handleAmenitiesChange}
              />
                Gym
            </label>
          </div>
          <section className="my-8">
        <Link href="/matches" passHref>
          <button className="px-9 py-2 text-xl font-semibold text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </Link>
      </section>
        </form>
      </div>
    </main>
  );
}
