import React, { useEffect } from 'react';
import styled from 'styled-components';

export type ParticleAlphabetType = {
  x?: string;
  y?: string;
  radius?: number;
  draw?: (context: any) => void;
  canvas?: HTMLCanvasElement | null;
  ctx?: CanvasRenderingContext2D | null;
  W?: number;
  H?: number;
  Particle?: any;
  init: ((this: GlobalEventHandlers, event_: Event) => any) &
    ((this: Window, event_: Event) => any);
  particles?: any[];
  particlePositions?: any[];
  tmpCanvas?: HTMLCanvasElement;
  tmpCtx?: CanvasRenderingContext2D | null;
  changeLetter: Function;
  getPixels: Function;
  makeParticles: Function;
  animate: FrameRequestCallback;
  currentPos: number;
  time?: string;
  animateParticles: Function;
  // Does not work with typescript.
  // checkPropertyExists: Function;
};

const AnimatedTextLoader = () => {
  useEffect(() => {
    var particleAlphabet: ParticleAlphabetType = {
      // Does not work with typescript.
      // checkPropertyExists: function (name: keyof ParticleAlphabetType) {
      //   if (!(name in particleAlphabet)) {
      //     throw new Error(
      //       `particleAlphabet has an unexpected ${particleAlphabet[name]} value in property ${name}.`
      //     );
      //   }
      // },
      Particle(x: string, y: string) {
        this.x = x;
        this.y = y;
        this.radius = 3.5;
        this.draw = function (context) {
          context.save();
          context.translate(this.x, this.y);
          context.fillStyle = 'white';
          context.fillRect(0, 0, this.radius, this.radius);
          context.restore();
        };
      },
      init() {
        particleAlphabet.canvas = document.querySelector('canvas');
        if (!particleAlphabet.canvas) {
          throw new Error('Canvas was not found in window.');
        }

        particleAlphabet.ctx = particleAlphabet.canvas.getContext('2d');
        particleAlphabet.W = window.innerWidth;
        particleAlphabet.H = window.innerHeight;
        particleAlphabet.particlePositions = [];
        particleAlphabet.particles = [];
        particleAlphabet.tmpCanvas = document.createElement('canvas');
        particleAlphabet.tmpCtx = particleAlphabet.tmpCanvas.getContext('2d');

        particleAlphabet.canvas.width = particleAlphabet.W;
        particleAlphabet.canvas.height = particleAlphabet.H;

        setInterval(() => {
          particleAlphabet.changeLetter();
          particleAlphabet.getPixels(
            particleAlphabet.tmpCanvas,
            particleAlphabet.tmpCtx
          );
        }, 550);

        particleAlphabet.makeParticles(1000);
        particleAlphabet.animate(Number(particleAlphabet.time));
      },
      currentPos: 0,
      changeLetter(word = 'USA') {
        const letters = word.split('');
        particleAlphabet.time = letters[particleAlphabet.currentPos];
        particleAlphabet.currentPos++;
        if (particleAlphabet.currentPos >= letters.length) {
          particleAlphabet.currentPos = 0;
        }
      },
      makeParticles(number: number) {
        if (!particleAlphabet.W || !particleAlphabet.H) {
          throw new Error(
            `particleAlphabet has unexpected ${particleAlphabet.W} 'W', ${particleAlphabet.H} 'H' properties.`
          );
        }

        for (let index = 0; index <= number; index++) {
          particleAlphabet.particles?.push(
            new particleAlphabet.Particle(
              particleAlphabet.W / 2 + Math.random() * 400 - 200,
              particleAlphabet.H / 2 + Math.random() * 400 - 200
            )
          );
        }
      },
      getPixels(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        if (!particleAlphabet.time) {
          throw new Error(
            `particleAlphabet has an unexpected ${particleAlphabet.time} 'time' property.`
          );
        }

        const keyword = particleAlphabet.time;
        const gridX = 6;
        const gridY = 6;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = 'red';
        context.font = 'normal normal 330px advocate_c43_mid, sans-serif';
        context.fillText(
          keyword,
          canvas.width / 2 - context.measureText(keyword).width / 2,
          canvas.height / 2 + 100
        );
        const idata = context.getImageData(0, 0, canvas.width, canvas.height);
        const buffer32 = new Uint32Array(idata.data.buffer);

        if (!particleAlphabet.particlePositions) {
          throw new Error(
            `particleAlphabet has an unexpected ${particleAlphabet.particlePositions} 'particlePositions' property.`
          );
        }

        if (particleAlphabet.particlePositions.length > 0)
          particleAlphabet.particlePositions = [];
        for (let y = 0; y < canvas.height; y += gridY) {
          for (let x = 0; x < canvas.width; x += gridX) {
            if (buffer32[y * canvas.width + x]) {
              particleAlphabet.particlePositions.push({ x, y });
            }
          }
        }
      },
      animateParticles() {
        if (!particleAlphabet.particles) {
          throw new Error(
            `particleAlphabet has an unexpected ${particleAlphabet.particlePositions} 'particles' property.`
          );
        }

        if (!particleAlphabet.particlePositions) {
          throw new Error(
            `particleAlphabet has an unexpected ${particleAlphabet.particlePositions} 'particlePositions' property.`
          );
        }

        let p;
        let pPos;
        for (
          let index = 0, number = particleAlphabet.particles.length;
          index < number;
          index++
        ) {
          p = particleAlphabet.particles[index];
          pPos = particleAlphabet.particlePositions[index];
          if (
            particleAlphabet.particles.indexOf(p) ===
            particleAlphabet.particlePositions.indexOf(pPos)
          ) {
            p.x += (pPos.x - p.x) * 0.3;
            p.y += (pPos.y - p.y) * 0.3;
            p.draw(particleAlphabet.ctx);
          }
        }
      },
      animate() {
        requestAnimationFrame(particleAlphabet.animate);

        if (!particleAlphabet.ctx) {
          throw new Error(
            `particleAlphabet has an unexpected ${particleAlphabet.ctx} 'ctx' property.`
          );
        }

        if (!particleAlphabet.W || !particleAlphabet.H) {
          throw new Error(
            `particleAlphabet has an unexpected ${particleAlphabet.particlePositions} 'particlePositions' property.`
          );
        }

        particleAlphabet.ctx.fillStyle = 'var(--color-background)';
        particleAlphabet.ctx.fillRect(
          0,
          0,
          particleAlphabet.W,
          particleAlphabet.H
        );
        particleAlphabet.animateParticles();
      },
    };

    window.addEventListener('load', particleAlphabet.init);
  });

  return <ChantTextCanvas />;
};

export default AnimatedTextLoader;

const ChantTextCanvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
  * {
    margin: 0;
    padding: 0;
  }
`;
