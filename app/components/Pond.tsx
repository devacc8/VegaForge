// @ts-nocheck
'use client'

import { useEffect, useRef } from 'react'

export function Pond() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const pondCanvas = canvasRef.current
    const wrap = pondCanvas?.parentElement
    if (!pondCanvas || !wrap) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = pondCanvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let cw = 11;
    let chh = 17;
    let cols = 0;
    let rows = 0;
    let frame = 0;
    let last = 0;
    let lastPointerRipple = 0;
    let lastAmbient = 0;
    let waterGradient = null;
    let water = [];
    const fish = [];
    const ripples = [];
    const pellets = [];
    const pointer = { x: 0, y: 0, active: false };
    const goldPalette = ['#d9a62e', '#e0b24a', '#c9971c'];
    const darkGold = '#63470b';
    const cream = '#f7ecd0';
    const goldPatch = '#c8921f';
    const orange = '#d9822b';
    const ink = '#1a1205';

    function resize() {
      const rect = wrap.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio, 2);
      pondCanvas.width = Math.floor(width * dpr);
      pondCanvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textBaseline = 'top';
      cw = width < 520 ? 8 : 9;
      chh = cw + 2;
      cols = Math.ceil(width / cw);
      rows = Math.ceil(height / chh);
      ctx.font = '600 ' + Math.round(cw * 1.45) + 'px "IBM Plex Mono", monospace';
      waterGradient = ctx.createRadialGradient(width * .52, height * .48, 0, width * .52, height * .48, Math.max(width, height) * .72);
      waterGradient.addColorStop(0, 'rgba(29,91,99,.05)');
      waterGradient.addColorStop(.6, 'rgba(29,91,99,.02)');
      waterGradient.addColorStop(1, 'rgba(29,91,99,0)');
      buildWater();
    }

    function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

    function buildWater() {
      const glyphs = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '.', '·', '~'];
      water = [];
      for (let y = 0; y < rows; y++) {
        let row = '';
        for (let x = 0; x < cols; x++) {
          const edge = x < 2 || x > cols - 3 || y < 2 || y > rows - 3;
          row += edge && Math.random() < .1 ? '~' : glyphs[Math.floor(Math.random() * glyphs.length)];
        }
        water.push(row);
      }
    }

    function paint(gx, gy, glyph, color, alpha) {
      if (gx < 0 || gy < 0 || gx >= cols || gy >= rows || glyph === ' ') return;
      ctx.globalAlpha = alpha == null ? 1 : alpha;
      ctx.fillStyle = color;
      ctx.fillText(glyph, gx * cw, gy * chh);
    }

    function fillTile(px, py, color, alpha) {
      const gx = Math.floor(px / cw);
      const gy = Math.floor(py / chh);
      if (gx < 0 || gy < 0 || gx >= cols || gy >= rows) return;
      ctx.globalAlpha = alpha == null ? .9 : alpha;
      ctx.fillStyle = color;
      ctx.fillRect(gx * cw - cw * .22, gy * chh - chh * .18, cw * 1.45, chh * 1.36);
    }

    function spawnRipple(x, y, strength) {
      ripples.push({ x, y, r: 3, life: 1, strength: strength || .6 });
      if (ripples.length > 14) ripples.shift();
    }

    function addFood(x, y) {
      for (let i = 0; i < 4; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 12 + Math.random() * 26;
        pellets.push({ x: x + Math.cos(a) * r, y: y + Math.sin(a) * r, born: performance.now() / 1000 });
      }
      if (pellets.length > 18) pellets.splice(0, pellets.length - 18);
      spawnRipple(x, y, 1.4);
    }

    function onMove(e) {
      const rect = pondCanvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
      const now = performance.now();
      if (now - lastPointerRipple > 105) {
        spawnRipple(pointer.x, pointer.y, .55);
        lastPointerRipple = now;
      }
    }
    function onDown(e) {
      const rect = pondCanvas.getBoundingClientRect();
      addFood(e.clientX - rect.left, e.clientY - rect.top);
    }
    function onLeave() { pointer.active = false; }

    function createFish() {
      const compact = width < 520;
      const margin = compact ? 78 : 185;
      const spots = compact ? [[.32, .28], [.68, .62]] : [[.27, .30], [.73, .52], [.47, .76]];
      for (let i = 0; i < spots.length; i++) {
        fish.push({
          id: i + 1,
          x: clamp(spots[i][0] * width + (Math.random() - .5) * 46, margin, width - margin),
          y: clamp(spots[i][1] * height + (Math.random() - .5) * 46, margin, height - margin),
          heading: compact ? (i === 0 ? Math.PI - .15 : .15) : (i === 0 ? Math.PI - .15 : i === 1 ? .15 : Math.PI / 2 + .1),
          speed: compact ? 12 + Math.random() * 5 : 15 + Math.random() * 6,
          baseSpeed: compact ? 16 + Math.random() * 4 : 22 + Math.random() * 5,
          length: compact ? 98 + Math.random() * 16 : 180 + Math.random() * 22,
          width: compact ? 40 + Math.random() * 6 : 74 + Math.random() * 10,
          phase: Math.random() * Math.PI * 2,
          wave: compact ? 6 + Math.random() * 3 : 11 + Math.random() * 4,
          baseCurve: (Math.random() - .5) * .55,
          turn: 0,
          pattern: i === 0 ? 'orange' : i === 1 ? 'cream' : 'gold',
          gold: goldPalette[i % goldPalette.length],
          depth: .35 + Math.random() * .65,
          offstage: 0,
          nodes: new Float32Array(40)
        });
      }
    }

    resize();
    createFish();

    window.addEventListener('resize', resize);
    pondCanvas.addEventListener('pointermove', onMove);
    pondCanvas.addEventListener('pointerdown', onDown);
    pondCanvas.addEventListener('pointerleave', onLeave);
    spawnRipple(width * .5, height * .52, .8);

    function bodyShape(s) {
      if (s < .08) return .66 + .28 * (s / .08);
      if (s < .28) return .94 + .06 * ((s - .08) / .2);
      if (s < .78) return 1 - .15 * ((s - .28) / .5);
      return .85 - .64 * ((s - .78) / .22);
    }

    function updateNodes(f, time) {
      const dx = Math.cos(f.heading);
      const dy = Math.sin(f.heading);
      const nx = -dy;
      const ny = dx;
      for (let i = 0; i < 20; i++) {
        const s = i / 19;
        const along = (.5 - s) * f.length;
        const wave = Math.sin(f.phase + s * 5 + time * 1.5) * f.wave * Math.pow(s, 1.2);
        const curve = (f.turn + f.baseCurve) * f.length * .5 * s * s;
        f.nodes[i * 2] = f.x + dx * along + nx * (wave + curve);
        f.nodes[i * 2 + 1] = f.y + dy * along + ny * (wave + curve);
      }
    }

    function nearestOnSpine(f, px, py) {
      let best = 1e9;
      let bs = 0;
      let bv = 0;
      const n = f.nodes;
      for (let i = 0; i < 19; i++) {
        const ax = n[i * 2];
        const ay = n[i * 2 + 1];
        const vx = n[(i + 1) * 2] - ax;
        const vy = n[(i + 1) * 2 + 1] - ay;
        const len2 = vx * vx + vy * vy || 1;
        const u = clamp(((px - ax) * vx + (py - ay) * vy) / len2, 0, 1);
        const qx = ax + vx * u;
        const qy = ay + vy * u;
        const d = Math.hypot(px - qx, py - qy);
        if (d < best) {
          best = d;
          bs = (i + u) / 19;
          bv = (vx * (py - ay) - vy * (px - ax)) >= 0 ? d : -d;
        }
      }
      return { s: bs, v: bv };
    }

    function skinColor(f, s, across, seed) {
      const wave = Math.sin(s * 12 + f.phase) + Math.cos(across * 5 + seed);
      if (f.pattern === 'orange' && s > .18 && s < .64 && across < .82 && wave > -.05) return orange;
      if (f.pattern === 'cream' && s > .16 && s < .62 && across < .8 && wave < .15) return cream;
      if (f.pattern === 'gold' && s > .2 && s < .7 && across < .78 && wave > .1) return goldPatch;
      if (s < .1) return '#f7e8c4';
      return f.gold;
    }

    function drawFish(f, time) {
      updateNodes(f, time);
      const n = f.nodes;
      let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
      for (let i = 0; i < 20; i++) {
        minX = Math.min(minX, n[i * 2]);
        maxX = Math.max(maxX, n[i * 2]);
        minY = Math.min(minY, n[i * 2 + 1]);
        maxY = Math.max(maxY, n[i * 2 + 1]);
      }
      const pad = f.width * .5 + 24;
      const gx0 = Math.max(0, Math.floor((minX - pad) / cw));
      const gx1 = Math.min(cols - 1, Math.ceil((maxX + pad) / cw));
      const gy0 = Math.max(0, Math.floor((minY - pad) / chh));
      const gy1 = Math.min(rows - 1, Math.ceil((maxY + pad) / chh));
      const cells = new Map();
      const halfWidth = f.width * .5;

      for (let gy = gy0; gy <= gy1; gy++) {
        for (let gx = gx0; gx <= gx1; gx++) {
          const px = (gx + .5) * cw;
          const py = (gy + .5) * chh;
          const hit = nearestOnSpine(f, px, py);
          const hw = halfWidth * bodyShape(hit.s);
          if (Math.abs(hit.v) > hw) continue;
          const across = Math.abs(hit.v) / Math.max(hw, 1);
          const seed = Math.sin(hit.s * 31 + across * 7 + f.id * 3);
          let glyph = 'O';
          let color = f.gold;
          let alpha = .96;
          if (across > .8) { glyph = 'o'; color = darkGold; alpha = .95; }
          else if (hit.s < .08) { glyph = '@'; color = '#f8dc8c'; }
          else if (across < .26) { glyph = '@'; color = '#f7d984'; }
          else if (seed > .45) { glyph = '8'; color = '#d9a62e'; }
          else if (seed < -.55) { glyph = 'S'; color = '#efc968'; }

          const painted = skinColor(f, hit.s, across, seed);
          if (painted !== f.gold) {
            glyph = painted === cream ? 'S' : '%';
            color = painted;
          }

          cells.set(gx + ',' + gy, { gx, gy, glyph, color, alpha });
        }
      }

      // Tail fan, kept small and attached to the narrow tail root.
      const tailX = n[19 * 2];
      const tailY = n[19 * 2 + 1];
      const tailTx = tailX - n[18 * 2];
      const tailTy = tailY - n[18 * 2 + 1];
      const tailLen = Math.hypot(tailTx, tailTy) || 1;
      const tailNx = -tailTy / tailLen;
      const tailNy = tailTx / tailLen;
      for (let d = 0; d < 4; d++) {
        for (let k = -d; k <= d; k++) {
          fillTile(
            tailX + tailTx / tailLen * (d * cw + 6) + tailNx * k * cw,
            tailY + tailTy / tailLen * (d * chh + 6) + tailNy * k * chh,
            d > 1 ? orange : '#d9a62e', .78
          );
        }
      }

      // Pectoral fins.
      const finIndex = 6;
      const fx = n[finIndex * 2];
      const fy = n[finIndex * 2 + 1];
      const ftx = n[(finIndex + 1) * 2] - fx;
      const fty = n[(finIndex + 1) * 2 + 1] - fy;
      const fl = Math.hypot(ftx, fty) || 1;
      const fnx = -fty / fl;
      const fny = ftx / fl;
      const finBase = halfWidth * bodyShape(.3) + 1;
      for (let d = 0; d < 2; d++) {
        for (let k = 0; k <= d; k++) {
          fillTile(fx + fnx * (finBase + d * cw) + ftx / fl * k * cw, fy + fny * (finBase + d * chh) + fty / fl * k * chh, '#d9a62e', .55);
          fillTile(fx - fnx * (finBase + d * cw) - ftx / fl * k * cw, fy - fny * (finBase + d * chh) - fty / fl * k * chh, '#d9a62e', .55);
        }
      }

      cells.forEach((c) => {
        ctx.globalAlpha = 1;
        ctx.fillStyle = c.color;
        ctx.fillRect(c.gx * cw + .4, c.gy * chh + .4, Math.max(2, cw - .8), Math.max(2, chh - .8));
      });
      cells.forEach((c) => paint(c.gx, c.gy, c.glyph, c.color === ink ? '#bfd7cd' : 'rgba(15,25,18,.3)', c.color === ink ? .96 : .56));

      // Clear eyes at the head.
      const eyeIndex = Math.round(.08 * 19);
      const epx = n[eyeIndex * 2];
      const epy = n[eyeIndex * 2 + 1];
      const etx = n[(eyeIndex + 1) * 2] - epx;
      const ety = n[(eyeIndex + 1) * 2 + 1] - epy;
      const el = Math.hypot(etx, ety) || 1;
      const enx = -ety / el;
      const eny = etx / el;
      const eyeOff = f.width * .23;
      [-1, 1].forEach((side) => {
        const x = epx + enx * eyeOff * side;
        const y = epy + eny * eyeOff * side;
        paint(Math.floor(x / cw), Math.floor(y / chh), '·', ink, .95);
      });

      // Mouth and barbels.
      const hx = n[0] - n[2];
      const hy = n[1] - n[3];
      const hl = Math.hypot(hx, hy) || 1;
      const hnx = -hy / hl;
      const hny = hx / hl;
      paint(Math.floor((n[0] + hx / hl * 8) / cw), Math.floor((n[1] + hy / hl * 8) / chh), 'v', '#f2b35a', .98);
      [-1, 1].forEach((side) => {
        paint(
          Math.floor((n[0] + hx / hl * 13 + hnx * side * 8) / cw),
          Math.floor((n[1] + hy / hl * 13 + hny * side * 8) / chh),
          '~', '#e0bd74', .9
        );
      });
    }

    function stepFish(f, dt, time) {
      if (f.offstage > 0) {
        f.offstage = Math.max(0, f.offstage - dt);
        return;
      }
      let desired = f.heading;
      let speed = f.baseSpeed;
      // Gentle separation keeps the fish from collapsing into one rotating knot.
      for (const other of fish) {
        if (other === f) continue;
        const dx = f.x - other.x;
        const dy = f.y - other.y;
        const d = Math.hypot(dx, dy);
        if (d > 0 && d < f.length * .52) {
          desired = Math.atan2(dy, dx);
          speed = Math.max(speed, f.baseSpeed * 1.2);
          break;
        }
      }
      if (pointer.active) {
        const dx = f.x - pointer.x;
        const dy = f.y - pointer.y;
        const d = Math.hypot(dx, dy);
        if (d < 125 && d > 0) {
          desired = Math.atan2(dy, dx);
          speed = f.baseSpeed * 1.35;
        }
      }
      if (pellets.length) {
        let nearest = null;
        let best = 230;
        pellets.forEach((p) => {
          const d = Math.hypot(p.x - f.x, p.y - f.y);
          if (d < best) { best = d; nearest = p; }
        });
        if (nearest) {
          desired = Math.atan2(nearest.y - f.y, nearest.x - f.x);
          speed = f.baseSpeed * 1.7;
          if (best < 15) {
            const i = pellets.indexOf(nearest);
            if (i >= 0) pellets.splice(i, 1);
            spawnRipple(nearest.x, nearest.y, 1.1);
          }
        }
      }
      let diff = desired - f.heading;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      f.turn += (diff * .42 - f.turn) * Math.min(1, dt * 1.5);
      f.heading += f.turn * dt;
      f.heading += Math.sin(time * .32 + f.phase) * dt * .06;
      f.x += Math.cos(f.heading) * speed * dt;
      f.y += Math.sin(f.heading) * speed * dt;
      f.turn *= .985;

      // Swim fully out, pause offstage, then re-enter from the opposite edge.
      const extent = f.length * .62 + f.width * .45 + 18;
      if (f.x - extent > width) {
        f.x = -extent; f.heading = 0; f.turn = 0; f.offstage = .55;
      } else if (f.x + extent < 0) {
        f.x = width + extent; f.heading = Math.PI; f.turn = 0; f.offstage = .55;
      } else if (f.y - extent > height) {
        f.y = -extent; f.heading = Math.PI / 2; f.turn = 0; f.offstage = .55;
      } else if (f.y + extent < 0) {
        f.y = height + extent; f.heading = -Math.PI / 2; f.turn = 0; f.offstage = .55;
      }
    }

    function drawWater() {
      ctx.globalAlpha = 1;
      if (waterGradient) {
        ctx.fillStyle = waterGradient;
        ctx.fillRect(0, 0, width, height);
      }
      ctx.fillStyle = 'rgba(29,91,99,.13)';
      for (let y = 0; y < rows; y++) {
        const row = water[y] || '';
        for (let x = 0; x < row.length; x++) {
          if (row[x] !== ' ') ctx.fillText(row[x], x * cw, y * chh);
        }
      }
    }

    function drawRipples() {
      ripples.forEach((r) => {
        const steps = Math.max(12, Math.floor(r.r / 3));
        for (let i = 0; i < steps; i++) {
          const a = i / steps * Math.PI * 2;
          const gx = Math.floor((r.x + Math.cos(a) * r.r) / cw);
          const gy = Math.floor((r.y + Math.sin(a) * r.r) / chh);
          paint(gx, gy, i % 4 === 0 ? 'o' : '·', 'rgba(29,91,99,.4)', Math.max(.05, r.life * .75));
        }
      });
    }

    function drawFood() {
      pellets.forEach((p) => paint(Math.floor(p.x / cw), Math.floor(p.y / chh), '*', '#d76a2a', .95));
    }

    function loop(now) {
      const dt = Math.min((now - last) / 1000, .033);
      last = now;
      const time = now / 1000;
      ctx.clearRect(0, 0, width, height);
      drawWater();
      if (!reduced) {
        if (time - lastAmbient > 2.2) { spawnRipple(Math.random() * width, Math.random() * height, .3); lastAmbient = time; }
        ripples.forEach((r) => { r.r += 16 * dt; r.life -= .26 * dt; });
        for (let i = ripples.length - 1; i >= 0; i--) if (ripples[i].life <= 0) ripples.splice(i, 1);
        fish.forEach((f) => stepFish(f, dt, time));
      }
      drawRipples();
      drawFood();
      fish.filter((f) => f.offstage <= 0).sort((a, b) => a.depth - b.depth).forEach((f) => drawFish(f, time));
      frame = requestAnimationFrame(loop);
    }

    if (reduced) {
      drawWater();
      fish.forEach((f) => drawFish(f, 0));
    } else {
      last = performance.now();
      frame = requestAnimationFrame(loop);
    }

    const cleanup = () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      pondCanvas.removeEventListener('pointermove', onMove)
      pondCanvas.removeEventListener('pointerdown', onDown)
      pondCanvas.removeEventListener('pointerleave', onLeave)
    }
    return cleanup
  }, [])

  return (
    <div className="relative h-[380px] w-full md:h-[520px]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full cursor-crosshair" aria-hidden="true" />
    </div>
  )
}
