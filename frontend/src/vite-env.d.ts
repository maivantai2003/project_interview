interface ImportMetaEnv {
  readonly VITE_URL_API: string;
  readonly VITE_APP_HUB_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}