import { LOGIN_ANIMATION_WORDS, RANDOM_COLORS } from "../../../../constants/login";
import { useRef, useEffect, useState } from "react";
import Matter from "matter-js";
import p5 from "p5";

import styles from "./AnimationContainer.module.css";

function AnimationContainer() {
  const [colors, setColors] = useState([...RANDOM_COLORS]);
  const containerRef = useRef(null);

  useEffect(() => {
    const myP5 = new p5(Sketch, containerRef.current);
    setColors(RANDOM_COLORS);
    return () => {
      myP5.remove();
    };
  }, []);

  const Sketch = (p) => {
    const { Engine, World, Bodies } = Matter;

    let engine, world;
    let words = [];
    let wordIndex = 0;
    const spawnInterval = 20;
    let currentColors = colors;

    const createWord = (x, y, label) => {
      const rectWidth = label.length + 115;
      const rectHeight = 40;
      const textSize = 11;
      const body = Bodies.rectangle(x, y, rectWidth, rectHeight);

      const randomIndex = p.floor(p.random(currentColors.length));
      let pickedColor = currentColors[randomIndex];
      currentColors.splice(randomIndex, 1);

      World.add(world, body);

      const show = () => {
        const pos = body.position;
        const angle = body.angle;
        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(angle);
        p.rectMode(p.CENTER);
        p.fill(pickedColor);
        p.stroke("#191919");
        p.strokeWeight(1);
        p.rect(0, 0, rectWidth + 10, rectHeight, 15);
        p.noStroke();
        p.fill("#000000");
        p.textSize(textSize);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(label, 0, 0);
        p.pop();
      };

      return { body, show };
    };

    p.setup = () => {
      p.createCanvas(350, 410);
      engine = Engine.create();
      world = engine.world;

      const ground = Bodies.rectangle(p.width / 2, p.height, p.width, 10, { isStatic: true });
      const wallLeft = Bodies.rectangle(0, p.height / 2, 10, p.height, { isStatic: true });
      const wallRight = Bodies.rectangle(p.width - 50, p.height / 2, 10, p.height, { isStatic: true });

      World.add(world, [ground, wallLeft, wallRight]);
    };

    p.draw = () => {
      p.background("#E0E1E9");
      Engine.update(engine);

      if (p.frameCount % spawnInterval === 0 && wordIndex < LOGIN_ANIMATION_WORDS.length) {
        const x = p.random(p.width - 50);
        const y = -50;

        const newWord = createWord(x, y, LOGIN_ANIMATION_WORDS[wordIndex]);
        words.push(newWord);

        wordIndex++;
      }
      for (let w of words) {
        w.show();
      }
    };
  };

  return (
    <div className={styles.outer}>
      <div className={styles.inner} ref={containerRef}></div>
    </div>
  );
}

export default AnimationContainer;
