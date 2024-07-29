// import { ref } from 'vue';

// const alerts = ref([]);
// export const useAlert = () => {
//   // alert
//   const vAlert = (message, type = 'error') => {
//     alerts.value.push({ message, type });
//     setTimeout(() => {
//       alerts.value.shift();
//     }, 2000);
//   };
//   const vSuccess = (message) => vAlert(message, 'success');
//   return {
//     alerts,
//     vAlert,
//     vSuccess,
//   };
// };

import { useAlertStore } from '@/stores/alert';
import { storeToRefs } from 'pinia';

export const useAlert = () => {
  const { alerts } = storeToRefs(useAlertStore());
  console.log('alerts: ', alerts.value);
  const { vAlert, vSuccess } = useAlertStore();
  return {
    alerts,
    vAlert,
    vSuccess,
  };
};
