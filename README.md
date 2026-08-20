<div align="center">

# Xolani Mbambo — Personal Portfolio

Software Developer & IT Professional, blending enterprise banking systems with modern software practice.

[![Live Site](https://img.shields.io/badge/Live%20Site-xolanimba.github.io-1B2A4A?style=for-the-badge)](https://xolanimba.github.io/Personal-Portfolio/)
[![HTML5](https://img.shields.io/badge/HTML5-14181F?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-2FA8A3?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-D98E3F?style=for-the-badge&logo=javascript&logoColor=white)](#)

</div>

---

## About

This is my personal developer portfolio — a minimalist, single-source-of-truth site showcasing my background, skills, projects and certifications, with a working contact form and a small interactive assistant.

**Live site:** [xolanimba.github.io/Personal-Portfolio](https://xolanimba.github.io/Personal-Portfolio/)

## Features

- **Home** — quick summary of my stack and focus, plus selected project highlights
- **About** — my background as a Junior COBOL Developer at Absa (Hogan/ELIPS), and the modern tools I build with day to day
- **Experience** — a timeline of my professional and volunteer work
- **Projects** — full-stack apps, automation tooling, and COBOL-based systems, each with links
- **Certifications** — AWS, Microsoft Azure, SAS, and IBM COBOL credentials
- **Contact** — a working form (via [Formspree](https://formspree.io/)) that delivers straight to my inbox, no backend required
- **Portfolio Assistant** — a small chatbot widget that can answer quick questions about my skills, projects and certifications

## Tech stack

| Layer | Tools |
|---|---|
| Structure & styling | HTML5, CSS3 (custom design system, no framework) |
| Interactivity | Vanilla JavaScript |
| Typography | Space Grotesk, Inter, IBM Plex Mono ([Google Fonts](https://fonts.google.com/)) |
| Contact form | [Formspree](https://formspree.io/) |
| Hosting | [GitHub Pages](https://pages.github.com/) |

## Project structure

```
Personal-Portfolio/
├── index.html              # Home page
├── pages/
│   ├── aboutme.html
│   ├── Experiance.html
│   ├── Projects.html
│   ├── Certfication.html
│   └── ContactMe.html
├── css/
│   └── style.css           # Shared design system
├── js/
│   └── site.js              # Nav toggle, chatbot, contact form logic
└── assets/
    ├── images/
    ├── video/
    └── PDF docs/             # CV and certificates
```

## Running it locally

This is a static site with no build step — clone it and open it directly, or serve it locally:

```bash
git clone https://github.com/XolaniMba/Personal-Portfolio.git
cd Personal-Portfolio

# then either open index.html directly in your browser, or serve it:
python3 -m http.server 8000
# visit http://localhost:8000
```

## Contact

- **Email:** [xolanimbambo22@gmail.com](mailto:xolanimbambo22@gmail.com)
- **LinkedIn:** [xolani-mbambo](https://www.linkedin.com/in/xolani-mbambo-558955280/)
- **GitHub:** [@XolaniMba](https://github.com/XolaniMba)

---

<div align="center">
<sub>© 2026 Xolani Mbambo · Built from scratch, one commit at a time.</sub>
</div>
