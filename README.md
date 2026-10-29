# Programming

A sketchbook of low-fi web experiments, each one a first draft of an idea
borrowed from a site we admire. Open `index.html` in a browser (no build step)
or serve the folder:

```bash
python3 -m http.server 8000
```

| Page | Idea | After |
| --- | --- | --- |
| `pages/drive.html` | Drive a toy car around a 3D island (three.js) | Bruno Simon |
| `pages/details.html` | Copy tick, toast stack, sliding highlight, hold to delete, ⌘K | Rauno Freiberg, Emil Kowalski |
| `pages/springs.html` | Spring physics playground | Josh Comeau |
| `pages/resize.html` | Four different layouts by container width | Lynn Fisher |
| `pages/roads.html` | Road line art: grown procedurally or fetched from OpenStreetMap | Andrei Kashcha |
| `pages/poster.html` | Chord poster of π, e, √2, φ digits (SVG export) | Nicholas Rougeux |
| `pages/terrain.html` | Generative terrain as contours or ridgelines | Robert Hodgin |
| `pages/flowfield.html` | Non-overlapping flow-field lines | Tyler Hobbs |
| `pages/plotter.html` | Pen-plotter studies with SVG export | Matt DesLauriers |
| `pages/garden.html` | Digital garden with growth stages and backlinks | Maggie Appleton |
| `pages/stacked.html` | Stacked sliding note panes | Andy Matuschak |
| `pages/popups.html` | Nested link-preview popups | Gwern |
| `pages/web.html` | Glowing force-directed web of notes | Nadieh Bremer, Shirley Wu |
| `pages/shadows.html` | Building shadows by time of day, plus whole-day shade | Shadowmap, NYT |
| `pages/light.html` | Coloured lights with coloured shadows | Zach Lieberman |
| `pages/circle.html` | Draw a perfect circle game | Neal Agarwal |
| `pages/waves.html` | Interactive explainer on adding waves | Bartosz Ciechanowski |
| `pages/toys.html` | Googly eyes that follow you | Tim Holman |

Shared code lives in `css/base.css` and `js/` (noise, marching-squares
contours, and the notes dataset used by the four "web of ideas" pages).
