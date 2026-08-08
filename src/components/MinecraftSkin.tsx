'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MinecraftSkinProps {
  skinFile: string;
  size?: number;
  className?: string;
}

export default function MinecraftSkin({ skinFile, size = 200, className = '' }: MinecraftSkinProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!skinFile || hasError) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = `/skins/${skinFile}`;
    
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = false;

      const isOldFormat = img.height === 32;

      // Base layer
      // Head
      ctx.drawImage(img, 8, 8, 8, 8, 4, 0, 8, 8);
      // Body
      ctx.drawImage(img, 20, 20, 8, 12, 4, 8, 8, 12);
      // Right Arm
      ctx.drawImage(img, 44, 20, 4, 12, 0, 8, 4, 12);
      // Right Leg
      ctx.drawImage(img, 4, 20, 4, 12, 4, 20, 4, 12);

      if (isOldFormat) {
        // Old 64x32 format: mirror right arm/leg for left side
        ctx.save();
        ctx.translate(16, 0);
        ctx.scale(-1, 1);
        // Left Arm = mirrored Right Arm
        ctx.drawImage(img, 44, 20, 4, 12, 0, 8, 4, 12);
        // Left Leg = mirrored Right Leg
        ctx.drawImage(img, 4, 20, 4, 12, 4, 20, 4, 12);
        ctx.restore();
      } else {
        // New 64x64 format: separate left arm/leg
        // Left Arm
        ctx.drawImage(img, 36, 52, 4, 12, 12, 8, 4, 12);
        // Left Leg
        ctx.drawImage(img, 20, 52, 4, 12, 8, 20, 4, 12);
      }

      // Overlay layer
      // Head overlay
      ctx.drawImage(img, 40, 8, 8, 8, 4, 0, 8, 8);

      if (!isOldFormat) {
        // Body overlay
        ctx.drawImage(img, 20, 36, 8, 12, 4, 8, 8, 12);
        // Right Arm overlay
        ctx.drawImage(img, 44, 36, 4, 12, 0, 8, 4, 12);
        // Left Arm overlay
        ctx.drawImage(img, 52, 52, 4, 12, 12, 8, 4, 12);
        // Right Leg overlay
        ctx.drawImage(img, 4, 36, 4, 12, 4, 20, 4, 12);
        // Left Leg overlay
        ctx.drawImage(img, 4, 52, 4, 12, 8, 20, 4, 12);
      }
    };

    img.onerror = () => {
      setHasError(true);
    };
  }, [skinFile, hasError]);

  const width = size / 2;

  if (!skinFile || hasError) {
    return (
      <div 
        style={{ width, height: size }} 
        className={`bg-gray-800 flex items-center justify-center text-gray-400 font-bold ${className}`}
      >
        ?
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      width={16}
      height={32}
      style={{
        width,
        height: size,
        imageRendering: 'pixelated'
      }}
      className={className}
    />
  );
}
