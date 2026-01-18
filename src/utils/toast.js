import toast from 'react-hot-toast';

export const showToast = {
  success: (message) =>
    toast.success(message, {
      duration: 3000,
      position: 'top-right',
    }),

  error: (message) =>
    toast.error(message, {
      duration: 4000,
      position: 'top-right',
    }),

  loading: (message) =>
    toast.loading(message, {
      position: 'top-right',
    }),

  dismiss: (toastId) => toast.dismiss(toastId),
};
