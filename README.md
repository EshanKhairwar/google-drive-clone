# Eshan's Drive

Eshan's Drive is a Google Drive-like web application that provides users with a personal storage solution for their files. Users can register, log in, upload files, and download them securely.

## Features

- **User Authentication**:
  - Register with a username, email, and password.
  - Log in with username and password.
  - Secure session management using JWT tokens.

- **File Management**:
  - Upload files securely.
  - View uploaded files.
  - Download files using signed URLs.
  - Delete files.

- **Responsive Design**:
  - Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**:
  - HTML
  - Tailwind CSS
  - JavaScript (for dynamic elements)

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

- **Authentication**:
  - JWT (JSON Web Tokens)

- **File Storage**:
  - Firebase Storage (for file uploads and downloads)

## Installation

Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/eshan-drive.git
   cd eshan-drive
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   FIREBASE_CONFIG=your_firebase_config
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Authentication

- **Register User**:
  - `POST /user/register`
  - Request Body: `{ username, email, password }`

- **Login User**:
  - `POST /user/login`
  - Request Body: `{ username, password }`

- **Logout User**:
  - `GET /logout`

### File Management

- **Upload File**:
  - `POST /upload`
  - Form Data: `file`

- **View Files**:
  - `GET /home`

- **Download File**:
  - `GET /download/:path`

- **Delete File**:
  - `GET /delete/:path`

## Project Structure

```
.
├── public
│   └── styles.css           # CSS files
├── views
│   ├── landing.ejs          # Landing page
│   ├── register.ejs         # Registration page
│   └── login.ejs            # Login page
├── models
│   ├── files.model.js       # Mongoose schema for files
│   └── user.model.js        # Mongoose schema for users
├── routes
│   ├── auth.routes.js       # Routes for authentication
│   └── file.routes.js       # Routes for file management
├── config
│   ├── firebase.config.js   # Firebase configuration
│   └── multer.config.js     # Multer setup for file uploads
├── app.js                   # Main application file
├── package.json
└── README.md
```

## Future Enhancements

- Add file preview functionality.
- Implement folder support for better organization.
- Enable file sharing with other users.
- Add user profile management.
- Enhance security with 2FA (Two-Factor Authentication).

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [MongoDB](https://www.mongodb.com/)

