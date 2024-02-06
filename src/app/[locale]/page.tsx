export default function Home({params}: {params: {locale: string}}) {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center ">
            <h1 className=" text-7xl">Welcome in the test bitch!{params.locale}</h1>
        </div>
    );
}
