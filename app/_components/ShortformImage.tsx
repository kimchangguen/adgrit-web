"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ShortformReachSection.module.css";

type Props = {
  src?: string;
  scene: string;
  sizes: string;
};

// Only the image error boundary needs client state; the section stays server-rendered.
export function ShortformImage({ src, scene, sizes }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.media}>
      <div className={styles.imageFallback}>
        <span>ADGRIT / FOOD FILM</span>
        <strong>{scene}</strong>
        <small>장면 준비 중</small>
      </div>
      {src && !failed && (
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          quality={75}
          className={styles.photo}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
