export default async function () {
  const localePath = useLocalePath();
  const supabase = useSupabaseClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    return;
  }

  navigateTo(localePath("/"), { replace: true });
}
