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
