import {NextPage} from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center ">
            <h1 className=" text-7xl">Welcome in the Admin bitch!</h1>
        </div>
    );
};

export default Page;
