<template>
  <div>
    <device-form @add-device="addDevice" @update-device="updateDevice" />
    <p>list below.</p>
    <Draggable v-model="devices" tag="ul" item-key="id">
      <template #item="{element, index}">
        <li :key="element.id">
          {{ element.id }} - {{ element.purchaseDate }} - {{ element.manufacturer }}
          <button @click="deleteDevice(element.id)">Delete</button>
        </li>
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

    const updateDevice = (updatedDevice) => {
      const index = devices.value.findIndex(d => d.id === updatedDevice.id);
      if (index !== -1) {
        devices.value[index] = updatedDevice;
      }
    };
    
    return { devices, addDevice, deleteDevice, updateDevice };
 
  }
}
</script>
