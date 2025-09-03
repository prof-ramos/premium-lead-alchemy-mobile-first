# GEMINI.md

## Project Overview

This is a web application built with Vite, React, TypeScript, and Tailwind CSS. It appears to be a landing page for a course or service called "Tráfego Imobiliário de Alta Performance" (High-Performance Real Estate Traffic). The application is structured with a main `Index.tsx` page that composes several smaller components to create the landing page. It uses `react-router-dom` for routing and `react-query` for data fetching. The UI is styled with Tailwind CSS and includes a custom "luxury" color palette.

## Building and Running

To build and run this project, you'll need to have Node.js and npm installed.

**Development:**

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server and make the application available at `http://localhost:8080`.

**Building:**

To create a production build, run:

```bash
npm run build
```

This will create a `dist` directory with the optimized and minified application files.

**Linting:**

To lint the project files, run:

```bash
npm run lint
```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Custom styles are defined in `tailwind.config.ts`.
*   **Components:** The application is built with a component-based architecture. Reusable UI components are located in `src/components/ui`.
*   **Routing:** The project uses `react-router-dom` for routing. Routes are defined in `src/App.tsx`.
*   **State Management:** The project uses `react-query` for managing server state.
*   **Path Aliases:** The project uses the `@{` alias for the `src` directory.
