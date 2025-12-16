import { useEffect } from "react";
import { socket } from "../utils/socket";

const useVolumeSocket = ({ onVolumeUpdate }) => {
  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    const handleVolumeUpdate = (data) => {
      console.log("🔊 Volume update received:", data);
      onVolumeUpdate?.(data);
    };

    socket.on("devices:snapshot", handleVolumeUpdate);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("devices:snapshot", handleVolumeUpdate);
    };
  }, [onVolumeUpdate]);
};

export default useVolumeSocket;
