import type { NitroFetchOptions } from "nitropack";
import ThreadsModule from "@/repository/modules/threads";

interface IApiInstance {
  threads: ThreadsModule;
}

export default defineNuxtPlugin({
  name: "api",
  async setup() {
    const runtimeConfig = useRuntimeConfig();

    const fetchOptions: NitroFetchOptions<"json"> = {
      baseURL: `/service/api/${runtimeConfig.public.API_VERSION || "v1"}`
    };

    // Using global $fetch since the one from oftech does not support auto adding base URL
    const apiFetcher = $fetch.create(fetchOptions);

    const modules: IApiInstance = {
      threads: new ThreadsModule(apiFetcher)
    };

    return {
      provide: {
        api: modules
      }
    };
  }
});
