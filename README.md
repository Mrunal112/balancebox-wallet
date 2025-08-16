# BalanceBox Wallet 💰

A modern digital wallet application built with React, TypeScript, and MongoDB. BalanceBox allows users to manage their finances, send money, view transaction history, and track spending with beautiful charts and analytics.

## 🚀 Features

- **User Authentication**: Secure sign-up and sign-in with JWT token-based authentication
- **Account Management**: Create and manage user accounts with balance tracking
- **Money Transfer**: Send money to other users seamlessly
- **Transaction History**: View detailed transaction records
- **Financial Analytics**: Visualize spending patterns with interactive charts (Bar & Pie charts)
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI components
- **Real-time Balance Updates**: Instant balance updates after transactions
- **Secure API**: Protected routes with JWT middleware

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS 4** for styling
- **Radix UI** for accessible component primitives
- **React Router DOM** for navigation
- **Recharts** for data visualization
- **Axios** for API communication
- **Zod** for schema validation

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Zod** for input validation
- **CORS** for cross-origin requests

## 📁 Project Structure

```
balancebox-wallet/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── auth/           # Authentication components
│   │   ├── layouts/        # Layout components
│   │   ├── lib/            # Utility libraries
│   │   └── routes/         # Route configuration
│   └── package.json
├── backend/                 # Express.js backend API
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── models/         # Database schemas
│   │   ├── middleware/     # Custom middleware
│   │   ├── schemas/        # Validation schemas
│   │   ├── utils/          # Utility functions
│   │   └── config/         # Configuration files
│   └── package.json
└── package.json            # Root package configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mrunal112/balancebox-wallet.git
   cd balancebox-wallet
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/balancebox
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. **Database Setup**
   - Make sure MongoDB is running on your system
   - The application will automatically create the necessary collections

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:3000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

### Building for Production

1. **Build the backend**
   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```

## 🔧 Available Scripts

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Application Pages

- **Sign In/Sign Up**: User authentication
- **Home Page**: Dashboard with balance and quick actions
- **Transfer Money**: Send money to other users
- **Transfer Details**: View transaction details
- **Analytics**: Financial charts and spending insights

## 🔐 API Endpoints

### Authentication
- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/signin` - User login
- `GET /api/v1/authenticate-route` - Verify token

### Account Management
- `GET /api/v1/account/balance` - Get user balance
- `POST /api/v1/account/transfer` - Transfer money
- `GET /api/v1/account/transactions` - Get transaction history

## 🎨 UI Components

The application uses a custom design system built with:
- **Radix UI** primitives for accessibility
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Custom components**: Button, Card, Input, Avatar, Charts, etc.

## 🔒 Security Features

- JWT-based authentication
- Protected routes
- Input validation with Zod schemas
- CORS configuration
- Secure password handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Mrunal Munjamkar**

## 🐛 Issues & Support

If you encounter any issues or have questions, please create an issue on the GitHub repository.

---