# IT Service App

## Description
The IT Service App is a web application that connects users with IT service providers to request and resolve technical issues. Users can submit service requests, track their progress, and receive assistance from qualified technicians. The app provides a platform for efficient communication and efficient handling of IT-related problems.

## Features
- User authentication: Users can sign up, log in, and log out with different roles (customer, technician, project manager, app owner) to access personalized features.
- Service request management: Users can submit service requests, provide details about the issue, and track the progress of their requests.
- Role-based permissions: Different user roles have access to specific features and functionalities within the app.
- Technician assignment: Project managers or app owners can assign technicians to specific service requests.
- Task updates: Technicians can update the status of service requests, add notes and pictures, and communicate with customers.
- Customer feedback: Users can review and rate the service provided by technicians.
- Admin dashboard: Project managers or app owners have access to an admin dashboard to manage users, assign tasks, and generate reports.
- Notifications: Users receive notifications about the progress and updates of their service requests.
- Search functionality: Users can search for specific service requests or historical data.
- Integration with third-party services or APIs: Integration with payment gateways for online payment processing, and other APIs for additional functionalities.

## Pseudo Code
1. User opens the IT service app.
2. User is presented with a landing page where they can log in or sign up.
3. User enters their credentials (username and password) and clicks "Log in."
4. The app verifies the user's credentials and grants access based on their role (e.g., customer, technician, project manager, app owner).
5. Once logged in, users are directed to their respective dashboards based on their role.
   - Customers are directed to a dashboard where they can view their service requests, submit new requests, track progress, and provide feedback.
   - Technicians are directed to a dashboard where they can view assigned tasks, update task statuses, add notes and pictures, and communicate with customers.
   - Project managers and app owners have access to an admin dashboard where they can manage users, assign tasks, generate reports, and perform other administrative functions.
6. Users can log out of the app when they are done.
7. For new users, they can sign up by providing necessary details (e.g., name, email, password) and selecting their role (customer, technician, etc.).
8. After signing up, users can log in using their credentials.

Additional features:
- User role management: Admins can manage user roles and permissions.
- Forgot password: Users can request a password reset if they forget their password.
- Account settings: Users can manage their profile information, change passwords, and update preferences.
- Email notifications: Users receive email notifications for important updates regarding their service requests or account.
- Fine-grained permissions: Different roles have access to different features and functionalities within the app.
- Access control: App owner or administrators have control over granting or revoking access to specific features or sections of the app.
- Role-specific views: Each role has a customized view and functionality based on their specific needs.

## Technologies Used
- Frontend: React, React Router, React Bootstrap
- Backend: Node.js, Express.js, GraphQL
- Database: MongoDB, Mongoose ODM
- Authentication: JSON Web Tokens (JWT)
- Deployment: Heroku

## Installation and Setup
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up environment variables: Create a `.env` file with necessary configurations.
4. Start the server: `npm start`.
5. Navigate to the client folder: `cd client`.
6. Install client dependencies: `npm install`.
7. Start the client: `npm start`.
8. Access the app in your browser at `http://localhost:3000`.

## Usage
1. Register a new account or log in with your existing credentials.
2. Explore the app features based on your role (customer, technician, project manager, app owner).
3. Submit service requests, track their progress, and communicate with technicians.
4. Update the status of service requests, add notes and pictures as a technician.
5. Provide feedback and review the service received.
6. Access the admin dashboard to manage users, assign tasks, and generate reports.

## Contributing
Contributions are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](link-to-contributing-file) file.

## License
This project is licensed under the [MIT License](link-to-license-file).