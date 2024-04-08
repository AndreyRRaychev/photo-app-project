import React, { useState } from 'react';
import PhotoForm from './components/PhotoForm';
import PhotoList from './components/PhotoList';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setSuccessMessage('');
  };

  const handleSuccess = (message) => {
    setSuccessMessage(message);
    setSelectedPhoto(null);
  };

  return (
    <div>
      <h1>Photo Gallery App</h1>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <PhotoForm onSuccess={handleSuccess} photoToUpdate={selectedPhoto} />
      <hr />
      <PhotoList onSelect={handlePhotoSelect} />
    </div>
  );
};

export default App;
