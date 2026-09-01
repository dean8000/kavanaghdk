export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 116, 139, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl orb" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl orb-delayed" />

      <div className="relative flex items-center justify-center min-h-screen px-4">
        <h1 className="shimmer text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center">
          KAVANAGH.DK
        </h1>
      </div>
    </main>
  );
}
