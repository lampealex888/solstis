"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-[600px] py-12 space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Under Construction
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We&apos;re working on something amazing. Check back soon.
          </p>
        </div>
        {(isClient && (
          <div className="w-full max-w-3xl aspect-video overflow-hidden rounded-lg">
            <ReactPlayer
              url={"https://youtu.be/y1cAktwx_bY"}
              controls={true}
              pip={true}
              width="100%"
              height="100%"
            />
          </div>
        )) ||
          null}
      </div>
    </main>
  );
}
