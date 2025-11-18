# 🩺 Disease Prediction Website

An AI-powered web application that predicts possible diseases based on symptoms provided by the user.  
The platform outputs:

- Predicted disease  
- Disease description  
- Precautions  
- Medications  
- Diet recommendations  
- Additional advice  

Developed as a **Final Year Computer Science Project**, integrating a machine learning model (built by another developer) into a full-stack web app.

---

## 🚀 Features

- 🧠 AI-based disease prediction  
- 📝 Detailed disease information  
- 🔗 ML model integrated using Flask API  
- ⚛️ Fast & responsive React frontend  
- 📡 Real-time API data handling  
- 🗂 Clean and structured project architecture  

---

# 📦 Installation & Setup

Follow the steps below to run the project locally.

---

## **1. Clone the repository**
```bash
git clone https://github.com/RKYrude/Disease-Prediction
```
## 2. **Navigate to the project directory***
```md
cd Disease-Prediction
```


## 3. **Install Dependencies**
### A. Install Frontend Dependencies
```bash
cd Frontend
npm install
```

### B. Create & Activate Python Virtual Environment
#### macOS / Linux
```bash
python3 -m venv venv
source venv/bin/activate
```

### C. Install Backend Dependencies
```bash
cd ../Backend
pip install flask flask-cors numpy pandas scikit-learn
```

## 4. **Run the Backend Server**
Make sure your virtual environment is activated, then run:
```bash
cd Backend
python main.py
```

## 5. Run the Frontend Application
Start the React development server:
```bash
cd ../Frontend
npm run dev
```



