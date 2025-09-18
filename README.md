--> RoadSafeAI - Dashboard (React + Tailwind + Mapbox)

A modern web dashboard for visualizing pothole reports collected by the backend.
Built with React, TailwindCSS, Mapbox, and Chart.js.


--> Features

-Interactive map with pothole markers (by severity & location)

-Upload images via web interface

-Heatmap visualization for hotspots

-Statistics dashboard (counts, trends, severity charts)

-Authentication-ready (placeholder for JWT/OAuth)

-Responsive design (desktop + mobile)


--> Project Structure
roadsafeai-dashboard/
│── src/
│   ├── components/   # UI components (cards, charts, map, navbar)
│   ├── pages/        # Main pages (Dashboard, Upload, Map, Reports)
│   ├── services/     # API calls to backend
│   └── App.jsx       # Root React app
│── public/           # Static assets
│── package.json      # Dependencies
│── tailwind.config.js
│── README.md

--> Quick Start
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

--> Backend API
Make sure to update the backend URL in src/services/api.js before running.