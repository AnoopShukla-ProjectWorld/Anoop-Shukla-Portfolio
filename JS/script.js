// Fade in and fade out
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1 
    });

    sections.forEach(section => observer.observe(section));
  });

// Hamburger Button 
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('mobileSidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
});

// Handle screen resize to auto-hide sidebar on large screens
window.addEventListener('resize', () => {
  if (window.innerWidth > 1280) {
    sidebar.classList.remove('active');
  }
});


// Social Media Handle
let originalParent = null; 
let hasMoved = false;     

function handleSocialLinkVisibility() {
  const socialLink = document.querySelector('.sociallink');
  const footerContact = document.querySelector('.footer-contact');

  if (!socialLink || !footerContact) return;

  if (window.innerWidth <= 1280) {
    if (!hasMoved) {
      originalParent = socialLink.parentElement;
      footerContact.appendChild(socialLink);
      socialLink.style.gridColumn = "";
      socialLink.style.gridRow = "";
      socialLink.style.marginBottom = "1rem";
      socialLink.style.borderRadius = "10px";
      socialLink.style.display = "flex";
      socialLink.style.justifyContent = "center";
      socialLink.style.background = "none"; // optional styling
      hasMoved = true;
    }
  } else {
    if (hasMoved && originalParent) {
      originalParent.appendChild(socialLink);
      socialLink.style.display = "block";
      socialLink.style.background = "linear-gradient(to bottom, rgba(70, 171, 179), rgba(138, 179, 51))";
      socialLink.style.gridColumn = "10 / 12";
      socialLink.style.gridRow = "12 / 30";
      socialLink.style.borderRadius = "0px 10px 10px 0px";
      socialLink.style.marginTop = "";
      socialLink.style.justifyContent = "";
      hasMoved = false;
    }
  }
}

window.addEventListener('load', handleSocialLinkVisibility);
window.addEventListener('resize', handleSocialLinkVisibility);




