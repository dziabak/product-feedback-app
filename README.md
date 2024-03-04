# Feedback Nexus - Product Feedback App

## Table of contents

- [Overview](#overview)
  - [Project features](#project-features)
- [Instructions](#instructions)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

**Live App URL: [Feedback Nexus on Netlify](https://feedback-nexus.netlify.app/)**

This project is a front-end web application developed as a portfolio piece, based on the [Frontend Mentor - Product Feedback App](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6) challenge. The aim was to create a product feedback application where users can add, edit and delete feedback requests, sort and filter suggestions, add comments and replies, and upvote feedback requests. The project utilizes Firebase for data storing purposes and offers form validations using Zod, responsiveness for various screen sizes including modified layouts for mobile, tablet and desktop, as well as hover states for interactive elements and smooth and animated transitions.

### Project features

- **Add, edit, and delete**: Users can post, modify and remove feedback data, all stored in Firebase database.
- **Form validations**: Users receive form validations when attempting to create or edit feedback requests (implemented with React Hook Form and Zod).
- **Sorting and filtering**: Suggestions can be sorted by most/least upvotes and most/least comments, and filtered by category.
- **Comments and replies**: Users can add comments and replies to product feedback requests.
- **Upvoting**: Users can upvote product feedback requests.
- **Kanban board**: Users can browse submitted feedback in special view based on kanban board layout.
- **Responsive design**: The app offers optimal layout depending on the device's screen size.
- **Hover states and animations**: Interactive elements have hover states and animations which provides better user experience.

## Instructions

This project is built and hosted with Netlify. You can access live version using the link down below.

- Live App URL: [Feedback Nexus on Netlify](https://feedback-nexus.netlify.app/)

To run this project locally, download the repository, unpack it and run those commands:

```bash
npm install
npm run dev
```

## My process

### Built with

- React
- TypeScript
- Tailwind
- TanStack Query
- React Hook Form + Zod
- Firebase
- Vite and Netlify (build and deployment)

### What I learned

- **Advanced data structure**: In this project, I worked with a more advanced data structure where each feedback can have comments, replies to those comments, and upvotes from multiple users. This required careful planning and implementation for data fetching and submitting. Additionally, considering that some feedback data can be modified by users later, I ensured that my approach is scalable and capable of handling scenarios with a large number of users.

- **Tailwind and CSS**: Drawing from my background as a UI and UX designer in the video game industry, I focused on creating intuitive and user-friendly interfaces. While working on this project, I encountered challenges that led me to explore lesser-known Tailwind classes and reinforce my knowledge of CSS.

- **Project structure**: An interesting aspect of the project is that it features different layouts, including a suggestions section resembling messaging boards and a kanban board-style layout. This required me to make certain components reusable while adjusting their structure and rendered data accordingly. This experience taught me how to better organize my components and structure them within the entire application.

- **Using third-party libraries**: This project familiarized me with using third-party libraries and components, ranging from industry-standard libraries like Tanstack Query, React Hook Form and Zod to UI libraries like Headless UI for form components and ts-hooks for useful utilities and quality-of-life improvements. Incorporating these libraries not only refined certain areas of the project but also facilitated overall development.

### Continued development

- **Data Fetching and Posting Functions**: Despite my primary expertise lying in frontend development, I aimed to enhance the functionality of my project by integrating Firebase database with a single API endpoint. This required me to write custom data fetching and posting functions. While my implementation is functional, there is room for optimization to handle data more gracefully. In future projects, I intend to explore building similar applications with a real backend or utilizing Next.js server actions, which I am currently learning.


## Author

- Website - [My personal portfolio page](https://gd-portfolio.vercel.app/)
