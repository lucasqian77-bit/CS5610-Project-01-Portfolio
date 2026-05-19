# Project 1: Personal Home Page

## Overview
For project one I'm building a professional portfolio to showcase previous and upcoming projects to recuriters and potential freelance clients. The stack I'm using includes vanilla html, vanilla css, Bootstrap 5, and es6 modules.

## Personas
* Eric, 32 year old Seattle technical recruiter for an employement agency. Eric will want easy access to my project summaries, my github, my linkedin, and my included professional about/skills section.

* Anna is a 38 year old software engineering manager at a mid sized tech company in Bellevue Washington. While Eric handles baseline qualifications, Anna evaluates technical depth and archictectual skill. She'll want easy access to the source code and the hosted copy of my projects. She intends to asses my code quality, problem solving skills, and documentation.

* Bill is a 45 year old sole proprieter of his contracting business in Auburn washington. His web needs involve lead generation, visibility, and showcasing of previous work. As most needs have to do with front end professionalism, the website requires a professional appearance across devices, building trust that I'd be able to represent his business at the same level of professionalism I represent myself.

## User Stories
* As a technical recruiter, I want easy access to a pdf copy of the developer's resume, and an easy to locate skill section to verify that the developer aligns with the role I'm finding interviewees for.

* As a software engineering manager, I want easy access to my interviewee's projects, including both the source code and live versions. This will allow me to review code quality and problem solving skills. I also want to have an idea of the interviewee's personality to determine how they might fight with the current team on a personal level.

* As a contractor, I want to find a developer that has the skills to build highly discoverable professional front end sites. As I often meet clients out in the field, responsive layout and cross device compatibility is a requirement for my business to maintain a professional appearance.


## Novel Component
The novel component of my this web page has to do with dynamic rendering of projects. By adding the information the cards and project pages require in a json object in the script, I can dynamically generate them instead of hardcoding each individual card. This allows easy addition of new projects, and sets the stage for future improvements where I intend to build a small CMS that allows me to update projects in a backend database that are then dynamically generated on the front end.

My original idea had some issues, I intended to create a mini "react-router", where event listeners on the navbar would trigger a replacement of the html within the main container. As this is a professional portfolio, visibility is the main concern, and re-rendering page content this way would hurt SEO performance as a lot of content wouldn't be indexed. Instead, I'm opting to hardcode the about page, as it contains the context that I want to index: professional history, skills, coursework, and general personal info.

## Mockups
![Image containing Excalidraw Folder Structure Mockup and color palettes from coolors.co](./design%20screenshots/p01-structure.png)

![Image containing Excalidraw front end mockup of the webpage for project-01: personal home page](./design%20screenshots/p01-wireframe.png)
