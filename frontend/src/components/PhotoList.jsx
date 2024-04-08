import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoList = ({ onSelect }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:4000');
        setPhotos(Array.isArray(response.data) ? response.data : []);
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
        {photos.map((photo, index) => (
          <li key={index}>
            <button onClick={() => onSelect(photo)}>Select</button>
            {photo.title} - {photo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
