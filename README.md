# Harsh - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Senior Developer with 6+ years in web scraping, backend & frontend development.

## 🚀 Live Demo

Your website will be live at: `https://hharshkumar.github.io`

## 📋 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Contact Form**: Working contact form that sends emails directly to your inbox
- **Interactive Navigation**: Smooth scrolling with active link highlighting
- **Project Showcase**: Detailed presentation of your key projects
- **Skills Display**: Organized technical skills with hover effects
- **Timeline**: Professional work experience timeline
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid & Flexbox
- **Email Service**: EmailJS for contact form functionality
- **Hosting**: GitHub Pages
- **Version Control**: Git

## 📧 Setting Up the Contact Form

To make the contact form work and send emails to your inbox:

### Method 1: EmailJS (Recommended)

1. **Create EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account
   - Create a new email service (Gmail, Outlook, etc.)

2. **Get Your Credentials**:
   - Service ID: From your EmailJS dashboard
   - Template ID: Create a template in EmailJS
   - Public Key: From Account settings

3. **Update app.js**:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_service_id_here';
   const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
   const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
   ```

### Method 2: Formspree (Alternative)

Replace the contact form action with:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── app.js              # JavaScript functionality
├── README.md           # This file
└── assets/             # Images and other assets (optional)
```

## 🚀 Deployment Instructions

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/)
2. Click "New repository"
3. Name it: `hharshkumar.github.io` (replace with your username)
4. Make it public
5. Click "Create repository"

### Step 2: Upload Files

**Option A: GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop: `index.html`, `style.css`, `app.js`
3. Commit changes

**Option B: Git Commands**
```bash
git clone https://github.com/hharshkumar/hharshkumar.github.io.git
cd hharshkumar.github.io
# Copy your files here
git add .
git commit -m "Add portfolio website"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Live Website

Your website will be available at: `https://hharshkumar.github.io`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --accent-color: #06b6d4;
  /* ... more colors */
}
```

### Content
Update your information in `index.html`:
- Personal details
- Work experience
- Projects
- Skills
- Education

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Contact Information

- **Email**: hb8130524691@gmail.com
- **Phone**: +91 8130524691
- **LinkedIn**: [linkedin.com/in/harshhkm](https://www.linkedin.com/in/harshhkm/)
- **Location**: New Delhi, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

---

**Made with ❤️ by Harsh**