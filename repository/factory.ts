import type { $Fetch, NitroFetchOptions } from "nitropack";
import signOut from "@/utils/sign-out";

class FetchFactory<_T> {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  async call<T>(
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    url: string,
    data?: object,
    fetchOptions?: NitroFetchOptions<"json">
  ): Promise<T> {
    return this.$fetch<T>(url, {
      method,
      body: data ?? undefined,
      ...fetchOptions,
      async onResponseError({ response }) {
        if (response.status === 401) {
          await handleUnauthorized();
        }
      }
    });
  }
}

async function handleUnauthorized() {
  await signOut();
}

export default FetchFactory;
