import { ChevronLeft, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeviceHeader = ({ device }) => {
  const navigate = useNavigate();

  const online = device.status === "online";

  return (
    <div
      className="
        rounded-2xl bg-white/70 dark:bg-zinc-800/70 
        backdrop-blur-xl border border-white/20 dark:border-zinc-700
        shadow-lg dark:shadow-xl p-4 sm:p-6 mb-6 transition-all
      ">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="
          flex items-center gap-1 sm:gap-2 
          text-indigo-600 dark:text-indigo-400 
          hover:text-indigo-700 dark:hover:text-indigo-300
          mb-3 sm:mb-5 
          text-sm sm:text-base md:text-xl 
          font-medium 
          transition-colors
        ">
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
        Back to Devices
      </button>

      {/* Device Info */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Icon */}
        <div
          className={`
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
            rounded-xl flex items-center justify-center 
            shadow-md transition-all 
            ${
              online
                ? "bg-gradient-to-br from-green-500 to-green-600"
                : "bg-gradient-to-br from-gray-400 to-gray-500"
            }
          `}>
          <Volume2 className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
            {device.device_kind}
          </h1>

          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 mt-1">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              ID: {device.deviceId}
            </p>

            {device.hasQR && (
              <span
                className="
                px-2 py-0.5 
                bg-indigo-100 dark:bg-indigo-900/40 
                text-indigo-700 dark:text-indigo-300 
                text-xs sm:text-sm 
                rounded-md font-medium
              ">
                QR Enabled
              </span>
            )}

            <span
              className={`
                px-2 py-0.5 
                text-xs sm:text-sm 
                rounded-md font-medium
                ${
                  online
                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                    : "bg-gray-200 text-gray-600 dark:bg-gray-700/40 dark:text-gray-400"
                }
              `}>
              {online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceHeader;
