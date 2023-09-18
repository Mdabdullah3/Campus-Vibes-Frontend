import Image from 'next/image';
const Cta = () => {
    return (
        <div className="py-12 flex justify-center items-center w-full flex-col ">
            <div className="flex justify-between  items-stretch flex-row">
                <div className="flex items-center bg-primary justify-center">
                    <p className="transform flex flex-shrink-0 -rotate-90 text-3xl font-semibold tracking-wider leading-normal text-white">Campus Vibes</p>
                </div>
                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
                    <div>
                        <p className="text-3xl xl:text-4xl tracking-wider   ">Develop Your Soft Skills</p>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-md capitalize tracking-wider  leading-7 text-info pr-4">Engaging in our communities offers more than just acquiring additional knowledge; it also provides a valuable opportunity to hone effective communication skills when interacting with larger groups.</p>
                        <div className=' flex gap-10 items-center'>
                            <button className='mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-md tracking-wider border-2 border-primary transition hover:-translate-y-1 hover:bg-primary hover:text-white font-medium text-primary'>Join Forum</button>
                            <button className='mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-md tracking-wider border-2 border-primary transition hover:-translate-y-1 bg-primary text-white font-medium hover:text-primary hover:bg-transparent'>Join Club</button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block h-44 md:h-60 xl:h-72">
                    <Image className="hidden h-full xl:block" src="https://tf.quomodosoft.com/appie/wp-content/uploads/2022/02/img-1.png" alt="pexels-dmitry-zvolskiy-2082090-1" width={400} height={50} />
                    <Image className="xl:hidden h-full" src="https://tf.quomodosoft.com/appie/wp-content/uploads/2022/02/img-1.png" alt="pexels-dmitry-zvolskiy-2082090-1-1" width={400} height={50} />
                </div>
            </div>
            <div className="md:hidden mt-6 w-full">
                <Image src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png" alt="pexels-dmitry-zvolskiy-2082090-1" width={100} height={50} className="w-full" />
            </div>
        </div>
    );
};

export default Cta;