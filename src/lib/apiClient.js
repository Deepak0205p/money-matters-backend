export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || '';

export function getApiUrl(endpoint) {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  if (!BACKEND_URL) {
    return cleanEndpoint;
  }
  return `${BACKEND_URL.replace(/\/$/, '')}${cleanEndpoint}`;
}

export async function apiFetch(endpoint, options = {}) {
  const url = getApiUrl(endpoint);
  return fetch(url, options);
}
