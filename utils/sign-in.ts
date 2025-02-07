export default async function () {
  const runtimeConfig = useRuntimeConfig();
  const supabase = useSupabaseClient();
  const localePath = useLocalePath();

  const url = runtimeConfig.public.BASE_URL === "localhost:3000" ? "http://localhost:3000" : `https://${runtimeConfig.public.BASE_URL}`;

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${url}${localePath("/confirm")}`
    }
  });
  if (error) console.log(error);
}
