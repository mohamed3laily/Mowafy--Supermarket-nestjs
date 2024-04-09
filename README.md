# Mowafy Ecommerce Supermarket Application

## Overview

This project is an Ecommerce Supermarket application built with NestJS, TypeScript, and Prisma over PostgreSQL. It serves as an online platform for customers to browse and purchase products from a supermarket.

## Features

- **User Authentication**: Users can register, login, and manage their accounts.
- **Product Management**: Admins can add, edit, and delete products.
- **Shopping Cart**: Users can add products to their shopping cart and proceed to checkout.
- **Product Reviews**: Users can leave reviews and ratings for products.
- **Role-based Access Control**: Admins have access to additional functionalities such as product management.

## Tech Stack

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Prisma**: A modern database toolkit for Node.js and TypeScript, providing an ORM and query builder.
- **PostgreSQL**: A powerful, open-source relational database system.

![project ERD]https://raw.githubusercontent.com/mohamed3laily/Mowafy--online-Supermarket/main/mowafy%20erd1.drawio.png

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file based on the `.env.example` file.
   - Update the environment variables with your configuration.

4. **Run migrations**:

   ```bash
   npx prisma migrate dev
   ```

5. **Start the server**:

   ```bash
   npm run start:dev
   ```

6. **Access the application**:
   Visit `http://localhost:3000` in your browser to access the application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add my feature'`).
5. Push to the branch (`git push origin feature/my-feature`).
6. Create a new Pull Request.

## Contact

For inquiries or feedback, please contact Mohamed Yasser (mail:mohamed3laily@gmail.com)
