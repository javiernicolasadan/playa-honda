# Playa Honda Apartament Website


## Description

Welcome to the Playa Honda Apartment Website repository! This project is a responsive web application designed to showcase a beautiful beachside apartment, providing details on its amenities, gallery of images, local activities, and more. The goal is to create an informative and engaging experience for potential visitors.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Routes](#Routes.React-Router-Routes-(React-App))
- [Backend](#Backend)
- [Contributing](#contributing)
  - [How to Contribute](#how-to-contribute)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Features

- Showcase of apartment amenities and descriptions.
- Gallery with clickable images for full-size display.
- Horizontal image banner with additional photos.
- Multi-language support (English, Spanish, French, Dutch, German, Portuguese).
- Responsive design, optimized for mobile and desktop views.
- Real-time weather information.

## Technologies Used

- **React.js** for building the front-end interface.
- **React-Bootstrap** for styling components and ensuring responsiveness.
- **CSS** for custom styles.
- **React Router** for navigation between different sections.
- **React Hook Media Query** to manage mobile and desktop versions.
- **OpenWeather API** for current weather data integration.

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed. You can download them from [Node.js Official Site](https://nodejs.org/).

### Frontend Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/javiernicolasadan/playa-honda.git
   ```

2. Navigate to the project directory:

   ```sh
   cd playa-honda
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm start
   ```

### Backend Installation

1. Clone the backend repository:

   ```sh
   git clone https://github.com/javiernicolasadan/backend-playa-honda.git
   ```

2. Navigate to the backend project directory:

   ```sh
   cd backend-playa-honda
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```
### Running the Application

#### Running Backend

1. Start the backend server:

   ```sh
   npm start
   ```

   The backend server should now be running on [http://localhost:5000](http://localhost:5000).

#### Running Frontend

1. Start the development server for the frontend:

   ```sh
   npm start
   ```

   The frontend application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

This project is a demonstration website for showcasing an apartment in Playa Honda. Users can navigate through various sections such as the apartment details, activities, gallery, and booking information. The site is designed to be responsive and supports six languages, making it accessible for a wider audience.

## Routes. React Router Routes (React App)

| Path                    | Component           | Permissions                | Behavior                                                      |
| ----------------------- | ------------------- | -------------------------- | ------------------------------------------------------------- |
| `/`                     | HomePage            | public `<Route>`           | Homepage                                                     |
|`/apartment`             | Apartment            | public `<Route>`          | Displays pictures and information about the apartment. Clicking on a photo enlarges it and darkens the rest os the screen. 
| `/gallery`               | Gallery              | public `<Route>`           | Displays a gallery of different pictures. Clicking on a photo enlarges it and darkens the rest of the screen.    |
| `/activities`                | Activities               | public `<Route>`           | Showcases various activities in the area, with links to their respective websites.   |
| `/booking`              | Booking             | public `<Route>` | Displays a link for redirect to another web where you can book the apartment, and a iframe of this web.                  |
| `/weather`             | Weather            | public `<Route>` | Allows users to check real-time weather in the area.                                       |

## Backend

The backend of this project is responsible for handling API requests, such as fetching real-time weather information using the OpenWeather API. It is implemented using Node.js and Express.js. The backend acts as a bridge between the front-end and external services, ensuring data retrieval is seamless and secure.

## Contributing

Contributions are welcome! If you would like to contribute, please follow the guidelines below.

### How to Contribute

1. Fork the repository.
2. Create a branch for your feature:

   ```sh
   git checkout -b feature/my-feature
   ```

3. Make your changes and commit them:

   ```sh
   git commit -m "Add my new feature"
   ```

4. Push your branch to GitHub:

   ```sh
   git push origin feature/my-feature
   ```

5. Open a Pull Request:

   - Go to the repository on GitHub.
   - Click the "Pull Request" tab.
   - Click "New Pull Request" and select your branch.
  
## Acknowledgements

- Icons made by [Freepik](https://www.flaticon.com/authors/freepik) from [Flaticon](https://www.flaticon.com/).
- Weather API integration by [OpenWeather](https://openweathermap.org/).

## Contact

For any inquiries, suggestions, or collaboration opportunities, feel free to contact me:

- **Email**: [javiernicolasadan@gmail.com](mailto:javiernicolasadan@gmail.com)
- **GitHub**: [javiernicolasadan](https://github.com/javiernicolasadan)
- **Deployed**: [Deployed App Link](https://playa-honda.vercel.app/) 











