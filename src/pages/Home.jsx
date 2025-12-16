import React, { useEffect, useState } from "react";
import DeviceList from "../components/DeviceList";
import { Volume2 } from "lucide-react";
import useDeviceSocket from "../hooks/useDeviceSocket";

const Home = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // const mockDevices = [
    //   { id: "32A04E0C", name: "SoundBox-001", status: "online", hasQR: true },
    //   { id: "45B12F3A", name: "SoundBox-002", status: "online", hasQR: false },
    //   { id: "78C34D5E", name: "SoundBox-003", status: "offline", hasQR: true },
    // ];
    // setDevices(mockDevices);
  }, []);

  useDeviceSocket({
    onSnapshot: (data) => {
      setDevices(data);
    },
  });
  return (
    <>
      <div className="rounded-2xl mb-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-lg border border-white/20 dark:border-gray-700/30 px-6 py-7">
        <div className="flex items-center gap-4">
          {/* Responsive Icon Bubble */}
          <div
            className="
        rounded-lg flex items-center justify-center shadow-md
        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
        bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700
      ">
            <Volume2
              className="
          text-white
          w-5 h-5
          sm:w-6 sm:h-6
          md:w-7 md:h-7
        "
            />
          </div>

          {/* Title & Subtitle */}
          <div>
            <h1
              className="
          text-xl sm:text-2xl md:text-3xl 
          font-semibold text-gray-900 dark:text-gray-100
        ">
              SoundBox Control
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Test & Monitor Devices
            </p>
          </div>
        </div>
      </div>

      <DeviceList devices={devices} />
    </>
  );
};

export default Home;
