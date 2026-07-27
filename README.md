# Product Catalog Challenge

A full-stack coding challenge implementation using **Next.js**, **React**, **TypeScript**, **Playwright**, **Jest**, and **Python (pytest)**.

---

## Features

### Frontend

- Product Listing
- Product Details
- Add to Cart
- Cart Persistence using localStorage
- Cart Count in Navbar
- Responsive UI
- Error Handling

### Unit Testing

- Jest
- React Testing Library

### UI Automation

- Playwright
- Page Object Model (POM)

### API Testing

- Python
- pytest
- requests
- HTML Reports

---

# Tech Stack

### Frontend

- Next.js 16
- React
- TypeScript
- Context API
- Axios

### Testing

- Jest
- React Testing Library
- Playwright

### API Testing

- Python
- pytest
- requests

---

# Project Structure

```
product-catalog-challenge
│
├── frontend
│   ├── app
│   ├── components
│   ├── context
│   ├── e2e
│   ├── __tests__
│   └── ...
│
└── api-tests
    ├── tests
    ├── pytest.ini
    └── requirements.txt
```

---

# Installation

## Clone

```bash
git clone <repository-url>

cd product-catalog-challenge
```

---

# Frontend

```bash
cd frontend

npm install

npm run dev
```

Application:

```
http://localhost:3000
```

---

# Run Jest Tests

```bash
npm test
```

Expected:

```
6 tests passed
```

---

# Run Playwright Tests

Install browsers

```bash
npx playwright install
```

Run tests

```bash
npx playwright test
```

Open HTML report

```bash
npx playwright show-report
```

---

# API Tests

```bash
cd api-tests

python3 -m pip install -r requirements.txt

python3 -m pytest
```

Generate report

```bash
python3 -m pytest --html=report.html --self-contained-html
```

---

# Test Coverage

## Jest

- Add Product
- Increment Quantity
- Remove Product
- Persist localStorage
- Load localStorage
- Cart Count

## Playwright

- Valid Login
- Invalid Login
- Add Product to Cart
- Remove Product
- Continue Shopping
- Checkout Navigation

## Python API

- GET /posts
- GET /posts/{id}
- POST /posts
- Invalid Request

---

# Assumptions

- Product data is fetched from DummyJSON API.
- Cart state is stored in localStorage.
- SauceDemo is used for UI automation.
- JSONPlaceholder is used for API testing.

---

# Author

Nithesh Rao
