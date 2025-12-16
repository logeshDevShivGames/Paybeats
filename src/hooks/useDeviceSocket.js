import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_URL;

const useDeviceSocket = ({ onSnapshot }) => {
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize socket
    socketRef.current = io(SOCKET_SERVER_URL, {
      transports: ["websocket"],
    });

    // Connection established
    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current.id);
    });

    // Listen for snapshots
    const handleSnapshot = (data) => {
      console.log("📸 Snapshot received:", data);
      onSnapshot?.(data);
    };

    socketRef.current.on("devices:snapshot", handleSnapshot);

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.off("devices:snapshot", handleSnapshot);
        socketRef.current.disconnect();
        console.log("Socket disconnected");
      }
    };
  }, []);
};

export default useDeviceSocket;
