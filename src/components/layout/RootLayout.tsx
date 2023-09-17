
import { ReactNode } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div>
                <header className=''>
                    <Navbar />
                </header>
                <section className='min-h-screen'>
                    {children}
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};

export default RootLayout;