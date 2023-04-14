import supabase from "~/utils/supabase";

export const revalidate = 0;	// revalidates on every request

export default async function Posts() {
	const { data } = await supabase.from("posts").select();
	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
