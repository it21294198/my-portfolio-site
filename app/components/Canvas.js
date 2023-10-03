"use client";
import React, { useRef, useEffect } from "react";
import Effect from "../classes/Effect";

const Canvas = () => {
  const refCanvas = useRef(null);

  useEffect(() => {
    const ctx = refCanvas.current.getContext("2d");
    refCanvas.current.width = window.innerWidth;
    refCanvas.current.height = window.innerHeight;

    // better for performance
    ctx.fillStyle = "black";
    const effect = new Effect(refCanvas.current);
    effect.handleParticles(ctx);

    let strokeColor = 0;
    function animate() {
      strokeColor++;
      if (strokeColor >= 359) {
        strokeColor = 0;
      }
      ctx.strokeStyle = `hsl(${strokeColor},100%,50%)`;
      ctx.clearRect(0, 0, refCanvas.current.width, refCanvas.current.height);
      effect.handleParticles(ctx);
      requestAnimationFrame(animate);
    }
    animate();
  }, [refCanvas]);

  return (
    <div>
      <canvas ref={refCanvas}></canvas>
    </div>
  );
};

export default Canvas;
