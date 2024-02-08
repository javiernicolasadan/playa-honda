# Playa Honda Apartament


## Description

This page showcases an apartment available for rent, providing details about the surroundings, area activities, and more. Users can check availability for selected dates, view pricing, and find the owner's contact email. Additionally, real-time weather information is available, and the page is fully responsive across all screen sizes.

## User Funcionalities

- **Availability:** User can select entry and exit dates to check apartament availability.
- **Price:** Upon selecting entry and exit dates, users can view the price for the specified period.

## Owner Funcionalities

- **Availability:** Owners can mark booked dates as unavailable, reflecting them in the calendar.
- **Pricing:** Owners can easily adjust prices for both low and high seasons, distinguishing between weekdays and weekends.

## Backlog

- Add English/Dutch/German language to the entire website.
- Incorporate English newspaper information about the area.
- Include additional cards with more information.
- Embed a video tour of the apartment in the homepage slideshow.
- Expand the gallery with more pictures.

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                    | Component           | Permissions                | Behavior                                                      |
| ----------------------- | ------------------- | -------------------------- | ------------------------------------------------------------- |
| `/`                     | HomePage            | public `<Route>`           | Homepage                                                     |
| `/gallery`               | Gallery              | public `<Route>`           | Displays a gallery of different pictures. Clicking on a photo enlarges it and darkens the rest of the screen.    |
| `/activities`                | Activities               | public `<Route>`           | Showcases various activities in the area, with links to their respective websites.   |
| `/availability`              | Calendar             | public `<Route>` | Displays a calendar for checking date availability and pricing.                  |
| `/contact`            | Contact           | public `<Route>` | Provides contact information.                        |
| `/weather`             | Weather            | public `<Route>` | Allows users to check real-time weather in the area.                                       |


## Services

- Weather service: Utilizes an API call to provide real-time weather information. The component refreshes with each render to ensure up-to-date data.

<br>

## Links


### Git

[Repository Link](https://github.com/javiernicolasadan/bootstrap_practice/)

[Deployed App Link](https://playa-honda.vercel.app/)

Test



