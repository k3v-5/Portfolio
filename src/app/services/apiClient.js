/**
 * Cliente HTTP unificado y desacoplado para servicios externos y endpoints API.
 * Proporciona manejo robusto de timeouts, señales de aborto y respuestas estandarizadas.
 */

const DEFAULT_TIMEOUT_MS = 8000;

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} ok
 * @property {any} data
 * @property {string|null} error
 * @property {number} status
 */

/**
 * Realiza una petición fetch con timeout seguro y captura controlada de errores.
 * @param {string} url
 * @param {RequestInit & { timeoutMs?: number }} [options]
 * @returns {Promise<ApiResponse>}
 */
export async function apiFetch(url, options = {}) {
  const { timeoutMs = DEFAULT_TIMEOUT_MS, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: options.signal || controller.signal,
    });

    clearTimeout(timeoutId);

    const contentType = response.headers.get("content-type") || "";
    let data = null;

    if (contentType.includes("application/json")) {
      data = await response.json().catch(() => null);
    } else {
      data = await response.text().catch(() => null);
    }

    return {
      ok: response.ok,
      status: response.status,
      data,
      error: response.ok ? null : (data?.error || `HTTP Error ${response.status}`),
    };
  } catch (error) {
    clearTimeout(timeoutId);
    const isTimeout = error.name === "AbortError";
    return {
      ok: false,
      status: isTimeout ? 408 : 500,
      data: null,
      error: isTimeout ? "Request timed out" : (error.message || "Network error"),
    };
  }
}
