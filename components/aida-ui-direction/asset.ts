// Prefix public assets with the deploy base path so images resolve correctly
// both locally (empty base) and on GitHub Pages (e.g. "/aida-system").
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
