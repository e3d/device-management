<template>
  <div>
    <button @click="addNewDevice">Add New Device</button>

    <p>list below.</p>
    <Draggable v-model="devices" tag="ul" item-key="id">
      <template #item="{element, index}">
        <device-form 
            v-for="(device, index) in devices" :key="device.id"
          @update-device="updateDevice" />
      </template>
    </Draggable>
  </div>
</template>

<script>
import { useDeviceManagement } from '../../composables/useDeviceManagement';
import DeviceForm from './DeviceForm.vue';
import Draggable from 'vuedraggable';

export default {
  components: { DeviceForm, Draggable },
  setup() {
    const { devices, addDevice, deleteDevice } = useDeviceManagement();

    const newDeviceTemplate = () => ({
      id: '',
      purchaseDate: new Date().toISOString().substring(0, 10),
      manufacturer: '',
      // ... initialize other properties as needed
    });

    const addNewDevice = () => {
      devices.value.push(newDeviceTemplate());
    };

    const updateDevice = (updatedDevice) => {
      const index = devices.value.findIndex(d => d.id === updatedDevice.id);
      if (index !== -1) {
        devices.value[index] = updatedDevice;
      }
    };
    
    return { devices, addDevice, deleteDevice, addNewDevice, updateDevice };
 
  }
}
</script>
