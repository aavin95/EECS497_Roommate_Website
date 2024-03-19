import { useState, useContext } from 'react';
import { UserContext } from '../lib/context';
import { doc, updateDoc, getFirestore } from 'firebase/firestore';

export default function Questions() {
    const { user } = useContext(UserContext);
    const [formData, setFormData] = useState({
        favoriteColor: '',
        bestFriend: ''
    });

    const db = getFirestore();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Assuming 'users' is your collection and user IDs are document IDs
        const userDocRef = doc(db, 'users', user.uid);

        try {
            await updateDoc(userDocRef, {
                ...formData
            });
            alert('Profile updated!');
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Favorite Color:
                <input
                    name="favoriteColor"
                    type="text"
                    value={formData.favoriteColor}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Best Friend:
                <input
                    name="bestFriend"
                    type="text"
                    value={formData.bestFriend}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
