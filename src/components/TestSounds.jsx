import { Play } from "lucide-react";
import { sendCommand } from "../utils/commandSender";

const sounds = [
  "power_on",
  "network_connected",
  "server_connected",
  "payment_received",
];

const TestSounds = ({ selectedDevice }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">Test Sounds</h2>

    <div className="grid grid-cols-2 gap-3">
      {sounds.map((s) => (
        <button
          key={s}
          onClick={() => sendCommand(selectedDevice, `test:${s}`)}
          className="p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 font-medium">
          <Play size={18} />
          {s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </button>
      ))}
    </div>
  </div>
);

export default TestSounds;
