import Link from "next/link";

const DesktopNav = () => {

    const paths = [
        {
            page: "Home",
            route: "/",
        },
        {
            page: "Events",
            route: "/",
        },
        {
            page: "News",
            route: "/",
        }
    ]
    return (
        <div>
            <nav className='w-10/12 mx-auto h-full flex items-center justify-evenly'>
                <div className='flex space-x-16 list-none items-center capitalize text-xl font-semibold'>
                    {
                        paths.map((path, index) =>
                            <Link
                                className='text-xl font-medium tracking-wider'
                                key={index + 1}
                                href={path?.route}
                            >
                                <h1 className='mr-4'> {path?.page}</h1>
                            </Link>)
                    }
                </div>
                <div className='text-2xl font-bold tracking-widest'>
                    <h1>Campus Vibes</h1>
                </div>
                <div className='flex space-x-16 font-medium items-center capitalize list-none text-xl'>
                    <Link href="/pcBuilder" className='tracking-wider cursor-pointer px-4 py-2 ml-3 rounded'>Club</Link>
                    <Link href="/pcBuilder" className='tracking-wider cursor-pointer px-4 py-2'>Forum</Link>
                    <Link href="/pcBuilder" className='tracking-wider cursor-pointer px-4 py-2'>Login</Link>
                </div>
            </nav>

        </div>
    );
};

export default DesktopNav;