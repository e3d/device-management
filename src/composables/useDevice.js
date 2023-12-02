// useDevice.js
import { reactive } from 'vue';

export function useDevice(initialData = {}) {
  debugger
  const device = reactive({
    id: initialData.id || '',
    purchaseDate: initialData.purchaseDate ? new Date(initialData.purchaseDate) : new Date(),
    manufacturer: initialData.manufacturer || '',
    contact: initialData.contact || '',
    model: initialData.model || '',
    components: initialData.components || [],
    department: initialData.department || '',
    manager: initialData.manager || '',
  });

  // Method to update device details
  const updateDevice = (newData) => {
    Object.assign(device, newData);
  };

  return { device, updateDevice };
}
