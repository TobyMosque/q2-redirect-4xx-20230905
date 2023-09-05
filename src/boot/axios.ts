import { AxiosError } from 'axios';
import { boot } from 'quasar/wrappers';
import { apiKey, createApi } from 'src/composables/api';

export default boot(({ app, router }) => {
  const api = createApi();
  app.provide(apiKey, api);

  api.interceptors.response.use(undefined, (err: AxiosError) => {
    if (err.response) {
      const { status } = err.response;
      if (status >= 400 && status <= 500) {
        return router.push('/http-status/' + status);
      }
    }
    return Promise.reject(err);
  });
});
