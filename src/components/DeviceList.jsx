import { Volume2, Wifi, WifiOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeviceList = ({ devices }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-md border border-white/20 dark:border-gray-700/30 p-6 transition-all">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-5 tracking-tight">
        Available Devices
      </h2>

      <div className="space-y-4">
        {devices.map((device) => {
          const online = device.status === "online";

          return (
            <button
              key={device.id}
              onClick={() => navigate(`/device/${device.id}`)}
              className="w-full flex items-center justify-between p-4 rounded-2xl 
                bg-white/60 dark:bg-gray-800/50 backdrop-blur-md 
                border border-gray-200/60 dark:border-gray-700/40 
                shadow-sm hover:shadow-lg dark:hover:shadow-lg
                hover:border-indigo-400 dark:hover:border-indigo-500
                hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20
                transition-all duration-300 group text-left">
              {/* Left Side */}
              <div className="flex items-center gap-4">
                {/* Icon bubble */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-md transition-all 
                    ${
                      online
                        ? "bg-gradient-to-br from-green-500 to-green-600"
                        : "bg-gradient-to-br from-gray-400 to-gray-500"
                    }`}>
                  <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Text Info */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 md:text-lg">
                    {device.name}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    ID: {device.id}
                  </p>

                  {device.hasQR && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs rounded-md font-medium">
                      QR Enabled
                    </span>
                  )}
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-2">
                {online ? (
                  <>
                    <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                    <span className="text-xs md:text-sm font-medium text-green-600 dark:text-green-400">
                      Online
                    </span>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                    <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                      Offline
                    </span>
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DeviceList;
