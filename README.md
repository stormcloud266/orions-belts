# Orion's Belts
 A one page, mock small business website developed to practice layout design and speedy image loading. It features multiple navigation menus with smooth scrolling, and a custom built modal that dynamically changes when a gallery image is clicked.

[View Website](https://orions-belts.netlify.app/)

![](https://github.com/stormcloud266/orions-belts/blob/master/screenshot1.gif)

## Challenges and Goals
My main goal with this website was to build a custom gallery component filled with lazy loaded, svg traced images.

I also wanted to gain more knowledge producing full page layouts and use [Particles.js](https://www.npmjs.com/package/react-particles-js) in the main hero.

## Solution
The gallery component uses the Gatsby Image plugin to create svg traced, lazy loaded images. On click, the image opens into a full page modal.

CSS Grid is responsible for the gallery layout, while Flex handles the rest of the page. Smooth scrolling was achieved with [this plugin](https://www.npmjs.com/package/react-anchor-link-smooth-scroll).

#### Project Details
* Front end: [Gatsby](https://www.gatsbyjs.com/)
* Hosting: [Netlify](https://www.netlify.com/)
