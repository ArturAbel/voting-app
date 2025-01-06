import { LOGIN_ANIMATION_WORDS, RANDOM_COLORS } from "../../../../constants/login";
import { useRef, useEffect } from "react";
import Matter from "matter-js";
import p5 from "p5";

import styles from "./AnimationContainer.module.css";

function AnimationContainer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const myP5 = new p5(Sketch, containerRef.current);
    return () => {
      myP5.remove();
    };
  }, []);

  const Sketch = (p) => {
    const { Engine, World, Bodies, Body } = Matter;

    let engine, world;
    let words = [];

    const createWord = (x, y, label) => {
      const width = label.length * 10;
      const height = 30;

      const body = Bodies.rectangle(x, y, width, height);
      World.add(world, body);

      const rectWidth = label.length + 200;
      const rectHeight = 40;
      const textSize = 12;

      const color = RANDOM_COLORS[Math.floor(p.random(RANDOM_COLORS.length) * 10)];

      const show = () => {
        const pos = body.position;
        const angle = body.angle;
        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(angle);
        p.rectMode(p.CENTER);
        p.fill(color);
        p.stroke("#191919");
        p.strokeWeight(1);
        p.rect(0, 0, rectWidth, rectHeight, 15);
        p.noStroke();
        p.fill("#000000");
        p.textSize(textSize);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(label, 0, 0);
        p.pop();
      };

      return { body, label, show };
    };

    p.setup = () => {
      p.createCanvas(450, 550);

      engine = Engine.create();
      world = engine.world;

      const ground = Bodies.rectangle(p.width / 2, p.height - 5, p.width * 10 , 10, {
        isStatic: true,
      });
      const wallLeft = Bodies.rectangle(0, p.height / 2, 0, p.height, {
        isStatic: true,
      });
      const wallRight = Bodies.rectangle(350, p.height / 2, 0, p.height, {
        isStatic: true,
      });

      World.add(world, [ground, wallLeft, wallRight]);

      for (let i = 0; i < LOGIN_ANIMATION_WORDS.length; i++) {
        const x = p.random(p.width);
        const y = -150;
        words.push(createWord(x, y, LOGIN_ANIMATION_WORDS[i]));
      }
    };

    p.draw = () => {
      p.background("#eee");
      Engine.update(engine);
      for (let w of words) {
        w.show();
      }
    };

    const fx = p.random(-0.01, 0.01);
    const fy = p.random(-0.01, 0.01);

    p.mouseMoved = () => {
      for (let w of words) {
        const pos = w.body.position;
        if (p.dist(p.mouseX, p.mouseY, pos.x, pos.y) < 30) {
          Body.applyForce(w.body, { x: pos.x, y: pos.y }, { x: fx, y: fy });
        }
      }
    };
  };

  // TODO:Add a quote
  return <div className={styles.container} ref={containerRef}></div>;
}

export default AnimationContainer;
