import axios, { AxiosInstance } from 'axios';
import { inject, InjectionKey } from 'vue';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly api: AxiosInstance;
  }
}

export const apiUrl = 'https://httpstat.us/';

export const apiKey: InjectionKey<AxiosInstance> = Symbol('api-key');
export function createApi() {
  return axios.create({
    baseURL: apiUrl,
  });
}
export function useApi() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return inject(apiKey)!;
}
