/*
 ** TODO: Mobile styling is finished. Next steps: style tablet and desktop view
 */
import Fetch from 'isomorphic-unfetch';

import Head from 'next/head';

import Layout from '../components/Layout';

const globalStyles = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: Tahoma;
    }
    h1, h2, h3, h4, h5 {
        font-family: 'Vollkorn', serif;
    }
    h1 {
        font-size: 2.625rem;
    }
    h2 {
        font-size: 2.25rem;
    }
    h3 {
        font-size: 1.875rem;
    }
    h4 {
        font-size: 1.5rem;
    }
    h5 {
        font-size: 1.25rem;
    }
    p, a, li {
        font-size: 1.125rem;
    }
`;

const Index = () => (
    <div className="Home">
        <Head>
            <style type="text/css">{globalStyles}</style>
            <link href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap" rel="stylesheet" />
        </Head>
        <Layout>
            <h1>Welcome to Reilin</h1>
            <div className="About">
                <div className="img-overlap">
                    <img src="https://via.placeholder.com/200x300" alt="" />
                    <img src="https://via.placeholder.com/200x300" alt="" />
                </div>
                <div className="info">
                    <div className="header">
                        <span>who we are</span>
                        <h5>operational expertise with focused assets</h5>
                    </div>
                    <p>
                        Reilin Energy Inc is a new player in Alberta's energy industry, with focus on efficient
                        production of natural gas and crude oil. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="link">
                        <a href="#">More about --></a>
                    </div>
                </div>
            </div>
            <div className="Operations">
                <img src="https://via.placeholder.com/200x250" alt="" className="hero-img" />
                <div className="operation-list">
                    <h5>operational expertise with focused assets</h5>
                    <div className="operation">
                        <img src="https://via.placeholder.com/100" alt="" />
                        <p>
                            Reilin Energy Inc is a new player in Alberta's energy industry, with focus on efficient
                            production of natural gas and crude oil
                        </p>
                    </div>
                    <div className="operation">
                        <img src="https://via.placeholder.com/100" alt="" />
                        <p>
                            Reilin Energy Inc is a new player in Alberta's energy industry, with focus on efficient
                            production of natural gas and crude oil
                        </p>
                    </div>
                    <div className="operation">
                        <img src="https://via.placeholder.com/100" alt="" />
                        <p>
                            Reilin Energy Inc is a new player in Alberta's energy industry, with focus on efficient
                            production of natural gas and crude oil
                        </p>
                    </div>
                </div>
            </div>
            <div className="Investors">
                <div className="img-overlap">
                    <img src="https://via.placeholder.com/200x300" alt="" />
                    <img src="https://via.placeholder.com/200x300" alt="" />
                </div>
                <div className="info">
                    <h5>operational expertise with focused assets</h5>
                    <p>
                        Reilin Energy Inc is a new player in Alberta's energy industry, with focus on efficient
                        production of natural gas and crude oil. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="link">
                        <a href="#">More about --></a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                h5 {
                    text-transform: uppercase;
                }
                .About,
                .Investors {
                    width: 85%;
                    margin: 0 auto;
                }
                .img-overlap {
                    position: relative;
                    width: 100%;
                    margin: 2rem auto;
                    height: 350px;
                }
                .img-overlap img {
                    position: absolute;
                    content: '';
                }
                .img-overlap img:first-child {
                    z-index: 1;
                    left: 0;
                    top: 0;
                }
                .img-overlap img:last-child {
                    z-index: -1;
                    top: 50px;
                    left: 70px;
                }
                .header {
                    padding-left: 1rem;
                    position: relative;
                }
                .header:after {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    width: 5px;
                    height: 100%;
                    background: #0071bd;
                }
                .header span {
                    color: #0071bd;
                    font-weight: bold;
                    font-size: 1.25rem;
                }
                .info {
                    margin: 2rem 0;
                }
                .info p {
                    margin: 1rem 0;
                }
                .link {
                    display: flex;
                    justify-content: flex-end;
                }
                .link a {
                    color: #0071bd;
                    font-weight: bold;
                }
                .Operations {
                    color: #fff;
                    background: #0071bd;
                    padding-bottom: 2rem;
                }
                .hero-img {
                    width: 100%;
                }
                .operation-list {
                    width: 85%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                }
                .operation-list h5 {
                    margin-top: 2rem;
                    text-align: center;
                }
                .operation {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 1rem 0;
                }
                .operation p {
                    margin-top: 1rem;
                }
            `}</style>
        </Layout>
    </div>
);

/* Fetch URL of content when ready */
// Index.getInitialProps = async function() {
//     const res = await fetch();
//     const data = await res.json();

//     return {
//         data: data,
//     };
// };

export default Index;
