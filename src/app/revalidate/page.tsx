import supabase from "~/utils/supabase";

export const revalidate = 60;	// revalidates every 60 seconds

export default async function Posts() {
	const { data } = await supabase.from("posts").select();
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
