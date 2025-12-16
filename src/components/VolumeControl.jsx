import React, { useState, useEffect, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Volume1, Volume2 } from "lucide-react";

const VolumeControl = ({
  volume = 0,
  setVolume,
  selectedDevice,
  sendCommand,
}) => {
  const [localVol, setLocalVol] = useState(Number(volume));
  const lastSentRef = useRef(localVol);

  // Update localVol if parent volume changes
  useEffect(() => {
    setLocalVol(Number(volume));
  }, [volume]);

  // Send volume command
  const sendVolumeCommand = (value) => {
    if (lastSentRef.current === value) return; // avoid duplicates
    lastSentRef.current = value;

    sendCommand?.({
      type: "vol",
      value,
    });
  };

  // Buttons
  const increase = () => {
    const newVol = Math.min(localVol + 10, 100);
    setLocalVol(newVol);
    setVolume?.(newVol);
    // sendVolumeCommand(newVol);
    sendCommand?.({ type: "vol_up" });
  };

  const decrease = () => {
    const newVol = Math.max(localVol - 10, 0);
    setLocalVol(newVol);
    setVolume?.(newVol);
    // sendVolumeCommand(newVol);
    sendCommand?.({ type: "vol_down" });
  };

  return (
    <div
      className="
        rounded-2xl bg-white/70 dark:bg-zinc-800/70 
        backdrop-blur-xl border border-white/20 dark:border-zinc-700
        shadow-lg dark:shadow-xl p-4 sm:p-6 mb-6 transition-all
      ">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Volume Control
      </h2>

      <div className="flex items-center gap-3 sm:gap-5">
        {/* Decrease Button */}
        <button
          onClick={decrease}
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center text-white shadow-md hover:shadow-lg active:scale-95 transition-all">
          <Volume1 className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slider */}
        <div className="flex-1 px-1">
          <Slider
            min={0}
            max={100}
            step={1}
            value={localVol}
            onChange={(v) => {
              setLocalVol(v);
              setVolume?.(v);
            }}
            onAfterChange={(v) => sendVolumeCommand(v)}
            trackStyle={{ backgroundColor: "#4F46E5", height: 12 }}
            railStyle={{
              backgroundColor: "rgba(148,163,184,0.35)",
              height: 12,
            }}
            handleStyle={{
              borderColor: "#6366F1",
              height: 18,
              width: 18,
              marginTop: -3,
              backgroundColor: "#fff",
            }}
          />
          <p className="text-center mt-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            {localVol}%
          </p>
        </div>

        {/* Increase Button */}
        <button
          onClick={increase}
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center text-white shadow-md hover:shadow-lg active:scale-95 transition-all">
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default VolumeControl;
