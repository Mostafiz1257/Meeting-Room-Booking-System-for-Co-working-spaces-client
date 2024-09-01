# Meeting Room Booking System for Co-working Spaces

## Table of Contents
- [Objective](#objective)
- [Features](#features)
  - [Public Pages](#public-pages)
  - [User Pages (Private/Protected Routes)](#user-pages-privateprotected-routes)
  - [Admin Pages (Private for Admin Only)](#admin-pages-private-for-admin-only)
  - [Bonus Features](#bonus-features)
- [Technology Stack](#technology-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Admin Credentials](#admin-credentials)
- [API Documentation](#api-documentation)
- [References](#references)
- [Contributing](#contributing)
- [License](#license)

## Objective
This platform is designed to provide a seamless and intuitive experience for users booking meeting rooms. It offers a user-friendly design, secure processes, and robust management tools for both regular users and administrators.

## Features

### Public Pages

**Homepage / Landing Page:**
- **Header Section / Navbar:** Logo, Navigation Links, User Icon/Dropdown.
- **Hero Section:** Visual appeal with a headline, subheadline, and CTA button.
- **Service Advertisement Section:** Real-Time Availability, Instant Booking Confirmation, Flexible Scheduling, 24/7 Support.
- **Featured Rooms Section:** Room Cards with "See Details" buttons.
- **Extra Sections:** Why Choose Us, How It Works, Customer Testimonials.
- **Footer Section:** Contact Information, Social Media Links, Additional Links.

**About Us Page:**
- Creative presentation with animations and visuals.
- **Content Sections:** Our Mission, Meet the Team, Our Story.

**Contact Us Page:**
- Contact Information and Contact Form with basic animations.

**Error Pages:**
- Custom 404 page with navigation options.

**User Authentication Pages:**
- **Sign Up Page:** User registration form with default "USER" role.
- **Login Page:** Email and password fields with token-based authentication.

**Meeting Rooms Page:**
- Room Listings with search, filter, and sort functionalities.
- Pagination for large data sets.

### User Pages (Private/Protected Routes)

**Room Details Page:**
- Detailed room information with a "Book Now" button.

**Booking Process:**
- **Booking Form:** Date and Time selection, Pre-filled user information form.

**Confirmation and Payment / Checkout Page:**
- Booking Summary and Payment Options.
- Confirmation Modal with booking details and thank you message.

**My Bookings Page:**
- Display of all user bookings with status indicators.

### Admin Pages (Private for Admin Only)

**Admin Dashboard Page:**
- **Room Management:** Create, update, and delete rooms.
- **Slots Management:** Create, update, and delete slots.
- **Booking Management:** Approve/reject/delete bookings.

### Bonus Features
- **Debounce API Calls:** Implemented search debouncing.
- **Animations:** Micro-animations for interactive elements.
- **Integrate Payment:** Secure payment processing using Stripe.
- **Scroll to Top Button:** Implemented for easy navigation.
- **GitHub Contributions:** Minimum of 15 meaningful commits.

## Technology Stack
- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT
- **State Management:** Redux, Redux Toolkit Query
- **Payment Processing:** Stripe
- **Hosting:** Vercel for frontend, backend, and database

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Mostafiz1257/Meeting-Room-Booking-System-for-Co-working-spaces-client
    cd meeting-room-booking-system
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Setup environment variables:**
    - Create a `.env` file in the root directory.
    - Add necessary environment variables (e.g., API keys, database URI,Payment_key,Image_upload_link).

4. **Run the application:**
    ```bash
    npm start
    ```

5. **Run the backend server:**
    ```bash
    cd backend
    npm start
    ```

## Usage
- **Public Pages:** Accessible without authentication.
- **User Pages:** Requires login.
- **Admin Pages:** Accessible only by users with the "ADMIN" role.

## Admin Credentials
- **Email:** `admin@example.com`
- **Password:** `adminpassword`

## API Documentation
Detailed API documentation can be found [here](#).
- **Endpoints:**
  - `/api/rooms` - Room management.
  - `/api/slots` - Slot management.
  - `/api/bookings` - Booking management.
    - `/api/auth/user` - User management.

## References
- **Inspiration Sites:**
  - [Booking.com](https://www.booking.com)
  - [Convene](https://www.convene.com)

## Contributing
Contributions are welcome! Please check the contributing guidelines before submitting a pull request.

