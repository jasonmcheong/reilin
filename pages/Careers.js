/*
 ** TODO: Mobile styling is finished. Next steps: style tablet and desktop
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
`;

const Careers = () => (
    <div className="Careers">
        <Head>
            <style type="text/css">{globalStyles}</style>
            <link href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap" rel="stylesheet" />
        </Head>
        <div className="description">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
            <img src="https://via.placeholder.com/400" alt="" />
        </div>
        <div className="contain">
            <div className="career-list">
                <div className="career-post">
                    <h3>Legal Assisstant</h3>
                    <a href="#">View Posting</a>
                </div>
                <div className="career-post">
                    <h3>Legal Assisstant</h3>
                    <a href="#">View Posting</a>
                </div>
                <div className="career-post">
                    <h3>Legal Assisstant</h3>
                    <a href="#">View Posting</a>
                </div>
                <div className="career-post">
                    <h3>Legal Assisstant</h3>
                    <a href="#">View Posting</a>
                </div>
            </div>
        </div>

        <style jsx>{`
            .Careers {
                font-size: 1.375rem;
            }
            .description,
            .career-list {
                max-width: 85%;
                margin: 0 auto;
                position: relative;
            }
            .description:after {
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                width: 5px;
                height: 130px;
                background: #0071bd;
            }
            .description p {
                width: 80%;
                margin: 2rem auto;
            }
            .description img {
                display: block;
                width: 100%;
                margin: 0 auto;
            }
            .contain {
                background: #0071bd;
                margin-top: -100px;
                padding: 130px 0 30px 0;
            }
            .career-list {
                color: #fff;
            }
            .career-post {
                margin: 1.5rem 0;
            }
            .career-post h3 {
                font-size: 2rem;
                font-family: 'Vollkorn', serif;
                padding: 1.2rem 0;
                position: relative;
            }
            .career-post h3:after {
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                width: 84px;
                height: 5px;
                background: #fff;
            }
            .career-post a {
                color: #fff;
            }
        `}</style>
    </div>
);

export default Careers;
