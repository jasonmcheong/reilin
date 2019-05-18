import Head from 'next/head';
import Navbar from '../components/Navbar';

const globalStyles = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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
    </div>
);

export default Layout;
