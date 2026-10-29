// A tiny shared "web of ideas". Used by the garden, stacked notes, popups and
// the glowing network. Links in bodies are written [[id]] or [[id|label]].
window.NOTES = [
  {
    id: "lines",
    title: "Everything is lines",
    stage: "evergreen",
    tags: ["drawing", "maps"],
    updated: "2026-10-20",
    body: `A road map, a contour map and a flow field are all the same thing drawn three ways: a set of lines that never quite touch. The interesting part is always the rule that keeps them apart.

Roads avoid each other because of [[city-roads|how cities grow]]. Contours avoid each other because they are [[contours|slices of a surface]]. Flow lines avoid each other because we [[flow-fields|tell them to]].`,
  },
  {
    id: "contours",
    title: "Contours are slices",
    stage: "evergreen",
    tags: ["maps", "drawing"],
    updated: "2026-09-02",
    body: `Take any smooth surface, cut it with evenly spaced horizontal planes, and draw where each plane meets it. Close lines mean steep ground. The algorithm that does this on a grid is called marching squares and it fits in forty lines.

It pairs well with [[noise|noise]] as the surface and with [[slowness|slow animation]] as the presentation. See also [[lines]].`,
  },
  {
    id: "noise",
    title: "Noise is controlled randomness",
    stage: "budding",
    tags: ["drawing", "code"],
    updated: "2026-08-14",
    body: `Perlin noise gives you random values that change smoothly. Stack a few octaves and it starts to look like terrain. Read it as an angle and it becomes a [[flow-fields|flow field]]. Read it as a height and you get [[contours]].

The seed is the whole artwork: same seed, same picture. That makes it great for [[plotters|plotting]].`,
  },
  {
    id: "flow-fields",
    title: "Flow fields",
    stage: "budding",
    tags: ["drawing", "code"],
    updated: "2026-07-30",
    body: `Put an arrow at every point of the canvas, drop a pen, and let it follow the arrows. The arrows usually come from [[noise]]. The trick that makes it look hand-made is collision: stop a line when it gets too close to one already drawn.

This is the same trick as [[city-roads|street growth]], just with smoother rules.`,
  },
  {
    id: "plotters",
    title: "Drawing for pen plotters",
    stage: "seedling",
    tags: ["drawing", "code"],
    updated: "2026-10-01",
    body: `A plotter cannot fill, it can only move a pen. That constraint pushes you towards [[lines]] and away from pixels. Export SVG, keep paths short, sort them so the pen does not travel too far.`,
  },
  {
    id: "city-roads",
    title: "How streets grow",
    stage: "budding",
    tags: ["maps", "cities"],
    updated: "2026-06-11",
    body: `Old cities grow like plants: a road extends, branches, and stops when it hits another road. Planned cities start from a grid. Most real places are both.

A map of only roads, no labels, is surprisingly recognisable. Shadows are the other way to read a city: see [[shadows]].`,
  },
  {
    id: "shadows",
    title: "Shadows in the city",
    stage: "seedling",
    tags: ["cities", "light"],
    updated: "2026-10-25",
    body: `A building's shadow is just its footprint dragged away from the sun by height divided by the tangent of the sun's altitude. Do that for every tower, every hour, and you get a map of where the city never sees light.

Light and shadow sketches are also a playful thing on their own: see [[light]].`,
  },
  {
    id: "light",
    title: "Playing with light",
    stage: "seedling",
    tags: ["light", "motion"],
    updated: "2026-10-26",
    body: `Three coloured lights mixed additively make white. Block one and the shadow takes on the colour of the other two. It is the simplest possible magic trick and it never gets old.

It works best with [[springs|a bit of motion]].`,
  },
  {
    id: "springs",
    title: "Springs over easing curves",
    stage: "evergreen",
    tags: ["motion", "code"],
    updated: "2026-05-19",
    body: `An easing curve has a fixed duration. A spring has a stiffness and a damping and finishes when it finishes. That means you can interrupt it mid-flight and it still looks right, which is most of what makes an interface feel alive.

Use them with [[restraint]].`,
  },
  {
    id: "restraint",
    title: "Restraint",
    stage: "budding",
    tags: ["motion", "craft"],
    updated: "2026-04-03",
    body: `The best interaction details are the ones you only notice when they are missing. A copy button that turns into a tick. A list where the highlight slides instead of jumping. Keep [[springs|motion]] short and let [[slowness|slow things]] live in the background.`,
  },
  {
    id: "slowness",
    title: "Slowness as a feature",
    stage: "seedling",
    tags: ["motion", "craft"],
    updated: "2026-10-10",
    body: `A background that drifts so slowly you are not sure it moves is calming. It rewards people who stay. Pairs with [[contours]] and with [[restraint]].`,
  },
  {
    id: "gardens",
    title: "Digital gardens",
    stage: "evergreen",
    tags: ["web", "craft"],
    updated: "2026-03-22",
    body: `A blog is a stream ordered by date. A garden is a web ordered by links. Notes are planted as seedlings and tended until they are evergreen. You never finish, you just [[linking|connect more]].`,
  },
  {
    id: "linking",
    title: "Links are the content",
    stage: "budding",
    tags: ["web"],
    updated: "2026-09-18",
    body: `When notes link to each other, the shape of the links becomes a picture of how you think. You can draw it as a [[network|glowing web]], open it [[stacked|side by side]], or preview it [[popups|in place]].`,
  },
  {
    id: "network",
    title: "Drawing the web",
    stage: "seedling",
    tags: ["web", "drawing"],
    updated: "2026-10-27",
    body: `Nodes push each other apart, links pull them together, and after a few hundred steps a layout appears. Additive glow makes dense clusters bright, which happens to be where the ideas are. See [[linking]].`,
  },
  {
    id: "stacked",
    title: "Stacked notes",
    stage: "seedling",
    tags: ["web"],
    updated: "2026-10-28",
    body: `Opening a link beside the current note instead of replacing it keeps your trail visible. You can always slide back. It turns reading into [[linking|walking a path]].`,
  },
  {
    id: "popups",
    title: "Popups inside popups",
    stage: "seedling",
    tags: ["web"],
    updated: "2026-10-28",
    body: `Hover a link and the target appears in a little window. Hover a link in that window and another appears. You can wander three notes deep without losing your place. See [[stacked]] for the sideways version.`,
  },
];

window.NOTE_BY_ID = Object.fromEntries(window.NOTES.map((n) => [n.id, n]));

// Turn a note body into HTML paragraphs with <a data-note> links.
window.renderNoteBody = function (body, hrefFor) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return body
    .split(/\n\s*\n/)
    .map((para) => {
      const html = esc(para).replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => {
        const note = window.NOTE_BY_ID[id];
        const text = label || (note ? note.title : id);
        return `<a href="${hrefFor ? hrefFor(id) : "#" + id}" data-note="${id}">${text}</a>`;
      });
      return `<p>${html}</p>`;
    })
    .join("");
};

// Every link between notes, as [from, to] ids.
window.noteLinks = function () {
  const out = [];
  for (const n of window.NOTES) {
    for (const m of n.body.matchAll(/\[\[([a-z0-9-]+)/g)) {
      if (window.NOTE_BY_ID[m[1]] && m[1] !== n.id) out.push([n.id, m[1]]);
    }
  }
  return out;
};
