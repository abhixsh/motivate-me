# Motivational Quote Generator

## Introduction

Using this straightforward web tool, you may create inspirational phrases by clicking a button. A selection of quotes from well-known people from all over the world will give you your daily dose of inspiration. In order to learn and practice web development techniques, I developed this project as a side project.

## Technologies Used

- JavaScript
- HTML
- CSS
- GitHub Actions
- GitHub Pages

## Features

- For a random inspirational quote, click the "Generate Quote" button.
- Get motivated by reading quotations from well-known people from around the world.
- simple and user-friendly interface
- GitHub Pages hosts
- GitHub Actions with Continuous Integration/Continuous Deployment (CI/CD)


## Code Overview

JavaScript, CSS, and simple HTML were used to create this project. The list of quotes that are displayed on the website is contained in the quotes array in the JavaScript file. A random quotation is chosen from the quotes array and displayed on the webpage when the user clicks the "Generate Quote" button.

The webpage's basic structure is contained in the HTML file. The inspirational quotation and emoji are shown in the div element with the id "quote-container". The "generate-btn" id, which is used to pick the button element in JavaScript, is associated with the "Generate Quote" button.

The website's styles are contained in the CSS file. The background color of the body element is #1c1c1e, and its sans-serif font is from the "Helvetica Neue" family. The maximum width and margin of the webpage are set using the container class. The text-align property of the h1 element is set to center, and the font size is 2.5 rem.


## Continuous Integration/Continuous Deployment

This project is set up for CI/CD using GitHub Actions. The GitHub Actions procedure gets activated whenever there is a fresh push to the main branch. The procedure tests the JavaScript file to ensure that it is functioning properly. The workflow launches the project to GitHub Pages if the testing is successful. By doing this, the project is always current and functioning properly.

## License

This project includes an MIT license attached to it. Details can be found in the LICENSE file.

