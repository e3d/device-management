<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="localDevice.id" @input="emitUpdate" placeholder="ID" />
      <input v-model="formattedDate" @input="emitUpdate" type="date" placeholder="Purchase Date" />
      <input v-model="localDevice.manufacturer" @input="emitUpdate" placeholder="Manufacturer" />
      <input v-model="localDevice.contact" @input="emitUpdate" placeholder="Contact" />
      <input v-model="localDevice.model" @input="emitUpdate" placeholder="Model" />
      <input v-model="localDevice.components" @input="emitUpdate" placeholder="Components" />
      <input v-model="localDevice.department" @input="emitUpdate" placeholder="Department" />
      <input v-model="localDevice.manager" @input="emitUpdate" placeholder="Manager" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { useDevice } from '../../composables/useDevice.js';
import { ref, watch, watchEffect } from 'vue';

export default {
  props: {
    initialDeviceData: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  emits: ['update-device'],
  setup(props, { emit }) {
    debugger
    const localDevice = ref({ ...props.device });

    watchEffect(() => {
      Object.assign(localDevice.value, props.device);
    });

    const emitUpdate = () => {
      emit('update-device', localDevice.value);
    };

    const formattedDate = formatDateToYYYYMMDD(localDevice.value.purchaseDate);
    
    const handleSubmit = () => {
      updateDevice(localDevice.value);
      emit('add-device', localDevice.value); 
      // Additional logic to handle form submission
      // For example, emit an event or call an API
    };

    return { localDevice, emitUpdate, handleSubmit, formattedDate };
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
