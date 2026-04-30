<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Masarak - Project Guidelines

## Overview

Masarak is an AI-powered job matching platform connecting job seekers with HR and companies.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- TanStack Query (server state)
- Redux Toolkit (global UI state)
- Axios (API layer)

---

## Architecture Rules

---

### Naming Conventions

- Use camelCase for variables and functions
- Use PascalCase for components
- Use kebab-case for folders

---

### File Responsibility

- One responsibility per file
- Components → UI only
- Hooks → logic
- Services → API calls

---

### Error Handling

- Always handle API errors
- Show user-friendly messages
- Never fail silently

### State Management

- Use TanStack Query for:
  - Jobs
  - Applications
  - CV data
  - API responses

- Use Redux Toolkit for:
  - Auth state
  - UI state (modals, sidebar, theme)
  - Global flags

---

### API Layer

- All API calls must go through a services layer
- No direct API calls inside components
- Use Axios instance with interceptors

---

### Folder Structure

- Use feature-based structure (scalable)

Example:

- features/jobs
- features/auth
- features/applications
- features/dashboard

Each feature should contain:

- components/
- hooks/
- services/
- types/

---

### Component Rules

- Keep components small and reusable
- Separate UI from logic
- Use custom hooks for logic

---

### Code Quality

- Use TypeScript strictly
- Avoid `any`
- Write clean, readable code
- Avoid duplication

---

### Performance

- Use React Query caching
- Avoid unnecessary re-renders
- Lazy load heavy components

---

### AI Integration

- Treat AI responses as external API
- Always validate responses
- Handle failure cases gracefully

---

### General Principles

- Build MVP first
- Prefer simplicity over complexity
- Write scalable code from day one
<!-- END:nextjs-agent-rules -->
