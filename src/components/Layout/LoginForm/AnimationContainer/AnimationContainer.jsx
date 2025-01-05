import { LOGIN_ANIMATION_WORDS } from "../../../../constants/login";
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
      const width = label.length * 20;
      const height = 40;

      const body = Bodies.rectangle(x, y, width, height);
      World.add(world, body);

      const rectWidth = label.length + 150;
      const rectHeight = 50;
      const textSize = 16;


      // TODO:MAKE selected colors function
      const color = [p.random(255), p.random(255), p.random(255)];


      const show = () => {
        const pos = body.position;
        const angle = body.angle;
        p.push();
        p.translate(pos.x, pos.y);
        p.rotate(angle);
        p.rectMode(p.CENTER);
        p.fill(color);
        p.stroke("#191919");
        p.strokeWeight(2);
        p.rect(0, 0, rectWidth, rectHeight, 20);
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
      p.createCanvas(350, 550);

      engine = Engine.create();
      world = engine.world;

      const ground = Bodies.rectangle(p.width / 2, p.height - 5, p.width, 10, {
        isStatic: true,
      });
      const wallLeft = Bodies.rectangle(10, p.height / 2, 10, p.height, {
        isStatic: true,
      });
      const wallRight = Bodies.rectangle(p.width - 10, p.height / 2, 10, p.height, {
        isStatic: true,
      });

      World.add(world, [ground, wallLeft, wallRight]);

      for (let i = 0; i < LOGIN_ANIMATION_WORDS.length; i++) {
        const x = p.random(p.width);
        const y = -200;
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

    const fx = p.random(-0.02, 0.02);
    const fy = p.random(-0.02, 0.02);

    p.mouseMoved = () => {
      for (let w of words) {
        const pos = w.body.position;
        if (p.dist(p.mouseX, p.mouseY, pos.x, pos.y) < 50) {
          Body.applyForce(w.body, { x: pos.x, y: pos.y }, { x: fx, y: fy });
        }
      }
    };
  };

      // TODO:Add a quote
  return <div className={styles.container} ref={containerRef}></div>;
}

export default AnimationContainer;
