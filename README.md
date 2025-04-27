# Portfolio Website with ASCII Art Terminal Interface

A modern, interactive portfolio website built with Next.js, featuring a unique ASCII art terminal interface and dark theme support. The website combines modern web technologies with a retro-inspired terminal aesthetic to create an engaging user experience.

## Features

- **ASCII Art Terminal Interface**: Interactive terminal-like experience with boot sequence animation
- **ASCII Portrait Rendering**: Dynamic ASCII art conversion of images
- **Dark Theme Support**: Built-in dark mode with smooth transitions
- **Responsive Design**: Mobile-first approach ensuring compatibility across devices
- **Interactive Sections**: 
  - About
  - Experience
  - Projects
  - Skills
  - Education
  - Certifications
  - Contact
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **Smooth Animations**: Tailwind-powered transitions and animations

## Tech Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide Icons
- **Animations**: tailwindcss-animate

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies
```bash
pnpm install
# or
npm install
```

3. Start the development server
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── ascii-art/        # ASCII art related components
│   ├── sections/         # Website sections
│   └── ui/              # UI components (shadcn/ui)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## Development

- The project uses TypeScript for type safety
- ESLint and TypeScript configurations are set up
- Tailwind CSS is configured with custom theme settings
- shadcn/ui components are customizable through the components.json file

## Building for Production

```bash
pnpm build
# or
npm run build
```

The build output will be generated in the `.next` directory.

## Deployment

This project can be deployed to various platforms:

- Vercel (Recommended)
- Netlify
- Any static hosting service

## License

This project is licensed under the MIT License - see the LICENSE file for details.