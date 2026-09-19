# Frontend Mentor - Newsletter Sign-up Form

A responsive newsletter sign-up form built with **React, TypeScript, and Tailwind CSS** as part of a Frontend Mentor challenge.

Users can enter their email address, submit the form, receive validation feedback for invalid emails, and see a success message after successfully subscribing.

## Features

- Responsive design for mobile and desktop screens
- Email input with React state
- Client-side email validation
- Error message for invalid email addresses
- Success message after valid submission
- Displays the submitted email in the success message
- Dismiss button to return to the sign-up form
- Responsive mobile and desktop illustrations
- Interactive input and button states

## Built With

- **React** – Component-based UI and state management
- **TypeScript** – Type safety and component props
- **Tailwind CSS** – Responsive styling and layout
- **Vite** – Development and build tooling

## React Concepts Practiced

This project helped me practice:

- `useState`
- Controlled inputs
- Form submission
- Form validation
- Conditional rendering
- Props
- Callback functions
- Passing data between components
- Component-based architecture

## How It Works

The application initially displays the newsletter sign-up form.

When a user enters an email address and submits the form, the email is validated.

If the email address is invalid, an error message is displayed and the user remains on the form.

If the email address is valid, it is stored in the application state and the success message is displayed.

The submitted email is then shown in the confirmation message.

Clicking **Dismiss message** returns the user to the sign-up form and resets the application state.

## Project Structure

```text
src/
├── components/
│   ├── Form.tsx
│   └── Success.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your computer.

### Installation

Clone the repository:

```bash
git clone https://github.com/jzzmiiinn/Newsletter-sign-up-form-with-success-message.git
```

Navigate to the project directory:

```bash
cd Newsletter-sign-up-form-with-success-message
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## What I Learned

Through this project, I practiced building a form with React and TypeScript, managing user input with state, validating form data, and conditionally rendering different components based on application state.

I also practiced passing data and callback functions between components and creating responsive layouts using Tailwind CSS.

## Challenge

This project was built as part of a challenge from **Frontend Mentor**, which provides realistic projects to help developers improve their frontend development skills.

## Author

**Yasmin Ali**

- GitHub: [@jzzmiiinn](https://github.com/jzzmiiinn)
