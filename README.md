# DevFolio - Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases professional experience, technical skills, and projects in an interactive and engaging way.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and transitions using Lottie and React-Parallax-Tilt
- **Dynamic Content**: Real-time GitHub contribution calendar and project showcase
- **PDF Support**: Built-in PDF viewer for resume display
- **Particle Effects**: Interactive background particles using react-tsparticles
- **Type Safety**: Built with TypeScript for enhanced code reliability
- **Modern Stack**: Utilizing latest web technologies and best practices

## 🛠️ Built With

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **Build Tool**: Vite
- **UI Framework**: React Bootstrap
- **Icons**: React Icons
- **Animation**:
  - Lottie React
  - React Parallax Tilt
  - Typewriter Effect
- **Other Key Libraries**:
  - React Router DOM
  - React PDF
  - React GitHub Calendar
  - Date-fns

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/devfolio.git
```

2. Install dependencies

```bash
cd devfolio
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 📝 Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm run lint` - Runs ESLint for code quality
- `npm run preview` - Preview production build locally

## 🔧 Configuration

### TypeScript Configuration

The project includes two TypeScript configuration files:

- `tsconfig.app.json` - Configuration for the application code
- `tsconfig.node.json` - Configuration for Vite and other Node.js code

### ESLint Configuration

The project uses a modern ESLint setup with:

- TypeScript ESLint integration
- React Hooks plugin
- React Refresh plugin
- Strict type checking

## 📁 Project Structure

### Root Directory

- `package.json` - Project dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `index.html` - Entry HTML file
- `.gitignore` - Git ignore rules
- `eslint.config.js` - ESLint configuration

### Source Directory (`src/`)

#### Components

- **Home Components** (`/components/home/`)

  - `Home.tsx` - Main landing page component
  - `Interests.tsx` - Typewriter effect component
  - `Summary.tsx` - Personal introduction section

- **About Components** (`/components/about/`)

  - `About.tsx` - About page container
  - `AboutCard.tsx` - Personal information card
  - `Github.tsx` - GitHub activity component
  - `TechStack.tsx` - Technical skills display
  - `ToolStack.tsx` - Development tools display

- **Project Components** (`/components/projects/`)

  - `Projects.tsx` - Projects page container
  - `ProjectCard.tsx` - Individual project display card

- **Core Components** (`/components/`)
  - `NavigationBar.tsx` - Site navigation
  - `Footer.tsx` - Site footer
  - `Resume.tsx` - Resume display page
  - `LottieAnimation.tsx` - Animation wrapper
  - `Particle.tsx` - Background particle effects
  - `Preloader.tsx` - Loading screen
  - `ScrollToTop.tsx` - Scroll utility

#### Assets

- **Static Assets** (`/assets/`)

  - `logo.png` - Site logo
  - `avatar.svg` - Profile avatar
  - `Tania_Amanda_CV.pdf` - Resume file

- **Animations** (`/animations/`)
  - `main_scene.json` - Home page animation
  - `programmer.json` - About page animation

#### Styles

- `App.css` - Main application styles
- `style.css` - Global styles

#### Entry Point

- `main.tsx` - Application entry point
- `App.tsx` - Root component

### Configuration Files

- `tsconfig.app.json` - App-specific TypeScript config
- `tsconfig.node.json` - Node-specific TypeScript config

### Testing Setup

- Testing utilities and configuration files
- Jest and React Testing Library setup

## 🎨 Features and Components

- **Navigation**: Responsive navbar with smooth scrolling
- **Home Section**: Interactive landing page with Lottie animations
- **About Section**: Personal introduction with tech stack display
- **Projects**: Showcase of personal and professional projects
- **GitHub Integration**: Live GitHub activity calendar
- **Contact**: Professional contact information and social links

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](link-to-issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Tania-Amanda Fredrick**

- Location: Lubbock, Texas, USA
- Role: Front-End Engineer
- Specialization: Software & Security Engineering

## 🙏 Acknowledgments

- React + TypeScript + Vite template
- All contributors and maintainers of used libraries
- React Bootstrap team

```

```
