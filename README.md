# Saad Portfolio

A personal portfolio for Muhammad Saad Iqbal, featuring selected Android, AI automation, and web projects.

## Features

- Responsive portfolio with a 3D hero scene and animated typewriter text.
- Scroll-triggered heading and project-detail animations.
- Filterable project cards for Android, AI & Automation, and Web work.
- Continuously scrolling skills ticker, including `n8n` and OpenAI-related work.
- Contact links for email, LinkedIn, GitHub, and phone.

## Tech Stack

- Next.js 15 and React 19
- TypeScript
- Tailwind CSS
- React Three Fiber and Drei
- Framer Motion
- Nunito and DM Mono fonts

## Getting Started

Use Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To use another port:

```bash
npm run dev -- --port 3001
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## Selected Projects

- **Android:** Perkss Business App, AgriSmart Mobile App, Attendance Management System, and Mini Banking App.
- **AI & Automation:** NovaMind AI and n8n chatbot workflows for outreach, social channels, and RAG use cases.
- **Web:** Edu AI, AgriSmart Web Portal, and POS System Dashboard.

The project cards include the supplied descriptions, highlights, and technology details. No external project-demo links are configured yet.

## Project Structure

```text
src/
  app/
    layout.tsx       Root layout, font setup, and metadata
    page.tsx         Home page composition and skills ticker
    globals.css      Global styling, responsive layouts, and motion effects
  components/
    Contact.tsx
    Education.tsx
    ExperienceProjects.tsx
    Hero3D.tsx
    Navbar.tsx
    ScrollType.tsx
    Skills.tsx
    TypewriterLine.tsx
```

## Build

```bash
npm run build
npm run start
```