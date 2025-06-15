# 🏥 Prescripto - Hospital Management System

**Prescripto** is a full-featured hospital management system built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It supports admin, doctor, and patient workflows, including authentication, profile management, appointment booking, doctor availability, and online payments via Razorpay.

---

## 🔗 Live Demo
Access the deployed project here:

- [Prescripto Live](https://prescripto-frontend-6hm0.onrender.com/)
- [Admin/Doctor Panel](https://prescripto-admin-hbnq.onrender.com/)

---

## 🚀 Features

### 🧑‍⚕️ Admin Panel
- Secure login (JWT-based)
- Add/view/manage doctors
- Approve/cancel appointments
- Change doctor availability
- Dashboard metrics

### 👨‍⚕️ Doctor Panel
- Secure login
- View and manage own appointments
- Mark appointment as completed or cancelled
- Dashboard showing earnings, patient count, and recent activity
- Profile view and edit

### 👨‍💼 User Panel
- Register/login
- View and edit profile (with image upload)
- Book appointments with doctors (date + time slot)
- Cancel appointments
- Payment integration via **Razorpay**

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT
- **File Uploads**: Multer + Cloudinary
- **Payments**: Razorpay API

---

## 🔒 Authentication & Authorization

- JWT tokens used for all 3 roles (admin, doctor, user)
- Separate auth middleware: `authAdmin.js`, `authDoctor.js`, `authUser.js`
- Tokens stored securely and validated on protected routes

---

## 📦 APIs

All RESTful APIs follow a modular and role-based structure:
- `/api/admin`
- `/api/doctor`
- `/api/user`

See `routes/` and `controllers/` folders for detailed documentation.

---

## 💳 Payment Gateway

- **Razorpay** integration for secure appointment booking
- Order creation + signature verification
- Payment verification before marking appointments as "paid"

---
## ⚙️ Environment Variables Configuration

This MERN project uses three `.env` files for frontend, admin panel, and backend configuration. Below are the environment variables needed for each:

```env
# Frontend (.env)
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=""

# Admin Panel (.env)
VITE_BACKEND_URL='http://localhost:4000'

# Backend (.env)
MONGODB_URI=''
CLOUDINARY_NAME=''
CLOUDINARY_API_KEY=''
CLOUDINARY_SECRET_KEY=''
ADMIN_EMAIL='admin@prescripto.com'
ADMIN_PASSWORD=''
JWT_SECRET='Add_private_key'
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
CURRENCY="INR"
```
---

## 🧪 Testing
- Backend tested with Postman
- Frontend tested manually with authenticated user flows

---
## 📸 Screenshots

### Home Page  
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Prescripto%20-%20Home%20Page.jpeg?raw=true" width="900"/>



### All Doctors Page  
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Prescripto%20-%20Doctors%20Page.png?raw=true" width="900"/>



### Contact Us Page  
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Prescripto%20-%20Contact%20Us%20Page.png?raw=true" width="900"/>



### About Page  
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Prescripto%20-%20About%20Page.png?raw=true" width="900"/>



### My Profile  
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/My%20Profile%20Page.png?raw=true" width="900"/>



### My Appointments  
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/My%20Appointments%20Page.png?raw=true" width="900"/>



### Admin Panel  
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Admin%20Page%201.png?raw=true" width="900"/>
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Admin%20Page%202.png?raw=true" width="900"/>
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Admin%20Page%203.png?raw=true" width="900"/>



### Doctor Panel  
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Doctor%20Page%201.png?raw=true" width="900"/>
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Doctor%20Page%202.png?raw=true" width="900"/>
<img src="https://github.com/Shobhit-2204/Prescripto/blob/main/assets/Doctor%20Page%203.png?raw=true" width="900"/>

---
