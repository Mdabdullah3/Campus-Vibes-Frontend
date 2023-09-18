/* eslint-disable @next/next/no-img-element */
import React from 'react';
import icons1 from "../../Assets/Icons/icon-1.svg"
import icons2 from "../../Assets/Icons/icon-2.svg"
import icons3 from "../../Assets/Icons/icon-3.svg"
import Image from 'next/image';
import bg from "../../Assets/bg/bg-section-05.png"
const Swap = () => {
    const swap = [
        {
            id: 1,
            icons: icons1,
            name: "Members",
            number: 1500
        },
        {
            id: 2,
            icons: icons2,
            name: "Topics",
            number: 15004
        },
        {
            id: 3,
            icons: icons3,
            name: "Communities",
            number: 1340
        }
    ]
    return (
        <div className='background'>
            <div className='flex w-9/12 mx-auto py-28 items-center'>
                <div className='grid grid-cols-3 col-span-2 flex-1'>
                    {
                        swap.map(item => <>
                            <div className='flex gap-4 items-center'>
                                <div>
                                    <Image src={item?.icons} alt="icons" width={60} />
                                </div>
                                <div>
                                    <h1 className='text-xl tracking-wider font-semibold'>{item?.number}+</h1>
                                    <h1 className='text-lg tracking-wider'>{item?.name}</h1>
                                </div>
                            </div>
                        </>)
                    }
                </div>
                <div className='col-span-1'>
                    <button className='text-lg tracking-wider px-8 py-3 rounded-full bg-primary text-white'>Start a Discussion</button>
                </div>
            </div>
        </div>
    );
};

export default Swap;