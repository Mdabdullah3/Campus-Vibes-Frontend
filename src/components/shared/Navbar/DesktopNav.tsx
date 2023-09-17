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
                <div className='flex space-x-16 list-none font-medium items-center capitalize text-lg'>
                    {
                        paths.map((path, index) => <Link
                            className='text-xl font-medium tracking-wider'
                            key={index + 1}
                            href={path?.route}
                        >
                            <h1 className='mr-4'> {path?.page}</h1>
                        </Link>)
                    }
                </div>
                <div className=''>
                    <h1>Campus Vibes</h1>
                </div>
                <div className='flex space-x-16 font-medium items-center capitalize list-none text-lg'>
                    <Link href="/pcBuilder" className=' cursor-pointer text-sm px-4 py-2 build-pc text-white ml-3 rounded'>Club</Link>
                    <Link href="/pcBuilder" className=' cursor-pointer text-sm px-4 py-2 build-pc text-white ml-3 rounded'>Forum</Link>
                    <Link href="/pcBuilder" className=' cursor-pointer text-sm px-4 py-2 build-pc text-white ml-3 rounded'>Login</Link>
                </div>
            </nav>

        </div>
    );
};

export default DesktopNav;