function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(ROUND);
  noLoop(); // no animation: draw once
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

function draw() {
  clear(); // transparent background
  const u = min(width / 1300, (height * 0.6) / 230);

  const cast = [
    [moose,  0.08, 1.0,  true],
    [wolf,   0.21, 0.8,  true],
    [bear,   0.76, 0.85, false],
    [beaver, 0.87, 0.6,  false],
    [otter,  0.95, 0.62, false],
  ];

  for (const [fn, fx, k, faceRight] of cast) {
    push();
    translate(width * fx, height - 6);
    scale(faceRight ? u * k : -u * k, u * k); // mirror the right-hand group to face the middle
    fn();
    pop();
  }
}

function leg(x, y1, w, col, swing = 0) {
  stroke(col); strokeWeight(w);
  line(x, y1, x + swing, 0);
  noStroke();
}

function moose() {
  const dark = color(62, 44, 34), leg_ = color(120, 108, 92);
  // far legs
  leg(-52, -88, 10, color(95, 82, 70)); leg(52, -88, 10, color(95, 82, 70));
  // body
  noStroke(); fill(dark);
  ellipse(0, -112, 150, 66);
  ellipse(-38, -128, 70, 56);           // shoulder hump
  // near legs
  leg(-62, -90, 11, leg_); leg(38, -90, 11, leg_);
  // neck + head
  fill(dark);
  quad(40, -140, 62, -150, 96, -150, 70, -112);
  push(); translate(102, -150); rotate(0.45);
  ellipse(0, 0, 54, 26);
  fill(78, 56, 44); ellipse(30, 2, 30, 24);   // bulbous muzzle
  fill(20); ellipse(40, -2, 5, 5);            // nostril
  fill(dark); ellipse(-14, -14, 10, 20);       // ear
  pop();
  fill(255); ellipse(98, -158, 5, 5); fill(15); ellipse(99, -158, 2.5, 2.5);
  // dewlap "bell"
  fill(50, 36, 28); ellipse(92, -128, 8, 26);
  // antlers: shaft + palm + tines
  stroke(196, 176, 140); strokeWeight(5); noFill();
  for (const s of [1, -1]) {
    const bx = 90 + (s === 1 ? 6 : -10), by = -168;
    line(bx, by, bx + s * 4 - 8, by - 26);
    line(bx - 8, by - 26, bx - 22, by - 46);
  }
  noStroke(); fill(196, 176, 140);
  for (const px of [-14, 6]) {
    beginShape();
    vertex(px + 80, -190); vertex(px + 62, -218); vertex(px + 74, -214);
    vertex(px + 76, -228); vertex(px + 88, -216); vertex(px + 98, -224);
    vertex(px + 98, -204); vertex(px + 96, -190);
    endShape(CLOSE);
  }
}

function wolf() {
  const fur = color(128, 130, 134), dark = color(78, 80, 86), light = color(196, 196, 192);
  // tail
  stroke(fur); strokeWeight(14);
  noFill(); bezier(-46, -62, -70, -62, -88, -44, -100, -26);
  stroke(40); strokeWeight(14); point(-100, -26);
  noStroke();
  // far legs
  leg(-34, -44, 7, dark); leg(38, -44, 7, dark);
  // body
  fill(fur);
  ellipse(0, -58, 104, 38);
  ellipse(30, -62, 50, 44);                    // chest
  fill(light); ellipse(6, -46, 84, 14);        // belly
  fill(dark); ellipse(-6, -74, 70, 12);        // saddle
  // near legs
  leg(-44, -46, 8, fur); leg(26, -46, 8, fur);
  stroke(light); strokeWeight(8); line(-44, -12, -44, 0); line(26, -12, 26, 0); noStroke();
  // neck, head, snout
  fill(fur); quad(44, -86, 62, -90, 72, -62, 46, -58);
  ellipse(66, -84, 34, 28);
  triangle(60, -98, 66, -118, 74, -98);         // ear
  triangle(73, -98, 81, -116, 84, -96);
  fill(light); ellipse(82, -76, 32, 14);         // muzzle
  fill(fur); ellipse(78, -82, 36, 14);
  fill(15); ellipse(96, -80, 7, 6);              // nose
  fill(235, 200, 90); ellipse(72, -88, 5, 4);    // eye
  fill(10); ellipse(72.5, -88, 2, 2.5);
}

function bear() {
  const blk = color(26, 26, 30), mid = color(48, 46, 50);
  leg(-34, -48, 17, mid); leg(40, -48, 17, mid);
  noStroke(); fill(blk);
  ellipse(0, -58, 112, 72);
  ellipse(30, -68, 60, 66);                      // shoulder hump
  leg(-48, -46, 18, blk); leg(26, -46, 18, blk);
  noStroke(); fill(blk);
  ellipse(66, -58, 44, 38);                       // head
  circle(56, -80, 15); circle(78, -80, 15);        // ears
  fill(70, 50, 38); circle(56, -80, 7); circle(78, -80, 7);
  fill(168, 130, 92); ellipse(86, -50, 26, 20);   // tan muzzle
  fill(0); ellipse(94, -54, 10, 7);               // nose
  fill(255); circle(70, -64, 5); fill(0); circle(71, -64, 2.5);
}

function beaver() {
  const fur = color(116, 76, 44), dark = color(72, 46, 28);
  // flat tail
  push(); translate(-40, -10); rotate(-0.25);
  fill(58, 40, 30); ellipse(-12, 0, 56, 18);
  stroke(95, 70, 52); strokeWeight(1.5);
  for (let x = -30; x < 6; x += 8) line(x, -6, x + 2, 6);
  pop();
  noStroke();
  // body
  fill(fur); ellipse(0, -26, 72, 46);
  fill(dark); ellipse(-4, -40, 54, 14);
  // feet
  fill(dark); ellipse(-14, -3, 18, 8); ellipse(20, -3, 18, 8);
  // head
  fill(fur); circle(36, -34, 32);
  fill(dark); circle(30, -49, 9);                    // ear
  fill(150, 104, 66); ellipse(48, -30, 14, 12);      // muzzle
  fill(15); ellipse(53, -33, 5, 4);                  // nose
  fill(247, 238, 210); rect(48, -28, 5, 9, 1.5);     // teeth
  fill(255); circle(40, -38, 5); fill(0); circle(41, -38, 2.5);
}

function otter() {
  const fur = color(96, 66, 46), belly = color(170, 140, 108);
  noFill();
  // tail
  stroke(fur); strokeWeight(14);
  bezier(-52, -14, -76, -12, -96, -4, -112, -6);
  // short legs
  stroke(fur); strokeWeight(9);
  line(-24, -16, -24, -2); line(20, -16, 20, -2);
  // sinuous body
  strokeWeight(26);
  bezier(-54, -14, -30, -44, 8, -18, 46, -34);
  stroke(belly); strokeWeight(8);
  bezier(-52, -8, -30, -34, 8, -10, 44, -26);
  noStroke();
  // head
  fill(fur); ellipse(62, -40, 30, 24);
  fill(belly); ellipse(72, -35, 16, 13);
  fill(20); ellipse(78, -39, 6, 5);                 // nose
  fill(fur); circle(55, -49, 7);                    // ear
  fill(255); circle(66, -44, 4.5); fill(0); circle(67, -44, 2.2);
  stroke(235); strokeWeight(0.8);
  line(74, -35, 90, -38); line(74, -33, 90, -32); line(74, -31, 88, -26);
  noStroke();
}