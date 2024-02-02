const Page = ({params}: {params: {lang: string}}) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl font-bold">Welcome at Vietclimb in</h1>
      <h1 className="text-4xl font-bold">Welcome at Vietclimb in {params.lang}</h1>
    </main>
  );
};

export default Page;
