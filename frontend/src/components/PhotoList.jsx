// PhotoList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoList = ({ onSelect }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:4000'); // Update the URL to match your backend server
        if (Array.isArray(response.data)) {
          setPhotos(response.data);
        } else {
          console.error('Data received from backend is not an array:', response.data);
        }
      } catch (err) {
        console.error('Error fetching photos:', err);
        setPhotos([]);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h2>Photos</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <button onClick={() => onSelect(photo)}>Edit</button>
            {photo.title} - {photo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
