// components/App.jsx
import React, { useState } from 'react';
import { AppContainer, Heading, SuccessMessage } from '../src/components/styled/AppStyles';
import PhotoForm from '../src/components/PhotoForm';
import PhotoList from '../src/components/PhotoList';

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
    <AppContainer>
      <Heading>Photo Gallery App</Heading>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <PhotoForm onSuccess={handleSuccess} photoToUpdate={selectedPhoto} />
      <hr />
      <PhotoList onSelect={handlePhotoSelect} />
    </AppContainer>
  );
};

export default App;
