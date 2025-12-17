import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DeviceHeader from "../components/DeviceHeader";
import VolumeControl from "../components/VolumeControl";
import QuickActions from "../components/QuickActions";
import PaymentTesting from "../components/PaymentTesting";
import LanguageSelector from "../components/LanguageSelector";
import TestSounds from "../components/TestSounds";
import AmountModal from "../components/AmountModal";
import { useLocation } from "react-router-dom";
import useDeviceSocket from "../utils/useDeviceSocket";
const DevicePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  // Mock selected device
  const [device, setDevice] = useState(state?.device);
  const socket = useDeviceSocket({
    deviceId: device?.deviceId,
    onResponse: (response) => {
      console.log("response", response);

      const found = response.find((x) => x.deviceId === device?.deviceId);

      if (found) {
        setDevice(found);
      }
    },
  });

  useEffect(() => {
    if (device) {
      setVolume(device?.volume);
    }
  }, [device]);

  useEffect(() => {
    if (device && device.status !== "online") {
      // if (false) {
      navigate("/", { replace: true });
    }
  }, [device?.status]);

  // useDeviceSocket({
  //   onSnapshot: (data) => {
  //     const find = data.find((x) => x.deviceId == device.deviceId);
  //     setDevice(find);
  //   },
  // });

  const [volume, setVolume] = useState(50);
  const [language, setLanguage] = useState("en");
  const [amount, setAmount] = useState("100");
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [paymentAction, setPaymentAction] = useState(null);

  return (
    <>
      <DeviceHeader device={device} onBack={() => navigate("/")} />

      <VolumeControl
        volume={volume}
        setVolume={setVolume}
        selectedDevice={device}
        sendCommand={socket.sendCommand}
      />

      <QuickActions selectedDevice={device} sendCommand={socket.sendCommand} />

      <PaymentTesting
        selectedDevice={device}
        setShowAmountModal={setShowAmountModal}
        setPaymentAction={setPaymentAction}
      />

      <LanguageSelector
        language={language}
        setLanguage={setLanguage}
        selectedDevice={device}
        sendCommand={socket.sendCommand}
      />

      {/* <TestSounds selectedDevice={device} /> */}

      <AmountModal
        visible={showAmountModal}
        setVisible={setShowAmountModal}
        amount={amount}
        setAmount={setAmount}
        paymentAction={paymentAction}
        selectedDevice={device}
        sendCommand={socket.sendCommand}
      />
    </>
  );
};

export default DevicePage;
