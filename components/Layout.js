import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const globalStyles = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
`;

const Layout = (props) => (
    <div>
        <Head>
            <title>Reilin</title>
            <style type="text/css">{globalStyles}</style>
        </Head>
        <Navbar />
        {props.children}
        <Footer />
    </div>
);

export default Layout;
