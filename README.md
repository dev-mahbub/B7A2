# DevPulse

A role-based Issue Tracking REST API built with **Node.js, Express, TypeScript, PostgreSQL, and JWT authentication**.  
It supports role-based access control for Maintainers and Contributors to manage issues efficiently.

---

## Live URL

https://express-assignment-jade.vercel.app/

---

## Features

- User authentication with JWT
- Role-based access control (Maintainer / Contributor)
- Create, read, update, delete issues
- Contributors can only update their own open issues
- Maintainers have full access to all issues
- Filtering and sorting of issues (status, type, newest/oldest)
- Secure middleware-based authorization

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **Authentication:** JSON Web Token (JWT)
- **ORM/Query:** Raw SQL (node-postgres / pg)
- **Security:** bcryptjs, JWT
- **Tools:** dotenv, ts-node-dev

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/dev-mahbub/B7A2.git
cd B7A2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install dependencies

Create a .env file:

```bash
CONNECTINGSTRING=postgresql://neondb_owner:npg_aAM1D5BOTKLX@ep-fancy-truth-aqddz7tj-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

PORT=5000

JWT_SECRET= "KJH45H43KHFG08"
REFRESH_SECRET= "dfgfdgkjdfgi"
ACCESS_TOKEN_EXPIRE="1d"
REFRESH_TOKEN_EXPIRE="10d"
```

### 4. Start the server

```bash
npm run dev
```

### 5. API Endpoints

#### Auth

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/api/auth/signup` | Register user |
| POST   | `/api/auth/login`  | Login user    |

#### Issue

| Method | Endpoint          | Access                   | Description      |
| ------ | ----------------- | ------------------------ | ---------------- |
| POST   | `/api/issues`     | Maintainer / Contributor | Create issue     |
| GET    | `/api/issues`     | Public                   | Get all issues   |
| GET    | `/api/issues/:id` | Public                   | Get single issue |
| PATCH  | `/api/issues/:id` | Maintainer / Contributor | Update issue     |
| DELETE | `/api/issues/:id` | Maintainer only          | Delete issue     |

## Database Schema Summary

### Users Table

- id (PK)
- name
- email
- password
- role (maintainer | contributor)
- status
- created_at
- updated_at

### Issues Table

- id (PK)
- title
- description
- type (bug | feature_request)
- status (open | in_progress | resolved)
- reporter_id
- created_at
- updated_at
