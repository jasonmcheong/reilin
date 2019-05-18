import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = props => (
    <div>
        <Head>
            <title>Reilin</title>
        </Head>
        <Navbar />
        {props.children}
    </div>
);

export default Layout;
