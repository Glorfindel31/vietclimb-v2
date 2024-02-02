export default function Home({params}: {params: {lang: string}}) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-screen h-96 bg-slate-300">a box</div>
      <div className="w-screen h-96 bg-slate-400">a box</div>
      <div className="w-screen h-96 bg-slate-900">a box</div>
    </main>
  );
}
