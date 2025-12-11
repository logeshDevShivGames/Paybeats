import { Volume2, VolumeX } from "lucide-react";
import { sendCommand } from "../utils/commandSender";

const VolumeControl = ({ volume, setVolume, selectedDevice }) => {
  const increase = () => {
    const newVol = Math.min(volume + 10, 100);
    setVolume(newVol);
    sendCommand(selectedDevice, "volume:up");
  };

  const decrease = () => {
    const newVol = Math.max(volume - 10, 0);
    setVolume(newVol);
    sendCommand(selectedDevice, "volume:down");
  };

  return (
    <div
      className="
        rounded-2xl bg-white/70 dark:bg-zinc-900/70 
        backdrop-blur-xl border border-white/20 dark:border-zinc-700
        shadow-lg dark:shadow-xl p-4 sm:p-6 mb-6 transition-all
      ">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-5 tracking-tight">
        Volume Control
      </h2>

      <div className="flex items-center gap-3 sm:gap-5">
        {/* Decrease Button */}
        <button
          onClick={decrease}
          className="
            w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center 
            bg-gradient-to-br from-indigo-500 to-indigo-600 
            dark:from-indigo-600 dark:to-indigo-700
            text-white shadow-md hover:shadow-lg active:scale-95 
            transition-all duration-200
          ">
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slider + Percentage */}
        <div className="flex-1">
          {/* Slider track (CLICKABLE) */}
          <div
            className="
      relative h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 
      rounded-full overflow-hidden shadow-inner cursor-pointer
    "
            onClick={(e) => {
              const rect = e.target.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newVolume = Math.round((clickX / rect.width) * 100);

              if (newVolume > volume) {
                sendCommand(selectedDevice, "volume:up");
              } else if (newVolume < volume) {
                sendCommand(selectedDevice, "volume:down");
              }

              setVolume(newVolume);
            }}>
            {/* Slider Fill */}
            <div
              className="
        absolute left-0 top-0 h-full 
        bg-gradient-to-r from-indigo-500 to-indigo-600
        dark:from-indigo-400 dark:to-indigo-500
        transition-all duration-300
      "
              style={{ width: `${volume}%` }}
            />

            {/* Glow */}
            <div
              className="
        absolute left-0 top-0 h-full 
        bg-indigo-400/30 blur-lg sm:blur-xl pointer-events-none
        transition-all
      "
              style={{ width: `${volume}%` }}
            />
          </div>

          <p className="text-center mt-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            {volume}%
          </p>
        </div>

        {/* Increase Button */}
        <button
          onClick={increase}
          className="
            w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center 
            bg-gradient-to-br from-indigo-500 to-indigo-600 
            dark:from-indigo-600 dark:to-indigo-700
            text-white shadow-md hover:shadow-lg active:scale-95 
            transition-all duration-200
          ">
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default VolumeControl;
