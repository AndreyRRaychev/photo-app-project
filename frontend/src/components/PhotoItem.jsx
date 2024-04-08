
import React from 'react';
import axios from 'axios';

const PhotoItem = ({ photo, onEdit, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      try {
        await axios.delete(`/photos/${photo.id}`);
        onDelete(photo.id);
      } catch (err) {
        console.error('Error deleting photo:', err);
      }
    }
  };

  return (
    <div>
      <h3>{photo.title}</h3>
      <p>{photo.description}</p>
      <button onClick={() => onEdit(photo)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PhotoItem;
