import "~/app/globals.css";

export const metadata = {
	title: "Supabase Test",
	description: "Testing Supabase with server components",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
