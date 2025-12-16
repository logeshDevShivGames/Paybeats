import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_URL;

const DeviceSocket = ({ deviceId, onResponse }) => {
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize socket
    socketRef.current = io(SOCKET_SERVER_URL);

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current.id);
    });

    // // Optional: Listen for responses from server
    // socketRef.current.on("device:response", (data) => {
    //   console.log("Server response:", data);
    //   onResponse?.(data);
    // });

    return () => {
      console.log("Disconnecting socket...");
      socketRef.current.disconnect();
    };
  }, []);

  // Helper to send commands
  const sendCommand = (cmd) => {
    if (!socketRef.current || !deviceId) {
      console.warn("Socket not connected or deviceId missing");
      return;
    }

    socketRef.current.emit("device:cmd", {
      deviceId,
      cmd,
    });
  };

  // Expose commands
  return {
    sendCommand,
    changeLanguage: (lang) => sendCommand({ type: "language", lang }),
    volumeUp: () => sendCommand({ type: "vol_up" }),
    volumeDown: () => sendCommand({ type: "vol_down" }),
    setVolume: (value) => sendCommand({ type: "vol", value }),
    replayNotification: () => sendCommand({ type: "replay" }),
    payment: (amount, amount_url) =>
      sendCommand({ type: "payment", amount, amount_url }),
  };
};

export default DeviceSocket;
