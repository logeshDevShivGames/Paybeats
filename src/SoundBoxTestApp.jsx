import React, { useState, useEffect } from "react";

import DeviceList from "./components/DeviceList";
import DeviceHeader from "./components/DeviceHeader";
import VolumeControl from "./components/VolumeControl";
import QuickActions from "./components/QuickActions";
import PaymentTesting from "./components/PaymentTesting";
import LanguageSelector from "./components/LanguageSelector";
import TestSounds from "./components/TestSounds";
import AmountModal from "./components/AmountModal";
import { Volume2 } from "lucide-react";

const SoundBoxTestApp = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [volume, setVolume] = useState(50);
  const [language, setLanguage] = useState("en");
  const [amount, setAmount] = useState("100");
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [paymentAction, setPaymentAction] = useState(null);

  useEffect(() => {
    const mockDevices = [
      { id: "32A04E0C", name: "SoundBox-001", status: "online", hasQR: true },
      { id: "45B12F3A", name: "SoundBox-002", status: "online", hasQR: false },
      { id: "78C34D5E", name: "SoundBox-003", status: "offline", hasQR: true },
    ];
    setDevices(mockDevices);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6FAFF] to-[#ECF2F9] dark:from-[#636874] dark:to-[#33373d] p-6">
      {/* Centered Layout */}
      <div className="max-w-4xl mx-auto">
        {/* Main Header Card */}

        {/* If no device is selected → Show device list */}
        {!selectedDevice && (
          <>
            <div className="rounded-2xl mb-4  bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-lg border border-white/20 dark:border-gray-700/30 px-6 py-7 transition-all ">
              <div className="flex items-center gap-4 ">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 flex items-center justify-center shadow-md">
                  <Volume2 className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                    SoundBox Control
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    Test & Monitor Devices
                  </p>
                </div>
              </div>
            </div>
            <DeviceList devices={devices} onSelect={setSelectedDevice} />
          </>
        )}

        {/* If device selected → Show full feature panel */}
        {selectedDevice && (
          <>
            <DeviceHeader
              device={selectedDevice}
              onBack={() => setSelectedDevice(null)}
            />

            <VolumeControl
              volume={volume}
              setVolume={setVolume}
              selectedDevice={selectedDevice}
            />

            <QuickActions selectedDevice={selectedDevice} />

            <PaymentTesting
              selectedDevice={selectedDevice}
              setShowAmountModal={setShowAmountModal}
              setPaymentAction={setPaymentAction}
            />

            <LanguageSelector
              language={language}
              setLanguage={setLanguage}
              selectedDevice={selectedDevice}
            />

            <TestSounds selectedDevice={selectedDevice} />

            <AmountModal
              visible={showAmountModal}
              setVisible={setShowAmountModal}
              amount={amount}
              setAmount={setAmount}
              paymentAction={paymentAction}
              selectedDevice={selectedDevice}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SoundBoxTestApp;
