# Brainly

A fullstack web application built with React, TypeScript, Vite (client) and Express, Mongoose, TypeScript (server).

## Project Structure

```
client/   # Frontend (React + Vite + TailwindCSS)
server/   # Backend (Express + Mongoose + TypeScript)
```

## Local Setup Instructions

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v18+ recommended)
- npm

### 1. Clone the repository

```sh
git clone https://github.com/ShashwatGoyalactive/brainly.git
cd brainly
```

### 2. Install dependencies

Install dependencies for both client and server:

```sh
cd client
npm install

cd ../server
npm install
```

### 3. Run the development servers

- **Client:**

  ```sh
  cd client
  npm run dev
  ```

- **Server:**

  ```sh
  cd server
  npm run dev
  ```

### 4. Open in browser

Visit [http://localhost:5173](http://localhost:5173) for the frontend.

## Explanation

This project is divided into two main parts:

- **Client:** Built with React, TypeScript, Vite, and TailwindCSS. It provides the user interface and interacts with the backend via API calls (using Axios).
- **Server:** Built with Express, TypeScript, and Mongoose. It handles API requests, authentication, and database operations using MongoDB.

The client and server run independently. The client communicates with the server using HTTP requests. You can customize API endpoints and environment variables as needed for your local setup.

## Technologies Used

### Client

- React
- TypeScript
- Vite
- TailwindCSS
- Axios

### Server

- Express
- TypeScript
- Mongoose
- dotenv
- jsonwebtoken

## Scripts

### Client

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Server

- `npm run build` - Compile TypeScript
- `npm run start` - Start server (nodemon)
- `npm run dev` - Build and start server


## License

This project is licensed under the ISC License.

---

## How the App Functions

The Brainly app is designed as a fullstack solution with a clear separation between frontend and backend:

- **Frontend (Client):**
  - Built with React and TypeScript, the client provides an interactive user interface for users to create, view, and manage content.
  - Components such as cards, modals, and sidebars allow users to interact with the app efficiently.
  - The client communicates with the backend using HTTP requests (via Axios) to fetch, create, update, or delete data.

- **Backend (Server):**
  - Built with Express and Mongoose, the server exposes RESTful API endpoints for all core functionalities.
  - Handles user authentication, data validation, and business logic.
  - Stores and retrieves data from a MongoDB database, ensuring persistence and scalability.

**Typical Workflow:**
1. A user interacts with the frontend (e.g., creates a new card or content).
2. The frontend sends a request to the backend API.
3. The backend processes the request, interacts with the database, and returns a response.
4. The frontend updates the UI based on the server response.

This architecture ensures a smooth user experience and a maintainable codebase, with clear responsibilities for each part of the stack.
