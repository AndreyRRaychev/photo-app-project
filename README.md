    # PROJECT EXPLAINATION # 
    
    Backend Server (Express.js):
        We navigate to our backend project directory in the terminal.
        We ensure that we have all the dependencies installed (npm install).
        We run the backend server (npm start or node server.js). This will start our backend server running on a specified port (e.g., 4000).
        Our backend server handles requests from the frontend, such as creating, retrieving, updating, and deleting photos in a photo gallery.
        We use the Firebase Admin SDK to interact with Firestore database for CRUD operations.
        We also include middleware to handle CORS and error handling middleware.

    Frontend React App:
    
        We navigate to our frontend project directory in the terminal.
        We ensure that we have all the dependencies installed (npm install).
        We run the frontend app (npm start or yarn start). This will start our React app running on a development server (typically on port 3000 by default).
        Our frontend app displays a photo gallery with functionalities to view, edit, delete, and add photos.
        It communicates with the backend server to perform CRUD operations on the photos stored in the Firestore database.
        The app consists of components like PhotoList, PhotoForm, and PhotoItem, which interact with the backend through Axios for HTTP requests.
        We use styled-components for styling, and the App.jsx file imports styles from AppStyles.js.

    Running Both Together:
        With both the backend and frontend running, we have a full-stack web application ready to use.
        Our frontend communicates with the backend via HTTP requests (GET, POST, PUT, DELETE) to perform various operations on the photo data stored in the Firestore database.
        Any changes made in the frontend (such as adding, updating, or deleting photos) trigger corresponding requests to the backend, which then interacts with the database and sends back responses.
        The frontend then updates its UI based on the responses received from the backend, providing a seamless user experience.

In summary, we run our backend server to handle data operations and our frontend React app to provide a user interface for interacting with that data. The two communicate via HTTP requests, allowing users to interact with the photo gallery application seamlessly.

(I ran out of time and couldnt debug everything, thank you for the oppu!rtunity regarding the result, wish you and the team good luck!)
