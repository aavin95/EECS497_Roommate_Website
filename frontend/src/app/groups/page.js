"use client"
import React, { useState } from 'react';
import Link from 'next/link';


const matches = [
    { name: 'Liam', imageUrl: 'https://images.squarespace-cdn.com/content/v1/576bdeb69de4bb52676104fe/1590775980390-9MJJ72CZ5KA4BO9J7AAO/dover-business-headshots-natural-light-2.jpg', age: 30, gender: 'Male' },
    { name: 'Noah', imageUrl: 'https://www.theflashladyphotography.com/wp-content/uploads/2023/12/9Mundia-Professional-HeadshotsSquare-1024x1024.jpg.webp', age: 28, gender: 'Male' },
   
];

export default function Matches() {

    const [selectedProfile, setSelectedProfile] = useState(null);
    const [likeConfirmation, setLikeConfirmation] = useState(null);
    const handleClick = (match) => {
        setSelectedProfile(match);
    };
    
    return (
        <main className="flex flex-col items-leftjustify-left min-h-screen p-4 bg-green-50 font-serif">
            <h1 className="text-4xl font-bold text-black mb-8">Group</h1>  
            <div className="flex flex-wrap justify-left gap-4">
            {matches.map(match => ( 
                <div key={match.name} className="w-40 bg-white shadow-md rounded-lg p-4 flex flex-col items-left">
                    <img className="rounded-full mb-2 cursor-pointer" src={match.imageUrl} alt={match.name} onClick={() => handleClick(match)} />
                    <p className="text-gray-700 text-sm font-bold">{match.name}</p>
                    <span className="text-gray-600 text-xs">Age: {match.age}</span>
                    <span className="text-gray-600 text-xs">Gender: {match.gender}</span> {}
                </div>
            ))}
              <div style={{ width: '1000px', height: '700px', backgroundColor: 'white', marginLeft: '20px' }}>
        {/* This is the big white box */}
      </div>
                  {selectedProfile && (
                <div className="fixed top-0 left-20 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <img src={selectedProfile.imageUrl} alt={selectedProfile.name} className="rounded-full w-24 h-24 mr-4" />
                            <div>
                                <p className="text-gray-700 text-lg font-bold">{selectedProfile.name}</p>
                                <p className="text-gray-600 text-sm">Age: {selectedProfile.age}</p>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>    
        <Link href="/matches" passHref>
        <div style={{ position: 'fixed', top: '20px', left: '1275px'}}> {/* Use a div to position the button */}
            <button className="custom-button flex justify-end p-4 px-9 py-2 text-xl font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            Back
            </button>
        </div>
        </Link>
        <Link href="/" passHref>
        <div style={{ position: 'fixed', top: '20px', left: '1075px'}}> {/* Use a div to position the button */}
            <button className="custom-button flex justify-end p-4 px-9 py-2 text-xl font-semibold text-white bg-red-500 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            Leave Group
            </button>
        </div>
        </Link>
        </main>
    );
}

