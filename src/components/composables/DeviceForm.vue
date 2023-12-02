<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="deviceDetails.id" placeholder="ID" />
      <input v-model="formattedDate" type="date" placeholder="Purchase Date" />
      <input v-model="deviceDetails.manufacturer" placeholder="Manufacturer" />
      <input v-model="deviceDetails.contact" placeholder="Contact" />
      <input v-model="deviceDetails.model" placeholder="Model" />
      <input v-model="deviceDetails.components" placeholder="Components" />
      <input v-model="deviceDetails.department" placeholder="Department" />
      <input v-model="deviceDetails.manager" placeholder="Manager" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { useDevice } from '../../composables/useDevice.js';
import { ref } from 'vue';

export default {
  props: {
    initialDeviceData: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['add-device'],
  setup(props, { emit }) {
    debugger
    const { device, updateDevice } = useDevice(props.initialDeviceData);
    const deviceDetails = ref(device);

    const formattedDate = formatDateToYYYYMMDD(deviceDetails.value.purchaseDate);

    const handleSubmit = () => {
      updateDevice(deviceDetails.value);
      emit('add-device', deviceDetails.value); 
      // Additional logic to handle form submission
      // For example, emit an event or call an API
    };

    return { deviceDetails, handleSubmit, formattedDate };
  }
}

function formatDateToYYYYMMDD(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
</script>
