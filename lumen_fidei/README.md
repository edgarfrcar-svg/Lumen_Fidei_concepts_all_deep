# Lumen Fidei

A plain HTML/CSS/JS site — **no build step, no npm, no server required.**  
Open `index.html` in a browser to run it.

## Structure

```
lumen_fidei/
├── index.html                 Landing page
├── figures.html               Figure directory (search + filter)
├── concepts.html              Theological concepts archive
├── concept.html               Single concept page (?id=grace)
├── theological-tree.html      Interactive doctrinal trees
├── map.html                   Theological Map (lineages)
├── about.html                 Sourcing & editorial policy
├── figures/
│   └── profile.html           Full profile template (?id=augustine)
├── texts/
│   ├── bible.html             Public-domain Bible reader
│   └── work.html              Primary-text reader (#work-id)
├── css/
│   └── style.css              Shared styles + visual identity system
└── js/
    ├── main.js                Shared helpers / timeline seed
    ├── figures.js             Figure directory data
    ├── profile-data.js        Full profile content + visual presets
    ├── profile.js             Profile renderer
    ├── concepts.js            Concepts list data + grid
    ├── concept.js             Single-concept renderer
    ├── tree-data.js           Theological tree data
    ├── tree.js                Tree renderer
    ├── map-data.js            Map lineages & positions
    └── works.js               Public-domain text excerpts
```

## Navigation

- **Figures** → directory → full profile pages with per-figure visual identity  
- **Concepts** → lexicon cards → detail pages  
- **Theological Tree** → Grace / Justification genealogies  
- **Sacred Texts** → Bible reader (KJV / ASV / Douay-Rheims) + work excerpts  
- **About** → sourcing policy (public-domain images only; no AI images)

## Figure visual identity

Profiles for Augustine, Aquinas, and Luther declare a `visual` preset in `profile-data.js`.  
CSS applies atmosphere, texture, and accent without changing the information architecture  
(Biography · Opinions · Relationships · Sources).

Portraits are Wikimedia Commons public-domain files only.

## Publish

- Netlify Drop, GitHub Pages, or Vercel (static site, zero config).
