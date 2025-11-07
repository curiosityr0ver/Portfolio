# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## 🌐 Live Deployments

- **Main Site**: [https://curiosityr0ver.github.io/Portfolio/](https://curiosityr0ver.github.io/Portfolio/)
- **Experimental Site**: [https://curiosityr0ver.github.io/Portfolio/experimental/](https://curiosityr0ver.github.io/Portfolio/experimental/)

## 📋 About

This portfolio showcases my work experience, education, projects, skills, and achievements. The site features:

- Responsive design for all devices
- Dark mode support
- Smooth scroll navigation
- GitHub activity graph
- LeetCode statistics
- Contact form integration

## 🚀 Development

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/     # React components
│   ├── data/          # JSON data files
│   ├── hooks/         # Custom React hooks
│   ├── types/         # TypeScript type definitions
│   └── ...
├── public/
│   └── assets/        # Static assets (images, icons)
└── .github/
    └── workflows/     # GitHub Actions workflows
```

## 🔄 Deployment

The project uses GitHub Actions for automated deployment:

- **Main branch** (`main`/`master`) → Deploys to the main site
- **Experimental branch** (`experimental`) → Deploys to `/experimental/` subdirectory

Both deployments coexist on the `gh-pages` branch without interfering with each other.

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS** - Styling with CSS variables and animations

## 📝 Data Management

Portfolio data is stored in `src/data/resume_data.json`. You can easily update your information by editing this JSON file - no code changes required!

## 📄 License

This project is open source and available under the MIT License.
