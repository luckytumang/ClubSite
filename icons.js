// This file can contain the inline SVG icons, or you can import them from a separate file
const interLogo = `
  <svg>
    <!-- SVG code for Inter Logo -->
  </svg>
`;

const instagramIcon = `
  <svg>
    <!-- SVG code for Instagram Icon -->
  </svg>
`;

const facebookIcon = `
  <svg>
    <!-- SVG code for Facebook Icon -->
  </svg>
`;

const twitterIcon = `
  <svg>
    <!-- SVG code for Twitter Icon -->
  </svg>
`;

const emailIcon = `
  <svg>
    <!-- SVG code for Email Icon -->
  </svg>
`;

// Replace the SVG placeholders in the HTML with the respective SVG icons
document.querySelectorAll('.navbar-logo svg').forEach(el => el.innerHTML = interLogo);
document.querySelectorAll('.social-main-container li:nth-child(1) a svg').forEach(el => el.innerHTML = instagramIcon);
document.querySelectorAll('.social-main-container li:nth-child(2) a svg').forEach(el => el.innerHTML = facebookIcon);
document.querySelectorAll('.social-main-container li:nth-child(3) a svg').forEach(el => el.innerHTML = twitterIcon);
document.querySelectorAll('.social-main-container li:nth-child(4) a svg').forEach(el => el.innerHTML = emailIcon);
document.querySelectorAll('.social-links li:nth-child(1) a svg').forEach(el => el.innerHTML = instagramIcon);
document.querySelectorAll('.social-links li:nth-child(2) a svg').forEach(el => el.innerHTML = facebookIcon);
document.querySelectorAll('.social-links li:nth-child(3) a svg').forEach(el => el.innerHTML = twitterIcon);
document.querySelectorAll('.social-links li:nth-child(4) a svg').forEach(el => el.innerHTML = emailIcon);