<template>
  <div>
    <device-form @add-device="addDevice" />
    <p>list below.</p>
    <ul>
      <li v-for="(device, index) in devices" :key="device.id"
          draggable="true"
          @dragstart="dragStart(index)"
          @dragover.prevent
          @drop="drop(index)">
        {{ device.id }} - {{ device.manufacturer }}
        <button @click="deleteDevice(device.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useDeviceManagement } from '../../composables/useDeviceManagement';
import DeviceForm from './DeviceForm.vue';

export default {
  components: { DeviceForm },
  setup() {
    const { devices, addDevice, deleteDevice } = useDeviceManagement();
    
    let draggedIndex = null;

    const dragStart = (index) => {
      draggedIndex = index;
    };

    const drop = (index) => {
      const draggedDevice = devices.value.splice(draggedIndex, 1)[0];
      devices.value.splice(index, 0, draggedDevice);
    };

    return { devices, addDevice, deleteDevice, dragStart, drop };
 
  }
}
</script>
