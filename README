**Load Balanced API with Nginx, Docker, and Express**

This project demonstrates load balancing using Nginx, Docker, and Node.js (Express.js). It includes a backend API, a load generator, and a simple frontend to visualize requests per minute (RPM) per backend instance.

Features

Multiple Backend Instances: Runs multiple Express.js instances to handle API requests.

Nginx Load Balancing: Distributes requests among backend instances.

Docker & Docker Compose: Easily deploys and scales the application.

In-Memory Request Tracking: Tracks requests per instance for monitoring.

Frontend Dashboard: Displays requests per minute using Chart.js.

Load Generator: Simulates API load for testing.

**Project Structure**
.
├── backend/ # Express.js backend API
│ ├── app.js # Main server logic
│ ├── routes.js # API routes
│ ├── database.js # In-memory request tracking
│ ├── config.js # Configuration settings
│ ├── Dockerfile # Backend Dockerfile
│ ├── validation.js # Middleware for validation
│ └── index.js # Server entry point
│
├── load-generator/ # Load generator (Node.js)
│ ├── loadGenerator.js # Sends requests to backend
│ ├── Dockerfile # Load generator Dockerfile
│ └── package.json # Dependencies
│
├── frontend/ # Simple frontend
│ ├── index.html # Frontend UI
│ ├── script.js # Fetches and updates chart
│ ├── styles.css # Styling
│
├── nginx/ # Nginx configuration
│ ├── nginx.conf # Load balancing settings
│
├── docker-compose.yml # Defines multi-container setup
└── README.txt # Project documentation

**Setup & Usage**

Prerequisites

Docker

Docker Compose

Running the Project

1. Clone the repository: git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. Start the application: docker-compose up --build

3. Access the services:

Backend API (Nginx Load Balancer): http://localhost:8080

Frontend Dashboard: http://localhost

Stats API (backend instance-specific): http://localhost:8080/stats

4. Generate Load (Optional): docker-compose run load-generator

**Nginx Load Balancing Configuration**

The nginx.conf file routes API traffic between backend instances.

upstream backend_servers {
server backend:3000;
server backend:3001;
}
server {
listen 80;

    location /api/ {
        proxy_pass http://backend_servers;
    }
    location /stats {
        proxy_pass http://backend_servers/stats;
    }

}

**How It Works**

Nginx Load Balancing:

Routes API requests to backend:3000 and backend:3001 using round-robin.

Each backend instance maintains its own request count.

Frontend Dashboard:

Fetches /stats data from Nginx.

Uses Chart.js to visualize requests per minute per instance.

Load Generator:

Simulates real-world API traffic to test the system.

**Contributing**

Feel free to fork the repository and submit pull requests. Suggestions and improvements are welcome!
