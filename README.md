# GSAP Hover Effect

An interactive hover effect animation system that dynamically responds to user interactions. Features smooth GSAP-powered transitions and responsive hover tracking.

## Overview

This project showcases interactive hover animations using **GSAP** (GreenSock Animation Platform). The hover system includes:

- **Dynamic Hover Tracking**: Smooth response to user interactions
- **Hover State Transitions**: Animated element changes on hover
- **Custom Styling**: Interactive elements with visual feedback
- **Responsive Design**: Hover animations that work across all screen sizes

## Features

✨ **Advanced Animations**

- GSAP timeline-based orchestration
- Smooth staggered transitions
- Expo easing for natural motion

🎨 **Modern Design**

- Custom typography
- Elegant interactive elements
- Responsive layout

⚡ **Performance Optimized**

- Vite build tool with Rolldown bundler
- Efficient hover tracking
- Font preloading and optimization

🛠️ **Developer Experience**

- ESLint with modern config
- Hot Module Replacement (HMR)
- Module-based architecture

## Tech Stack

- **Animation**: [GSAP](https://gsap.com/) v3.14.2+
- **Build Tool**: [Vite](https://vitejs.dev/) with Rolldown
- **Linting**: ESLint 9.x
- **Package Manager**: pnpm
- **Module System**: ES Modules

## Project Structure

```
.
├── index.html              # Main HTML entry point
├── src/
│   ├── scripts/
│   │   └── main.js        # Hover animation logic and DOM manipulation
│   ├── styles/
│   │   └── style.css      # Main stylesheet
│   └── assets/            # Project assets
├── public/                # Static assets
├── package.json           # Project dependencies
├── eslint.config.mjs      # ESLint configuration
└── pnpm-lock.yaml         # Dependency lock file
```

## Getting Started

### Prerequisites

- Node.js 18+ (or latest LTS)
- pnpm 8+ (or npm/yarn)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gsap__hover-effect--01
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server with hot reload:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Scripts

| Script          | Purpose                           |
| --------------- | --------------------------------- |
| `pnpm dev`      | Start development server with HMR |
| `pnpm build`    | Create production-optimized build |
| `pnpm preview`  | Preview production build locally  |
| `pnpm lint`     | Run ESLint to check code quality  |
| `pnpm lint:fix` | Auto-fix ESLint issues            |

## How It Works

### Hover Animation Flow

The project uses GSAP to create smooth hover animations that respond to user interactions:

1. **Hover Initialization**
   - Interactive elements are identified and prepared
   - Hover tracking system monitors mouse events

2. **Hover Detection**
   - When hovering over interactive elements, hover state activates
   - Smooth transitions between hover states using GSAP

3. **Animation Execution**
   - Scale, opacity, and color animations on hover
   - Staggered animations for multiple elements
   - Smooth return to default state on hover exit

### Key Components

**HTML**

- Interactive elements with hover triggers
- Semantic HTML structure
- Custom element markup

**CSS**

- Interactive element styles
- Hover state styling
- Responsive design patterns
- Animation states

**JavaScript**

- Hover detection logic
- Event listener system for hover states
- GSAP timeline orchestration
- Module-based architecture

## Customization

### Colors

Edit CSS variables in src/styles/style.css to customize interactive elements and hover appearance.

### Hover Behavior

Modify animation timing and easing in src/scripts/main.js:

- Duration values (in seconds)
- Scale and opacity changes
- Easing functions (e.g., `expo.inOut`, `power2.out`)
- Hover target selectors

### Interactive Elements

Add or modify interactive elements by updating the hover target selectors in the JavaScript code.

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Android

## Performance Tips

- GSAP uses GPU acceleration for smooth animations
- Hover tracking is optimized for minimal repaints
- Vite's code splitting minimizes initial bundle size
- Event delegation reduces memory footprint

## Troubleshooting

**Hover animations not working?**

- Check browser console for JavaScript errors
- Ensure hover target elements are properly selected
- Verify CSS is not blocking hover states

**Animations not playing?**

- Check browser console for JavaScript errors
- Ensure GSAP is properly imported
- Verify hover target selectors match your HTML elements

**Build failing?**

- Clear node_modules: `rm -rf node_modules && pnpm install`
- Check pnpm version: `pnpm --version`
- Review ESLint errors: `pnpm lint`

## Credits

- Developed by Jose Arellanes
- Animations powered by [GSAP](https://gsap.com/)
- Built with [Vite](https://vitejs.dev/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2026 José Manuel Díaz

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or feedback, please reach out to the project author.

---

**Last Updated**: February 2026
