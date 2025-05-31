# 🩺 Doctor Appointment Management System – Doctor Panel

A full-stack web application that enables doctors to efficiently manage their appointments, profile, availability, and earnings through a secure and responsive dashboard interface.

## 🚀 Features

### 👨‍⚕️ Doctor Panel Functionalities:
- **Dashboard Overview**: Displays earnings, appointment count, patient count, and latest bookings.
- **Appointment Management**: View all scheduled appointments, mark them as completed, or cancel them.
- **Profile Management**: Update personal information, availability status, consultation fees, and address.
- **Authentication**: Secured routes using JWT token-based authentication for verified doctor access.
- **Status Updates**: Real-time UI feedback with appointment status (completed/cancelled).

### 📱 Frontend
- Built with **React.js**
- UI styled using **Tailwind CSS**
- Axios for API integration
- Responsive design for mobile & desktop views
- Toast notifications for success/error feedback

### 🔧 Backend
- Built with **Node.js + Express.js**
- **MongoDB** with Mongoose for schema modeling
- RESTful APIs for CRUD operations
- JWT-based authentication middleware for secure access
- Error handling and data validation

## 💻 Tech Stack

| Frontend      | Backend       | Database | Authentication | Styling       |
|---------------|---------------|----------|----------------|----------------|
| React.js      | Node.js       | MongoDB  | JWT            | Tailwind CSS   |
| Axios         | Express.js    | Mongoose |                | React Toastify |

## 🔐 Authentication Flow

1. On login, a **JWT token** is issued to the doctor.
2. All protected routes (profile, appointments, dashboard) are accessible only if the token is valid.
3. Token is stored and sent via headers for secure access.

## 🧠 Future Enhancements
- Add patient-side panel for booking appointments
- Calendar view for appointment slots
- Advanced analytics and filtering
- Email/SMS reminders

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


