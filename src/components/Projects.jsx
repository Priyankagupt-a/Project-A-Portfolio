import React from 'react'

const Projects = () => {
    return (
        <section className="py-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong>Project 1: E-commerce Website</strong> - Developed a fully responsive e-commerce web application using React.js and Redux, featuring dynamic product listings, a shopping cart, and a payment gateway.
            </li>
            <li>
              <strong>Project 2: Portfolio Website</strong> - Created a modern portfolio site using React.js to showcase personal projects, skills, and contact details. Integrated smooth scrolling and dynamic UI components.
            </li>
            <li>
              <strong>Project 3: API Integration Dashboard</strong> - Built a React.js dashboard that consumes and visualizes data from multiple RESTful APIs, focusing on performance optimization and interactive data displays.
            </li>
          </ul>
        </section>
      );
}

export default Projects
