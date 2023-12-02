// useDeviceManagement.js
import { ref } from 'vue';
import { useDevice } from './useDevice';

export function useDeviceManagement() {
  const devices = ref([]);

  const addDevice = (deviceData) => {
    const newDevice = useDevice(deviceData).device;
    devices.value.push(newDevice);
  };

  const deleteDevice = (deviceId) => {
    debugger
    const index = devices.value.findIndex(d => d.id === deviceId);
    if (index !== -1) {
      devices.value.splice(index, 1);
    }
  };

  return { devices, addDevice, deleteDevice };
}
