export default defineNuxtRouteMiddleware((_to, _from) => {
  const localePath = useLocalePath();
  const user = useSupabaseUser();
  if (!user.value) {
    return navigateTo(localePath("/"), {
      replace: true
    });
  }
});
