/* eslint-disable react/no-unescaped-entities */
import topImg from "../Assets/About/section-title2.png"
import about1 from "../Assets/About/icon-01.png"
import about2 from "../Assets/About/icon-02.png"
import about3 from "../Assets/About/icon-03.png"
import { MdNavigateNext } from 'react-icons/md';
import Image from 'next/image';

const About = () => {
    const books = [
        {
            id: 1,
            icon: about2,
            title: "Trending",
            name: "Discover",
            des: "Explore a diverse array of student clubs and organizations that cater to your interests, passions, and hobbies. From sports and arts to tech and academics, there's a club for everyone."
        },
        {
            id: 2,
            icon: about1,
            title: "Featured",
            name: "Connect",
            des: "Forge lasting friendships and networking connections with fellow students who share your enthusiasm. Engage in lively discussions, collaborate on projects, and create memorable experiences together."
        },
        {
            id: 3,
            icon: about3,
            title: "Books",
            name: "Celebrate",
            des: "Stay updated on campus events, workshops, and discussions. From campus-wide festivals to intimate club meetings, there's always something exciting happening."
        }
    ]
    return (
        <div className='w-11/12 mt-8 mx-auto background-about'>
            <div className='flex pt-10 justify-center'>
                <Image src={topImg} alt="" />
            </div>
            <div>
                <h1 className='text-4xl mt-1 text-secondary text-center font-medium tracking-wider'>About Campus Vibes</h1>
                <p className='text-md text-info mt-4 tracking-wider w-7/12 mx-auto text-center'>Welcome to Campus Vibes, the heartbeat of our university community! We are more than just a website; we are your go-to platform for all things campus-related. Whether you're a new student looking to dive into the vibrant campus life or a seasoned academic explorer, Campus Vibes is your digital companion on this exciting journey.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-20 w-10/12 mx-auto'>
                {
                    books.map(book => <div key={book.id}>
                        <div className='ml-auto w-11/12'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <Image src={book.icon} alt="" />
                                </div>
                                <div className=''>
                                    <h1 className='tracking-wider text-3xl font-[500] text-secondary'>{book.name}</h1>
                                </div>
                            </div>
                            <p className='h-28 w-10/12 mt-4 text-left leading-relaxed tracking-wide text-[#7E7E7E]'>{book.des}</p>
                            <h1 className=' pb-20 text-sm font-semibold text-primary tracking-wider uppercase mt-8 flex items-center gap-3'>View More  <div className='text-primary text-xl flex items-center'> <h1><MdNavigateNext /></h1>
                                <h1 className='-ml-4 text-primary'><MdNavigateNext /></h1>
                            </div></h1>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default About;