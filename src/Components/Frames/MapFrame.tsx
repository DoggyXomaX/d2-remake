import React, { useEffect, useState } from 'react';
import Sprites from 'url:../../Assets/Images/*.svg';

console.log('Sprites:', Sprites);

type TVector2 = {
  x: number;
  y: number;
};

type TSprite = {
  id: string;
  src: string;
  width: number;
  height: number;
  anchor: TVector2;
};

const createRandomSprite = (sprites: string[]): TSprite => {
  const id = `SpriteId_${Math.random() * 10000000}`;
  const spriteIndex = Math.floor(Math.random() * sprites.length);
  return {
    id,
    src: sprites[spriteIndex]!,
    width: 64,
    height: 32,
    anchor: { x: 0.5, y: 0.5 },
  };
};

const createRandomMap = (width: number, height: number): TSprite[][] => {
  const arr = new Array(height);

  for (let y = 0; y < height; y += 1) {
    arr[y] = new Array(height);
    for (let x = 0; x < width; x += 1) {
      arr[y][x] = createRandomSprite(Sprites);
    }
  }

  return arr;
};

export default function MapFrame() {
  const [map, setMap] = useState<TSprite[][]>([]);

  useEffect(() => {
    const randomMap = createRandomMap(48, 48);
    setMap(randomMap);
  }, []);

  return (
    <>
      <p>Map frame</p>
      {map.map((row, y) =>
        row.map((sprite, x) => (
          <p key={sprite.id}>
            object: {JSON.stringify(sprite, null, 2)}, x: {x} y: {y}
          </p>
        ))
      )}
    </>
  );
}
