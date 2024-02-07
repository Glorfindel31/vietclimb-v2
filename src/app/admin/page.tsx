import {NextPage} from 'next';
import {options} from '@/api/auth/[...nextauth]/options';
import {getServerSession} from 'next-auth/next';
import {redirect} from 'next/navigation';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

interface Props {}

const Page: NextPage<Props> = async ({}) => {
    const session = await getServerSession(options);

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/admin');
    }
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center ">
            <h1 className=" text-7xl">Welcome in the Admin bitch!</h1>
            <Button asChild>
                <Link href="/api/auth/signout">SignOut</Link>
            </Button>
        </div>
    );
};

export default Page;
