import { RotateCcw, Play } from "lucide-react";
import { sendCommand } from "../utils/commandSender";
import PlayUrlModal from "./PlayUrlModal";
import React, { useState } from "react";

const QuickActions = ({ selectedDevice }) => {
  const handleReplay = () => sendCommand(selectedDevice, "replay");

  const handleURL = () => {
    setAudioUrl(
      "https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/826e482389c32b91a018438d75032fb2/128a811678cd078e2ebf1ae98be81df8/STREAMING-cash-register-opening-smartsound-fx-1-00-02.mp3"
    );
    setOpenModal(true);
  };

  const [openModal, setOpenModal] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  return (
    <div
      className="
        rounded-2xl bg-white/70 dark:bg-zinc-900/70 
        backdrop-blur-xl border border-white/20 dark:border-zinc-700
        shadow-lg dark:shadow-xl p-4 sm:p-6 mb-6 transition-all
      ">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Replay Button */}
        <button
          onClick={handleReplay}
          className="
            group p-3 sm:p-4 rounded-xl 
            bg-gradient-to-br from-violet-600 to-purple-600
            hover:from-violet-500 hover:to-purple-500
            text-white font-medium 
            text-xs sm:text-sm md:text-base
            shadow-md
            flex items-center justify-center gap-1.5 sm:gap-2
            active:scale-95 transition-all
          ">
          <RotateCcw
            className="
              w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
              group-hover:-rotate-45 transition-all
            "
          />
          Replay
        </button>

        {/* Play URL Button */}
        <button
          onClick={handleURL}
          className="
            group p-3 sm:p-4 rounded-xl 
            bg-gradient-to-br from-indigo-600 to-blue-600
            hover:from-indigo-500 hover:to-blue-500
            text-white font-medium 
            text-xs sm:text-sm md:text-base
            shadow-md
            flex items-center justify-center gap-1.5 sm:gap-2
            active:scale-95 transition-all
          ">
          <Play
            className="
              w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
              group-hover:scale-110 transition
            "
          />
          Play URL
        </button>
      </div>

      <PlayUrlModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        url={audioUrl}
      />
    </div>
  );
};

export default QuickActions;
