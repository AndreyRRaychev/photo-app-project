
import React, { useState } from 'react';
import axios from 'axios';

const PhotoForm = ({ onSuccess, photoToUpdate }) => {
  const [title, setTitle] = useState(photoToUpdate ? photoToUpdate.title : '');
  const [description, setDescription] = useState(photoToUpdate ? photoToUpdate.description : '');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (photoToUpdate) {
        await axios.put(`/photos/${photoToUpdate.id}`, { title, description });
        onSuccess('Photo updated successfully');
      } else {
        await axios.post('/photos', { title, description });
        onSuccess('Photo created successfully');
      }
    } catch (err) {
      setError(err.response.data || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>{photoToUpdate ? 'Update Photo' : 'Create Photo'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">{photoToUpdate ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PhotoForm;
