// useDeviceSocket.js
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_URL;

const useDeviceSocket = ({ deviceId, onResponse }) => {
  const socketRef = useRef(null);

  useEffect(() => {
    // 🔒 guard against multiple connections
    if (socketRef.current) return;

    const socket = io(SOCKET_SERVER_URL);
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    const handleSnapshot = (data) => {
      onResponse?.(data);
    };

    socket.on("devices:snapshot", handleSnapshot);

    return () => {
      socket.off("devices:snapshot", handleSnapshot);
      socket.disconnect();
      socketRef.current = null;
      console.log("Socket disconnected");
    };
  }, []); // runs once per mount

  const sendCommand = (cmd) => {
    if (!socketRef.current || !deviceId) return;

    socketRef.current.emit("device:cmd", {
      deviceId,
      cmd,
    });
  };

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

export default useDeviceSocket;
