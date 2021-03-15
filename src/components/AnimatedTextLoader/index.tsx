import React, { useEffect } from 'react';
import styled from 'styled-components';

export type ParticleAlphabetType = {
  x?: string;
  y?: string;
  radius?: number;
  draw?: (ctx: any) => void;
  canvas?: HTMLCanvasElement | null;
  ctx?: CanvasRenderingContext2D | null;
  W?: number;
  H?: number;
  Particle?: any;
  init: ((this: GlobalEventHandlers, ev: Event) => any) &
    ((this: Window, ev: Event) => any);
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
      Particle: function (x: string, y: string) {
        this.x = x;
        this.y = y;
        this.radius = 3.5;
        this.draw = function (ctx) {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, this.radius, this.radius);
          ctx.restore();
        };
      },
      init: function () {
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

        setInterval(function () {
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
      changeLetter: function (word = 'USA') {
        var letters = word.split('');
        particleAlphabet.time = letters[particleAlphabet.currentPos];
        particleAlphabet.currentPos++;
        if (particleAlphabet.currentPos >= letters.length) {
          particleAlphabet.currentPos = 0;
        }
      },
      makeParticles: function (num: number) {
        if (!particleAlphabet.W || !particleAlphabet.H) {
          throw new Error(
            `particleAlphabet has unexpected ${particleAlphabet.W} 'W', ${particleAlphabet.H} 'H' properties.`
          );
        }
        for (var i = 0; i <= num; i++) {
          particleAlphabet.particles?.push(
            new particleAlphabet.Particle(
              particleAlphabet.W / 2 + Math.random() * 400 - 200,
              particleAlphabet.H / 2 + Math.random() * 400 - 200
            )
          );
        }
      },
      getPixels: function (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
      ) {
        if (!particleAlphabet.time) {
          throw new Error(
            `particleAlphabet has an unexpected ${particleAlphabet.time} 'time' property.`
          );
        }

        var keyword = particleAlphabet.time,
          gridX = 6,
          gridY = 6;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = 'red';
        ctx.font = 'italic bold 330px advocate_c43_mid san';
        ctx.fillText(
          keyword,
          canvas.width / 2 - ctx.measureText(keyword).width / 2,
          canvas.height / 2 + 100
        );
        var idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var buffer32 = new Uint32Array(idata.data.buffer);

        if (!particleAlphabet.particlePositions) {
          throw new Error(
            `particleAlphabet has an unexpected ${particleAlphabet.particlePositions} 'particlePositions' property.`
          );
        }
        if (particleAlphabet.particlePositions.length > 0)
          particleAlphabet.particlePositions = [];
        for (var y = 0; y < canvas.height; y += gridY) {
          for (var x = 0; x < canvas.width; x += gridX) {
            if (buffer32[y * canvas.width + x]) {
              particleAlphabet.particlePositions.push({ x: x, y: y });
            }
          }
        }
      },
      animateParticles: function () {
        var p, pPos;
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
        for (var i = 0, num = particleAlphabet.particles.length; i < num; i++) {
          p = particleAlphabet.particles[i];
          pPos = particleAlphabet.particlePositions[i];
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
      animate: function () {
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
        particleAlphabet.ctx.fillStyle = 'rgba(23, 41, 58, .8)';
        particleAlphabet.ctx.fillRect(
          0,
          0,
          particleAlphabet.W,
          particleAlphabet.H
        );
        particleAlphabet.animateParticles();
      },
    };

    window.onload = particleAlphabet.init;
  });

  return <ChantTextCanvas></ChantTextCanvas>;
};

export default AnimatedTextLoader;

const ChantTextCanvas = styled.canvas`
  display: block;
`;
