// server.js
const express = require('express');
const { initializeApp } = require('firebase-admin');
const { getFirestore, collection, addDoc, getDocs, query, limit, where, doc, getDoc, updateDoc, deleteDoc } = require('firebase-admin/firestore');

const app = express();
const port = process.env.PORT || 3000;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi4arxaBQAS7PwP0hAzDNCrFcnD-oFv0U",
  authDomain: "photo-app-7cc84.firebaseapp.com",
  projectId: "photo-app-7cc84",
  storageBucket: "photo-app-7cc84.appspot.com",
  messagingSenderId: "405413248732",
  appId: "1:405413248732:web:5ae380f09ca16b410c7e19"
};


const firebaseApp = initializeApp(firebaseConfig);

// Middleware
app.use(express.json());


const db = getFirestore(firebaseApp);


// CRUD operations for photos
// Create and upload new photo
app.post('/photos', async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const photoRef = await addDoc(collection(db, 'photos'), {
      title,
      description

    });
    res.status(201).send({ id: photoRef.id });
  } catch (error) {
    next(error);
  }
});

// Retrieve all photos
app.get('/photos', async (req, res, next) => {
  try {
    const photosSnapshot = await getDocs(query(collection(db, 'photos'), limit(6)));
    const photos = [];
    photosSnapshot.forEach((doc) => {
      photos.push({
        id: doc.id,
        data: doc.data()
      });
    });
    res.status(200).send(photos);
  } catch (error) {
    next(error);
  }
});

// Retrieve single photo by ID
app.get('/photos/:id', async (req, res, next) => {
  try {
    const photoId = req.params.id;
    const photoSnapshot = await getDoc(doc(db, 'photos', photoId));
    if (!photoSnapshot.exists()) {
      res.status(404).send('Photo not found');
    } else {
      res.status(200).send({
        id: photoSnapshot.id,
        data: photoSnapshot.data()
      });
    }
  } catch (error) {
    next(error);
  }
});

// Update a photo by ID
app.put('/photos/:id', async (req, res, next) => {
  try {
    const photoId = req.params.id;
    const { title, description } = req.body;
    const photoRef = doc(db, 'photos', photoId);
    await updateDoc(photoRef, {
      title,
      description
  
    });
    res.status(200).send('Photo updated successfully');
  } catch (error) {
    next(error);
  }
});

// Delete a photo by ID
app.delete('/photos/:id', async (req, res, next) => {
  try {
    const photoId = req.params.id;
    await deleteDoc(doc(db, 'photos', photoId));
    res.status(200).send('Photo deleted successfully');
  } catch (error) {
    next(error);
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
