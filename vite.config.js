import react from "@vitejs/plugin-react";

export default {
  optimizeDeps: {
    include: ['react', 'react-dom/client']
  },
  plugins: [react()],
};
