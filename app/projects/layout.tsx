export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-800 via-blue-400/10 to-zinc-900 ">
			{children}
		</div>
	);
}
