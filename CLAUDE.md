@AGENTS.md

# Masarak - AI Coding Instructions

You are working on an AI-powered job platform built with Next.js App Router.

---

## Core Rules

- Always use TypeScript
- Follow App Router structure (no pages router)
- Use functional components only
- Keep components clean and minimal

---

## State Handling

- Use TanStack Query for all server data
- Use Redux Toolkit only for global UI and auth state
- Never mix responsibilities between them

---

## Data Fetching

- Do NOT fetch data directly inside components
- Always use:
  - services layer (Axios)
  - custom hooks (React Query)

---

## Code Style

- Write clean, readable, and modular code
- Avoid large components
- Extract logic into hooks

---

## Project Context

This project includes:

- Job seekers uploading CVs
- AI analyzing CVs
- Matching jobs with a score
- HR managing job posts and applicants
- Admin controlling the platform

---

## When generating code:

- Respect feature-based architecture
- Place code in the correct folder
- Create reusable components
- Use proper typing for all data

---

## Avoid

- Using `any`
- Inline API calls
- Mixing UI and logic
- Overengineering

---

## Preferred Pattern

- services → API calls
- hooks → logic + React Query
- components → UI only

---

## Goal

Write production-level, scalable frontend code for a real-world SaaS platform.
