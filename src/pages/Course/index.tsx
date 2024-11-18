import React from "react";
import { VideoPlayer } from "./components/VideoPlayer";

export default function Course() {
  return (
    <div className="w-full h-full bg-white rounded-2xl flex flex-row">
      <VideoPlayer />
    </div>
  );
}
