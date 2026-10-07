# IT Student Guide

A free multi-page website that helps IT students choose a domain, follow exact Basic, Intermediate and Advanced roadmaps, and build their career.

## Pages
- Home
- Choose domain (how to pick a domain, branch comparison)
- Roadmaps (13 domains: Full Stack MERN, Frontend, Backend, Data Science, AI/ML, DevOps, Cybersecurity, Mobile, QA, Data Engineering, Embedded/IoT, UI/UX, Game Dev)
- Build career (resume, GitHub, internships, interviews, growth)
- Jobs, Companies, Year plan, Resources

## Project structure
```
index.html       page shell
css/style.css    all styles (light and dark theme)
js/data.js       roadmap, jobs and companies data
js/app.js        pages, routing and rendering
```

## Run locally
Open `index.html` in a browser. No build step or dependencies.

## Deploy with GitHub Pages
Repository Settings > Pages > Deploy from a branch > `main` / root.

## Add a new roadmap
In `js/data.js`, add a new entry to the `R` object with `n`, `i` (icon name), `d`, `pay`, `time`, and the `B`, `I`, `A`, `P`, `Q` fields. One topic per line in the format `Title: item; item; item`.
