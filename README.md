
# Banking App Frontend

This is the frontend of the Banking App, built using **Next.js**, **React**, and **TypeScript**. It provides an interface for users to perform banking operations such as creating accounts, transferring funds, and viewing account statements.

---

## Technologies Used

- **Next.js** (15.0.3)
- **React** (18+)
- **TypeScript**
- **Axios** (for API requests)

---

## Prerequisites

- Node.js (version 16 or higher)
- NPM or Yarn

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## Directory Structure

```
src/
├── pages/
│   ├── index.tsx          # Home Page
│   ├── deposit.tsx        # Deposit Page
│   ├── withdraw.tsx       # Withdraw Page
│   ├── transfer.tsx       # Transfer Page
│   ├── statement.tsx      # Account Statement Page
│   └── create-account.tsx # Create New Account Page
├── components/
│   └── Header.tsx         # Header Component
└── styles/                # Optional CSS or styling
```

---

## Features

- **Create Account**: Allows users to create a new account with an initial balance.
- **Deposit and Withdraw**: Perform transactions on accounts.
- **Transfer**: Transfer money between two accounts.
- **Account Statement**: View a history of transactions for an account.
- **View All Accounts**: List all accounts and their balances.

---

## Backend Integration

This frontend communicates with the backend APIs at [http://localhost:3001](http://localhost:3001). Ensure the backend server is running before interacting with the application.

