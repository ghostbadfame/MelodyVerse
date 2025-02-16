# Melodyverse - Music Platform

A modern web application built with Vite, React, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Getting Started

Follow these steps to get the project running on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/melodyverse.git
   cd melodyverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Copy the contents from `.env.example` (if available)
   - Fill in your environment variables:
     ```
# VITE_API_BASE_URL=http://localhost:4000/api

for using directly i hosted connectverse for testing
#VITE_API_BASE_URL=https://connectverse-1.onrender.com/api
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Locally preview the production build
- `npm run lint` - Run ESLint to check for code issues
- `npm run test` - Run tests (if configured)

## Project Structure

```
melodyverse/
├── src/
│   ├── components/     # React components
│   ├── context/       # React context files
│   ├── pages/         # Page components
│   ├── styles/        # CSS/Tailwind styles
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Entry point
├── public/            # Static files
├── index.html         # HTML template
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.ts     # Vite configuration
└── package.json       # Project dependencies and scripts
```

