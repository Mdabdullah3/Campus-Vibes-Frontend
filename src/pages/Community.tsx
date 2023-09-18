/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Marquee from 'react-fast-marquee';

const Community = () => {
    const community = [
        {
            id: 1,
            name: "Computer Club",
            btn: "/computer club",
            member: 14,
        },
        {
            id: 2,
            name: "Social Service Club",
            btn: "/computer club",
            member: 21,
        },
        {
            id: 3,
            name: "Environment Club",
            btn: "/computer club",
            member: 24,
        },
        {
            id: 4,
            name: "The Innovation Club",
            btn: "/computer club",
            member: 53,
        },
        {
            id: 5,
            name: "Entrepreneurship Forum",
            btn: "/computer club",
            member: 20,
        },
        {
            id: 6,
            name: "Wellness Health Forum",
            btn: "/computer club",
            member: 17,
        },
        {
            id: 7,
            name: "MusicMosaic Club",
            btn: "/computer club",
            member: 14,
        }
    ]
    return (
        <div className='mt-36'>
            <h1 className='text-2xl tracking-wider text-center font-semibold'>
                Featured CLub & Forum
            </h1>
            <p className='text-info text-sm text-center md:w-5/12 w-11/12 tracking-wider mt-2 mb-14 mx-auto'> The sustainability hub on Campus Vibes. Engage in eco-conscious dialogues, tackle environmental challenges, and explore sustainable solutions. Join hands with fellow green enthusiasts to make our campus and the world a greener place</p>
            <div className='w-11/12 mx-auto h-auto'>
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {community.map((item, index) => (
                        <div className="skill--box relative border-primary/40 border-t-4" key={item.id} >
                            <h1 className='absolute text-[140px] font-semibold text-primary/10'>{index}</h1>
                            <h3 className='z-10 text-lg light-effect tracking-wider font-semibold'>
                                {item.name}
                            </h3>
                            <div className='z-10'>
                                <h1 className='mt-1 text-lg tracking-wider text-info'>Member's - {item?.member}</h1>
                                <button className='mt-3 bg-primary text-sm tracking-wider text-white px-4 py-2'>Explore Now</button>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

        </div>
    );
};

export default Community;