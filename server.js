require('dotenv').config();
const express = require('express');
const admin = require('firebase-admin');
const { getFirestore, collection, addDoc, getDocs, query, limit, doc, getDoc, updateDoc, deleteDoc } = require('firebase-admin/firestore');

const app = express();
const port = process.env.PORT || 4000;

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  ...firebaseConfig
});

// Middleware
app.use(express.json());

const db = admin.firestore();

// Serve favicon
app.get('/favicon.ico', (req, res) => {
  res.status(204);
});

// Route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the photo app!');
});

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
    const photos = photosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

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
        ...photoSnapshot.data()
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
