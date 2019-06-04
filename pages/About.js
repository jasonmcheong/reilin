/*
 ** TODO: Mobile styling is finished. Next steps: style tablet and desktop view
 */
import Head from 'next/head';

const globalStyles = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
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
    p, a {
        font-size: 1.125rem;
    }
`;

const About = () => (
    <div className="About">
        <Head>
            <style type="text/css">{globalStyles}</style>
            <link href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap" rel="stylesheet" />
        </Head>
        <h1>About</h1>
        <div className="intro">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </div>
        <div className="content">
            <div className="section">
                <h2>Your future is our focus.</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit non erat eu sodales.
                    Proin maximus commodo erat eget scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Duis efficitur nulla sed erat congue, vitae ultricies tortor
                    lobortis. Praesent sagittis laoreet eros, tincidunt congue quam sollicitudin vel. Donec erat lacus,
                    tempor quis ultrices at, luctus et augue. Morbi rutrum tellus at blandit vestibulum. Cras tristique
                    laoreet tempus. Ut egestas turpis orci, eu tempor dui vulputate et. Etiam ultrices, mauris quis
                    suscipit euismod, elit diam semper nibh, vitae bibendum lorem erat a sem. Fusce sed maximus ligula.
                    Nullam tristique, metus sagittis commodo gravida, nunc justo posuere justo, sagittis dapibus sapien
                    erat et magna. Nam nec enim ut ligula vestibulum tincidunt. Quisque porta nunc odio, quis dignissim
                    ipsum porttitor sit amet. Mauris nec sodales risus, ac viverra purus.
                </p>
            </div>
            <div className="section">
                <h2>Our proud beginning.</h2>
                <p>
                    Vestibulum vel euismod neque, sit amet blandit felis. Nullam fermentum sodales rhoncus. Aenean
                    fermentum risus sed leo blandit sagittis. Donec porttitor magna in pellentesque tristique. Quisque
                    at nibh vestibulum, rhoncus nibh a, aliquet nulla. Vestibulum sed ex at ipsum iaculis blandit a ut
                    sem. Curabitur accumsan diam a fringilla porttitor. Quisque vestibulum quam vestibulum sagittis
                    cursus. Suspendisse augue ipsum, aliquet quis porta vel, blandit et leo. Pellentesque in sapien
                    diam. Vivamus finibus nisl vitae convallis porttitor. Vivamus luctus odio non augue aliquet, ut
                    dignissim ex tincidunt. Morbi tortor augue, pellentesque ut malesuada eu, ultrices vel nulla.
                    Phasellus facilisis mi sit amet dignissim faucibus. Maecenas vitae arcu augue. Praesent id ligula ac
                    nulla eleifend aliquet ut in quam.
                </p>
            </div>
        </div>

        <style jsx>{`
            .intro {
                padding: 3rem 0;
                background: #1a5c8c;
            }
            .intro p {
                color: #fff;
                width: 85%;
                margin: 0 auto;
                padding: 1rem 1.5rem;
                position: relative;
            }
            .intro p:after {
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                width: 5px;
                height: 100%;
                background: #fff;
            }
            .content {
                padding: 0 1.8rem;
            }
            .section {
                margin: 1.8rem 0;
            }
            .section h2 {
                margin-bottom: 1rem;
            }
        `}</style>
    </div>
);

export default About;
