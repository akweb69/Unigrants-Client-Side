
---

```markdown
<h1 align="center">🎓 UniGrants – Scholarship Finder & Application Platform 💰</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-UniGrants-blue.svg" alt="Platform Badge">
  <img src="https://img.shields.io/badge/Built%20With-React-blue.svg" alt="React Badge">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License Badge">
</p>

<p align="center">
  Welcome to <b>UniGrants</b> – the ultimate scholarship search and application platform!  
  Find scholarships, track applications, and achieve your academic dreams with ease. 🚀  
</p>

<p align="center">
  🌐 <a href="https://unigrants.netlify.app"><b>Live Demo</b></a> | 📜 <a href="#features"><b>Features</b></a> | ⚡ <a href="#installation"><b>Installation</b></a> | 🔧 <a href="#usage"><b>Usage</b></a>
</p>

---

## 📖 Table of Contents
- [🚀 Features](#-features)
- [🏠 How to Run Locally](#-how-to-run-locally)
- [🛠 Installation](#-installation)
- [🎮 Usage](#-usage)
- [⚙️ Configuration](#-configuration)
- [📦 Dependencies](#-dependencies)
- [📚 Documentation](#-documentation)
- [🛠 Troubleshooting](#-troubleshooting)
- [🔒 Security Best Practices](#-security-best-practices)
- [👨‍💻 Contributors](#-contributors)
- [📜 License](#-license)

---

## 🚀 Features  

✅ **🎯 Scholarship Search** – Find scholarships based on eligibility, location, and fees.  
✅ **📂 Application Management** – Track your applications in one place.  
✅ **👥 User Roles**:
   - 🎓 **Students** – Search & apply for scholarships.  
   - 🛠 **Admins** – Manage scholarships & platform settings.  
   - 🔍 **Moderators** – Moderate user-generated content & reviews.  
✅ **📊 Interactive Dashboard** – Get statistical insights & monitor activities.  
✅ **📱 Responsive Design** – Works on all devices.  
✅ **🔒 Secure Authentication** – Powered by Firebase for safe login & registration.  

---

## 🏠 How to Run Locally  

### 🔧 Prerequisites  
Ensure you have the following installed:  
✔ **Node.js** (Latest LTS)  
✔ **npm** or **yarn**  
✔ **Git**  

### 🚀 Steps to Run Locally  
1️⃣ **Clone the Repository**  
   ```bash
   git clone https://github.com/your-repo/unigrants.git
   cd unigrants
   ```

2️⃣ **Install Dependencies**  
   ```bash
   npm install
   ```

3️⃣ **Configure Environment Variables**  
   Create a `.env` file in the root directory and add:  
   ```env
   VITE_apiKey=YOUR_FIREBASE_API_KEY
   VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
   VITE_projectId=YOUR_FIREBASE_PROJECT_ID
   VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
   VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
   VITE_appId=YOUR_FIREBASE_APP_ID

   VITE_IMGBB_API_KEY=YOUR_IMGBB_API_KEY
   VITE_PAYMENT_API_KEY=YOUR_STRIPE_API_KEY
   ```

4️⃣ **Run the Development Server**  
   ```bash
   npm run dev
   ```
   🚀 The project will be available at **`http://localhost:5173`**.

---

## 🎮 Usage  

- **🔍 Searching for Scholarships** – Use filters to find scholarships.  
- **📤 Applying for Scholarships** – Submit applications seamlessly.  
- **📊 Tracking Applications** – Monitor application status in the dashboard.  
- **🛠 Admin & Moderator Panel** – Manage data, moderate content, and view analytics.  

---

## ⚙️ Configuration  

- Modify `.env` to configure API keys & Firebase settings.  
- Customize the UI using TailwindCSS in `tailwind.config.js`.  

---

## 📦 Dependencies  

### 📌 Main Dependencies  
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.1",
  "firebase": "^11.1.0",
  "axios": "^1.7.9",
  "chart.js": "^4.4.7",
  "react-chartjs-2": "^5.3.0",
  "sweetalert2": "^11.15.10",
  "react-hook-form": "^7.54.2",
  "framer-motion": "^11.18.1",
  "react-fast-marquee": "^1.6.5"
}
```

### 🛠 Dev Dependencies  
```json
{
  "vite": "^6.0.5",
  "eslint": "^9.17.0",
  "tailwindcss": "^3.4.17",
  "daisyui": "^4.12.23",
  "postcss": "^8.5.0"
}
```

---

## 📚 Documentation  

- 📘 **[React Docs](https://reactjs.org/docs/getting-started.html)**  
- 🔥 **[Firebase Docs](https://firebase.google.com/docs)**  
- 🎨 **[TailwindCSS Docs](https://tailwindcss.com/docs/)**  
- ⚡ **[Vite Docs](https://vitejs.dev/guide/)**  

---

## 🛠 Troubleshooting  

💡 **Firebase Authentication Issues**  
Ensure API keys in `.env` are correct and Firebase Authentication is properly configured.  

💡 **Dependency Errors**  
If you face issues while installing dependencies, try:  
```bash
rm -rf node_modules package-lock.json
npm install
```

💡 **Build Errors**  
Run the following:  
```bash
npm run lint
npm run build
```

---

## 🔒 Security Best Practices  

⚠ **Never expose `.env` files** – Keep API keys and sensitive data private.  
⚠ **Use HTTPS for API calls** – Ensure secure communication.  
⚠ **Enable Firebase Authentication Rules** – Restrict database access properly.  
⚠ **Regularly update dependencies** – Keep packages up-to-date to avoid vulnerabilities.  

---

## 👨‍💻 Contributors  

**🚀 Abu Kalam**  
📧 Email: [akwebdev69@gmail.com](mailto:akwebdev69@gmail.com)  
📱 WhatsApp: [01768037870](https://wa.me/8801768037870)  
📍 Location: Joypurhat, Dhaka, Bangladesh  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

<h2 align="center">🚀 UniGrants – Empowering students to achieve their dreams! 🎓💡</h2>
```

---

### 🔥 **What’s Improved?**
✅ **Eye-catching design** with center-aligned headings, badges, and emojis  
✅ **Interactive links** for live demo, documentation, and contributor contact  
✅ **Beautifully formatted sections** with clear steps and commands  
✅ **Enhanced readability** with bullet points, icons, and spacing  

This README will make **UniGrants** look **professional, engaging, and easy to navigate**! 🎉  

Let me know if you want **any more improvements**! 🚀🔥
