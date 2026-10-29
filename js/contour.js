// Marching squares. `field` is a Float32Array of (cols+1)*(rows+1) samples,
// row-major, spaced `cell` px apart. Adds the iso-line at `level` to the
// current path of `ctx` (caller strokes).
(function (global) {
  // For each of the 16 corner cases, which edges to join.
  // Edges: 0 top, 1 right, 2 bottom, 3 left. Corners: a tl, b tr, c br, d bl.
  const SEGMENTS = [
    [], [[3, 2]], [[2, 1]], [[3, 1]],
    [[0, 1]], [[0, 3], [2, 1]], [[0, 2]], [[3, 0]],
    [[3, 0]], [[0, 2]], [[0, 1], [3, 2]], [[0, 1]],
    [[3, 1]], [[2, 1]], [[3, 2]], [],
  ];

  function isoline(ctx, field, cols, rows, cell, level, ox = 0, oy = 0) {
    const w = cols + 1;
    const pt = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const a = field[j * w + i];
        const b = field[j * w + i + 1];
        const c = field[(j + 1) * w + i + 1];
        const d = field[(j + 1) * w + i];
        const idx = ((a > level) << 3) | ((b > level) << 2) | ((c > level) << 1) | (d > level);
        if (idx === 0 || idx === 15) continue;
        const x = ox + i * cell, y = oy + j * cell;
        // Interpolated crossing point on each edge.
        pt[0] = x + cell * ((level - a) / (b - a)); pt[1] = y;
        pt[2] = x + cell; pt[3] = y + cell * ((level - b) / (c - b));
        pt[4] = x + cell * ((level - d) / (c - d)); pt[5] = y + cell;
        pt[6] = x; pt[7] = y + cell * ((level - a) / (d - a));
        for (const [e0, e1] of SEGMENTS[idx]) {
          ctx.moveTo(pt[e0 * 2], pt[e0 * 2 + 1]);
          ctx.lineTo(pt[e1 * 2], pt[e1 * 2 + 1]);
        }
      }
    }
  }

  global.Contour = { isoline };
})(window);
