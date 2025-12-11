import React from "react";
import { X, PlayCircle } from "lucide-react";
import { createPortal } from "react-dom";

const PlayUrlModal = ({ open, onClose, url }) => {
  if (!open) return null;

  return createPortal(
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center 
        bg-black/40 backdrop-blur-sm animate-fadeIn
        p-4 sm:p-6
      ">
      <div
        className="
          w-full max-w-xs sm:max-w-sm md:max-w-md 
          p-5 sm:p-6 md:p-7 rounded-2xl 
          bg-white/80
          dark:bg-gradient-to-br dark:from-[#14161A] dark:to-[#1E2329]
          backdrop-blur-xl
          border border-white/40 dark:border-zinc-500/40 
          shadow-2xl dark:shadow-xl animate-scaleIn
        ">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
            Play Audio URL
          </h2>
          <button onClick={onClose}>
            <X
              size={20}
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
            />
          </button>
        </div>

        {/* URL Preview */}
        <div
          className="
        rounded-xl 
        bg-gradient-to-br from-indigo-500 to-indigo-700 
        p-3 sm:p-4 
        flex items-center gap-3 sm:gap-4 
        shadow-md
      ">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-md">
            <PlayCircle className="text-white" size={28} />
          </div>

          <div className="w-[60%] sm:w-auto">
            <p className="text-white text-xs sm:text-sm">Audio URL:</p>
            <p
              className="text-white/80 text-[10px] sm:text-xs 
   block overflow-hidden text-ellipsis whitespace-nowrap 
   max-w-[200px] sm:max-w-[260px]">
              {url || "No URL Entered"}
            </p>
          </div>
        </div>

        {/* Player */}
        {url && (
          <audio
            src={url}
            controls
            className="w-full mt-3 sm:mt-4 rounded-lg"
          />
        )}

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
          {/* Cancel */}
          <button
            onClick={onClose}
            className="col-start-2 
              py-2 sm:py-3 rounded-xl font-medium 
              bg-gray-200 dark:bg-zinc-700 
              text-gray-700 dark:text-gray-200
              hover:bg-gray-300 dark:hover:bg-zinc-600
              transition-all hover:scale-[1.02] active:scale-[0.96]
              text-sm sm:text-base
            ">
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PlayUrlModal;
