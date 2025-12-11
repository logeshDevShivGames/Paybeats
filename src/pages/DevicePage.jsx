import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DeviceHeader from "../components/DeviceHeader";
import VolumeControl from "../components/VolumeControl";
import QuickActions from "../components/QuickActions";
import PaymentTesting from "../components/PaymentTesting";
import LanguageSelector from "../components/LanguageSelector";
import TestSounds from "../components/TestSounds";
import AmountModal from "../components/AmountModal";

const DevicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock selected device
  const device = {
    id,
    name: `SoundBox-${id}`,
    status: "online",
  };

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
      />

      <QuickActions selectedDevice={device} />

      <PaymentTesting
        selectedDevice={device}
        setShowAmountModal={setShowAmountModal}
        setPaymentAction={setPaymentAction}
      />

      <LanguageSelector
        language={language}
        setLanguage={setLanguage}
        selectedDevice={device}
      />

      {/* <TestSounds selectedDevice={device} /> */}

      <AmountModal
        visible={showAmountModal}
        setVisible={setShowAmountModal}
        amount={amount}
        setAmount={setAmount}
        paymentAction={paymentAction}
        selectedDevice={device}
      />
    </>
  );
};

export default DevicePage;
