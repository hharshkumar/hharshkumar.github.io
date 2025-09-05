// EmailJS Configuration
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_01gpz5g";
const EMAILJS_TEMPLATE_ID = "template_q8kqrwl";
const EMAILJS_PUBLIC_KEY = "23JJtSWrHYcAvhny6";

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init(EMAILJS_PUBLIC_KEY);

  // Navigation Elements
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.getElementById("navbar");

  // Contact Form Elements
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const formStatus = document.getElementById("form-status");

  // Mobile Menu Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Close mobile menu
      if (navMenu) {
        navMenu.classList.remove("active");
      }
      if (navToggle) {
        navToggle.classList.remove("active");
      }
    });
  });

  // Smooth Scrolling for Navigation Links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar

        // Use native smooth scrolling
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Update active nav link immediately
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  // Active Navigation Link Highlighting on Scroll
  let isScrolling = false;

  function updateActiveNavLink() {
    if (isScrolling) return;

    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 100; // Offset for better UX

    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (scrollPos >= top && scrollPos <= bottom) {
        // Remove active class from all nav links
        navLinks.forEach((link) => link.classList.remove("active"));
        // Add active class to current nav link
        if (navLink) {
          navLink.classList.add("active");
        }
      }
    });
  }

  // Throttled scroll event listener
  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateActiveNavLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Navbar background on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "none";
    }
  });

  // Contact Form Submission with EmailJS
  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      // Validate form
      if (!name || !email || !subject || !message) {
        showFormStatus("Please fill in all fields.", "error");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormStatus("Please enter a valid email address.", "error");
        return;
      }

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.classList.add("loading");
      submitBtn.textContent = "Sending...";

      try {
        // Send email using EmailJS
        const response = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: "hb8130524691@gmail.com", // Your email
          }
        );

        if (response.status === 200) {
          showFormStatus(
            "Message sent successfully! I'll get back to you soon.",
            "success"
          );
          contactForm.reset();
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        console.error("EmailJS Error:", error);
        showFormStatus(
          "Failed to send message. Please try again or contact me directly.",
          "error"
        );
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
        submitBtn.textContent = "Send Message";
      }
    });
  }

  // Function to show form status
  function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = "block";

    // Hide status after 5 seconds for success messages
    if (type === "success") {
      setTimeout(() => {
        formStatus.style.display = "none";
      }, 5000);
    }
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!navbar.contains(e.target)) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    }
  });

  // Prevent mobile menu from closing when clicking inside it
  navMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Animation on scroll for elements
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".timeline-item, .project-card, .skill-category, .education-card"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Initialize animation styles
  const animatedElements = document.querySelectorAll(
    ".timeline-item, .project-card, .skill-category, .education-card"
  );
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll);
  // Run animation on load
  animateOnScroll();

  // Initialize active nav link on page load
  updateActiveNavLink();

  // Add loading animation to buttons on click
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.disabled && !this.classList.contains("loading")) {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      }
    });
  });

  // Keyboard navigation for accessibility
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    }
  });

  // Performance optimization: Intersection Observer for animations
  if ("IntersectionObserver" in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe elements for animation
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  console.log("Portfolio website initialized successfully!");
});

// Utility function to debounce events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Utility function to throttle events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
