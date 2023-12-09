import React from "react";
import { useProgress } from "@react-three/drei";

export const LoadingScreen3D = ({ started, onStarted }) => {
  const { progress } = useProgress();
  const background = "loadingBackground";

  if (progress === 100) {
    setTimeout(() => {
      onStarted();
    }, 1000);
  }

  if(started) return (<></>)

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-end"
    style={{ backgroundImage: `url('/assets/background/${background}.png')` }}>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-10 w-5/6">
        <div className="flex items-center justify-center mb-4">
          <span className="text-black font-semibold">Loading...</span>
        </div>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-center">
            <div className="leading-none text-black">
              {Math.round(progress)}%
            </div>
          </div>
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div
              style={{ width: `${progress}%` }}
              className="flex flex-col justify-center text-center text-white bg-blue-500 shadow-none whitespace-nowrap"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
