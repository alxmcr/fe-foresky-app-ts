/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PORT: number;
  readonly VITE_API_KEY_WEATHER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
