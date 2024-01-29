import { UserConfig, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
function getConfigVite({ mode }: UserConfig) {
  const env = loadEnv(mode, process.cwd());

  const configVite: UserConfig = {
    plugins: [react()],
    server: {
      host: true,
      port: parseInt(env.VITE_APP_PORT) || 3000,
      watch: {
        usePolling: true,
      },
    },
  };

  return configVite;
}
export default defineConfig(getConfigVite);
