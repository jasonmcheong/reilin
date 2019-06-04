import Head from 'next/head';

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

const Operations = () => (
    <div className="Operations">
        <Head>
            <style type="text/css">{globalStyles}</style>
            <link href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap" rel="stylesheet" />
        </Head>
        <div className="header">
            <h2>Overview</h2>
            <p>
                Ogilvie LLP currently has an opening for a full-time Senior Corporate Paralegal who enjoys working in a
                busy and challenging work environment.
            </p>
            <p>We invite candidates with a solid understanding of Corporate Law and procedures to apply.</p>
        </div>
        <div className="desc-head">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <div className="desc">
                <p className="info container">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </div>
        <div className="projects">
            <div className="project">
                <h4>Project 1</h4>
                <p>
                    2017 marked a successful year for us as we moved from delineation to exploitation of our
                    Birley/Umbach property. In early 2014, we drilled our first Montney test well at Birley at a time
                    when others were not entirely convinced of its prospectivity.
                </p>
                <div className="link">
                    <a href="#">More about --></a>
                </div>
            </div>
            <div className="project">
                <h4>Project 2</h4>
                <p>
                    2017 marked a successful year for us as we moved from delineation to exploitation of our
                    Birley/Umbach property. In early 2014, we drilled our first Montney test well at Birley at a time
                    when others were not entirely convinced of its prospectivity.
                </p>
                <div className="link">
                    <a href="#">More about --></a>
                </div>
            </div>
        </div>

        <style jsx>{`
            .header {
                width: 85%;
                margin: 0 auto;
            }
            .header h2 {
                text-transform: uppercase;
            }
            .header p {
                margin: 1.5rem 0;
            }
            .desc-head img {
                width: 100%;
            }
            .container {
                width: 85%;
                margin: 0 auto;
            }
            .desc {
                color: #fff;
                background: #1a5c8c;
                padding: 1rem 0;
            }
            .desc p:after {
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                width: 5px;
                height: 100%;
                background: #fff;
            }
            .info {
                padding-left: 1.4rem;
                position: relative;
            }
            .projects {
                width: 85%;
                margin: 2rem auto 0 auto;
                display: flex;
                flex-direction: column;
            }
            .project {
                padding: 1rem 0 0 1rem;
                margin-bottom: 1rem;
                position: relative;
            }
            .project:after {
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                width: 4rem;
                height: 5px;
                background: #0071bd;
            }
            .project h4 {
                margin-bottom: 0.6rem;
            }
            .link {
                display: flex;
                justify-content: flex-end;
                margin: 0.6rem;
            }
        `}</style>
    </div>
);

export default Operations;
