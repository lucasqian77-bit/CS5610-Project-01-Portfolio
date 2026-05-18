Project 1 Guidelines - Video notes:
* 2 pages no AI, one page AI
* At least one vanilla js feature - no jquery, manually manipulate dom.

## AI Disclosure

Claude CLI using Sonnet 4.6, medium effort, was used as a tracking and organizational tool for the duration of this project. The prompt used can be found below:

**Prompt:** Based on this rubric - I'd like a list of actionables for completion in order for me to continuously reference in the terminal. _(Pasted rubric HTML into Claude terminal)_

### Phase 1 — Foundation

1. Design document — 80 pts. Personas, user stories, mockups, project description. Biggest item by far.
2. Package.json + project structure — `"type":"module"`, MIT license, folder layout (`src/html/`, `src/css/`, `src/js/`, `src/images/`)
3. ESLint + Prettier setup — get the class config file, wire up both tools before writing much code

### Phase 2 — Build the site

4. `index.html` — real content, meta author/description/icon, semantic tags, CSS classes, all images with `alt`
5. 2+ more HTML pages + 1 AI-generated page — link them in a nav
6. CSS — flexbox or Bootstrap 5 grid, no `!important`
7. ES6 JS module — `<script type="module">`, 5+ lines of original code
8. Creative differentiating component — something unique

### Phase 3 — Quality checks

9. Run Prettier on everything
10. Fix all ESLint errors
11. Validate every page at W3C validator

### Phase 4 — Polish & submit

12. `README.md` — author, class link, objective, screenshot, build instructions, GenAI section
13. Deploy to public URL (GitHub Pages/Netlify/Vercel)
14. Record narrated video — 15 pts
15. Google Form submission + peer code review — 25 pts combined