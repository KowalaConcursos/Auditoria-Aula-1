# AI Development Rules

This document provides guidelines for the AI assistant to follow when making changes to the "Abraçando a Lição" application. The goal is to maintain code quality, consistency, and simplicity.

## Tech Stack

The application is built with a modern, lightweight tech stack. Please adhere to these technologies:

-   **Framework**: React with TypeScript for building the user interface.
-   **Build Tool**: Vite serves as the build tool and development server.
-   **Styling**: Tailwind CSS is used exclusively for styling, loaded via a CDN in `index.html`. All styling should be done with Tailwind utility classes.
-   **State Management**:
    -   Component-level state is managed with React Hooks (`useState`, `useEffect`).
    -   Global application state is centralized in the `useLessonState` custom hook.
-   **Data Persistence**: User progress is saved locally using the browser's `localStorage` API.
-   **Icons**: All icons are custom SVG components located in `src/components/Icons.tsx`.
-   **API Requests**: The native `fetch` API is used for all external API calls, as seen in `src/services/bibleService.ts`.
-   **Structure**: This is a single-page application (SPA). There is no routing library; views are rendered conditionally within the `App.tsx` component.

## Library and Pattern Guidelines

To keep the codebase clean and focused, please follow these rules:

-   **UI Components**: Do not add a component library like Material-UI or shadcn/ui. Create new, small, single-purpose components in the `src/components/` directory, following the existing coding style.
-   **Styling**: Use only Tailwind CSS classes. Do not add custom CSS files, CSS-in-JS libraries, or other styling methodologies.
-   **State Management**: For new global state, extend the existing `useLessonState` hook. Avoid introducing state management libraries like Redux or Zustand.
-   **Icons**: If a new icon is needed, add it as a new SVG component to the `src/components/Icons.tsx` file. Do not install icon libraries like `lucide-react` or `react-icons`.
-   **Dependencies**: Keep third-party dependencies to a minimum. Only add a new package if it provides essential functionality that cannot be reasonably implemented with the existing stack.
-   **Code Style**: Maintain the existing code style (functional components, TypeScript types, file structure) for consistency.
-   **Routing**: Do not add a routing library like `react-router-dom`. The application should remain a single page with conditionally rendered views.