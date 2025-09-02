# 🎬 BookMyShow Prototype – Cloud Deployment

This project is a prototype of a scalable **BookMyShow-like application** deployed on **Google Cloud Platform (GCP)**.  
It demonstrates end-to-end DevOps practices, including containerization, CI/CD, cloud deployment, and monitoring.

---

## 🚀 Project Overview

- **Frontend**: HTML, CSS, JavaScript (served via Cloud Storage + Cloud CDN)  
- **Backend**: Node.js + Express (deployed on Cloud Run)  
- **Database**: PostgreSQL (Cloud SQL)  
- **Monitoring**: Cloud Monitoring & Logging  
- **Load Balancing**: Autoscaling managed by Cloud Run  

---

## 📁 Project Structure
```
bookmyshow-prototype/ # Node.js + Express backend
├── server.js # Main server file
├── package.json # Dependencies
├── Dockerfile # Container config
│
│── public/ # Frontend static files
│ ├── index.html
│ ├── style.css
│ └── script.js
│
│── k6/ # Load testing scripts
│ └── load.js
│
└── README.md # Documentation
```

---

## ⚡ Features

- 🎭 Movie listings API with PostgreSQL  
- 🌐 Frontend served via **Cloud CDN**  
- 🐳 Containerized with **Docker**  
- 🚀 Deployment using **Cloud Run**  
- 📊 Load testing with **k6**  
- 🔍 Monitoring & Alerts with **Cloud Monitoring**  

---

## 🔧 Setup & Deployment

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/netrikadongre-source/bookmyshow-project.git
cd bookmyshow-project
```

## 2️⃣ Install Dependencies (Backend)
```bash
cd backend
npm install
```

## 3️⃣ Run Locally
```bash
node server.js
```
App runs at: `http://localhost:3000`

## 4️⃣ Build & Push Docker Image
```bash
docker build -t gcr.io/PROJECT_ID/bookmyshow-backend:v1 .
docker push gcr.io/PROJECT_ID/bookmyshow-backend:v1
```

## 5️⃣ Deploy on Cloud Run
```bash
gcloud run deploy bookmyshow-service \
  --image=gcr.io/PROJECT_ID/bookmyshow-backend:v1 \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated
```

## 6️⃣ Connect Cloud SQL (PostgreSQL)
  - Create Cloud SQL instance
  - Set environment variables in Cloud Run:
```ini
DB_USER=bms-user
DB_PASS=StrongPassword123!
DB_NAME=bookmyshow
DB_HOST=/cloudsql/PROJECT_ID:REGION:bookmyshow-db
```
---
## 📊 Load Testing with k6
```bash
k6 run k6/load.js
```
---

## 🖥️ Monitoring & Logging
  - Cloud Monitoring → Metrics: CPU, Memory, Latency
  - Alerts configured for high latency / DB failures
---

## 💰 Cost & Budget Analysis
  - loud Run: Free tier (2 million requests/month free)
  - Cloud SQL: Free tier (db-f1-micro with 30GB storage)
  - Cloud Monitoring: Free tier includes basic metrics
This project mostly stays within GCP Free Tier for development.
----

## 📌 Future Enhancements
  ✅ Full CI/CD with GitHub Actions / Jenkins
  ✅ Database read replicas and backup automation
  ✅ Chaos testing for resilience
  ✅ Advanced monitoring dashboards
---

## 👨‍💻 Author
***Netrika Dongre***
