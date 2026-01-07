# Hello World React Application

A modern, responsive React web application built with **Vite** featuring a top navigation bar, dark mode support, animated slideshow, and footer.

## Features ✨

- **Top Navigation Tabs**: Home, About Us, Contact pages with smooth navigation
- **Dark Mode**: Toggle between light and dark themes with persistent storage (localStorage)
- **Animated Slideshow**: Auto-rotating carousel with manual controls on the Home page
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive interface with smooth animations
- **Footer**: Copyright information (Imrancoder)
- **Fast Performance**: Built with Vite for rapid development and optimized builds

## Project Structure

```
ReactProj/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Top navigation bar
│   │   ├── Header.css
│   │   ├── Footer.jsx         # Footer with copyright
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx           # Home page with slideshow
│   │   ├── Home.css
│   │   ├── About.jsx          # About page
│   │   ├── About.css
│   │   ├── Contact.jsx        # Contact form page
│   │   └── Contact.css
│   ├── App.jsx                # Main app component
│   ├── App.css
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles & theme variables
├── public/                    # Static assets
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## Installation

### Prerequisites
- **Node.js** (v14 or higher) and **npm** (or yarn/pnpm)

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd ReactProj
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally.

## Dark Mode

The application includes a **dark mode toggle** in the header (☀️/🌙 button):
- Saves your preference in browser's localStorage
- Automatically applies on page reload
- Smooth transitions between themes
- Uses CSS custom properties for easy theming

## Pages

### 🏠 Home
- **Animated Slideshow**: 4 auto-rotating slides with fade transitions
- Manual navigation: Previous/Next buttons
- Dot indicators for slide navigation
- Features overview

### ℹ️ About Us
- Information about the project
- Technology stack details
- Team information (Imrancoder)

### 📧 Contact
- Contact form with validation
- Fields: Name, Email, Message
- Success message on submission
- Responsive form design

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties (CSS variables)
- **JavaScript (ES6+)** - Modern JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Color Scheme

### Light Mode
- Background: #ffffff
- Text: #000000
- Secondary: #f5f5f5

### Dark Mode
- Background: #1a1a1a
- Text: #ffffff
- Secondary: #2d2d2d

### Accent Colors
- Primary: #4ecdc4 (Teal)
- Secondary: #45b7d1 (Light Blue)
- Slideshow colors: Various vibrant colors

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Future Enhancements

- [ ] Add more slideshow slides
- [ ] Implement actual email sending for contact form
- [ ] Add animations to navigation
- [ ] Multi-language support
- [ ] Add social media links
- [ ] Implement page transitions
- [ ] Add blog section
- [ ] SEO optimization

## License

Free to use and modify.

## Author

**Imrancoder** © 2026

---

**Happy coding!** 🚀
