# Solar Power Suite API

## Overview

Solar Power Suite API is the backend service for the Solar Power Suite mobile application. It provides secure REST APIs for authentication, customer management, products, estimates, quotations, billing, inventory, and future project management.

This project is built using **NestJS**, **PostgreSQL**, and **Prisma ORM** following a scalable, modular architecture.

---

## Technology Stack

* NestJS 11
* TypeScript
* PostgreSQL
* Prisma ORM 6.16.2
* JWT Authentication
* Passport JWT
* Swagger
* bcrypt
* Class Validator

---

## Current Progress

### Phase 1 (MVP)

* ✅ Project Setup
* ✅ NestJS Configuration
* ✅ PostgreSQL Connection
* ✅ Prisma Initialization
* ✅ Swagger Documentation
* ✅ Environment Configuration

### Upcoming Modules

* Authentication
* Dashboard
* Customer Management
* Product Management
* Estimate Management
* Quotation Management
* Billing
* Payments
* Inventory
* Reports

---

## Project Structure

```text
src
│
├── auth
├── users
├── customers
├── products
├── estimates
├── quotations
├── common
├── config
└── app.module.ts

prisma
└── schema.prisma
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd Solar-power-suite-api
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/solar_power_suite"

JWT_SECRET=SolarPowerSuite@2026#JWT$Secret!Key*123456789

JWT_EXPIRES_IN=7d

PORT=3000
```

---

## Running the Application

Development

```bash
npm run start:dev
```

Production

```bash
npm run build
npm run start:prod
```

---

## Prisma Commands

Validate Schema

```bash
npx prisma validate
```

Generate Prisma Client

```bash
npx prisma generate
```

Create Migration

```bash
npx prisma migrate dev --name init
```

Open Prisma Studio

```bash
npx prisma studio
```

---

## API Documentation

Swagger

http://localhost:3000/api

---

## Development Roadmap

### Week 1

* Project Setup
* Authentication
* Database Design

### Week 2

* Customer Management

### Week 3

* Product Management

### Week 4

* Estimate Module

### Week 5

* Quotation Module

---

## License

Private Project

Copyright © 2026 Solar Power Suite API. All Rights Reserved.