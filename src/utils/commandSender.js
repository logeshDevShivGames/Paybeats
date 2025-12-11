export const sendCommand = (device, command) => {
  if (!device) return;

  console.log(`Sending to ${device.id}: ${command}`);
  alert(`Command sent: ${command}`);

  // MQTT publish will be added here later
  // mqtt.publish(`topic/${device.id}`, command);
};
