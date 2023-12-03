<template>
  <div>
    <input v-model="localDevice.id" @input="emitUpdate" placeholder="ID" />
    <input v-model="formattedDate" @input="emitUpdate" type="date" placeholder="Purchase Date" />
    <input v-model="localDevice.manufacturer" @input="emitUpdate" placeholder="Manufacturer" />
    <input v-model="localDevice.contact" @input="emitUpdate" placeholder="Contact" />
    <input v-model="localDevice.model" @input="emitUpdate" placeholder="Model" />
    <input v-model="localDevice.components" @input="emitUpdate" placeholder="Components" />
    <input v-model="localDevice.department" @input="emitUpdate" placeholder="Department" />
    <input v-model="localDevice.manager" @input="emitUpdate" placeholder="Manager" />
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  props: {
    device: {
      type: Object,
      required: true
    }
  },
  emits: ['update-device'],
  setup(props, { emit }) {
    debugger
    const localDevice = ref({ ...props.device });

    // Sync localDevice with the prop in case the external device changes   
    watchEffect(() => {
      Object.assign(localDevice.value, props.device);
    });

    const emitUpdate = () => {
      emit('update-device', localDevice.value);
    };

    const formattedDate = formatDateToYYYYMMDD(localDevice.value.purchaseDate);
      

    return { localDevice, emitUpdate, formattedDate };
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
