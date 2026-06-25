# Portfolio Website — Design Spec

## Overview

A personal portfolio website to showcase GoHighLevel and n8n automation services. Built as a static HTML/CSS/JS site hosted on Cloudflare Pages.

## Purpose

- Get hired by potential employers
- Attract freelance clients
- Establish personal branding as an automation specialist

## Pages

| Page | URL | Content |
|------|-----|---------|
| Landing | `/index.html` | Hero → About → Services → Contact |
| Projects | `/projects.html` | Project showcase grid |

## Navigation

Sticky nav with transparent-to-solid transition on scroll. Projects link highlighted as CTA button.

```
[Logo/Name]    Home    About    Services    [Projects]    Contact
```

## Sections (Landing Page)

### Hero
- Name and tagline: "Automation Specialist | GoHighLevel & n8n"
- CTA buttons: "View Projects" and "Contact Me"

### About
- Background and experience
- Skills with visual indicators
- 1 year GoHighLevel experience
- n8n automation expertise
- Beginner in coding/agents

### Services
Six services with icons and descriptions:
1. Conversation AI setup
2. Pipeline creation/enhancement
3. Complex automation
4. Integrations & webhooks
5. Booking calendar setup
6. Automation follow-up sequences

### Contact
- Name, email, message fields
- Submits POST to n8n webhook via fetch()
- Secret header for authentication

## Projects Page

- Grid of project cards
- Each card: image placeholder, title, description, tech tags, link
- Responsive grid layout

## Features

### Floating Chatbot Widget
- Bottom-right corner on all pages
- Opens chat window on click
- Connects to n8n webhook
- Secret header for authentication

### Responsive Design
| Device | Width | Behavior |
|--------|-------|----------|
| Desktop | >1024px | Full layout |
| Tablet | 768–1024px | Adjusted grid |
| Mobile | <768px | Single column, hamburger menu |

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (no frameworks)
- Static hosting on Cloudflare Pages

## Security

- Contact form: Secret header in fetch request
- Chatbot: Secret header in WebSocket/polling
- No CAPTCHA (to reduce friction)

## Design

### Color Palette
- Primary bg: `#0a0a0f`
- Card bg: `#12121a`
- Accent: `#6366f1` (indigo)
- Text: `#e2e8f0`
- Gradient: indigo → cyan for CTAs

### Typography
- Clean, modern sans-serif (system fonts)
- Clear hierarchy with size/weight

## File Structure

```
portfolio/
├── index.html
├── projects.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── form.js
│   └── chatbot.js
├── assets/
│   └── images/
└── config.js
```

## Deployment

1. Push to GitHub repository
2. Connect to Cloudflare Pages
3. Auto-deploy on push

## n8n Integration

### Contact Form
- Webhook URL: configurable in `config.js`
- Method: POST
- Headers: `Content-Type: application/json`, `X-Secret-Key: YOUR_SECRET`
- Body: `{ name, email, message }`

### Chatbot
- Webhook URL: configurable in `config.js`
- Method: POST (or WebSocket)
- Headers: `X-Secret-Key: YOUR_SECRET`
- Body: `{ message, sessionId }`
