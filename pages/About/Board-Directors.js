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

const BoardDirectors = () => (
    <div className="BoardDirectors">
        <Head>
            <style type="text/css">{globalStyles}</style>
            <link href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap" rel="stylesheet" />
        </Head>
        <div className="header">
            <h2>board of directors</h2>
            <p>
                Ogilvie LLP currently has an opening for a full-time Senior Corporate Paralegal who enjoys working in a
                busy and challenging work environment.
            </p>
            <p>We invite candidates with a solid understanding of Corporate Law and procedures to apply.</p>
        </div>
        <div className="board-member">
            <h4 className="name">mikhail afendikov</h4>
            <h5 className="position">executive chairman & chief executive officer</h5>
            <ul>
                <li>Founder & CEO of Gastek LLC and Kub-Gas LLC</li>
                <li>Over 20 years of experience in oil and gas, mining, shipping and financial markets</li>
                <li>
                    Founder of Kub-Gas and the driver behind numerous resource successes (Oil and Gas and Coal) in
                    Ukraine
                </li>
            </ul>
        </div>
        <div className="board-member">
            <h4 className="name">mikhail afendikov</h4>
            <h5 className="position">executive chairman & chief executive officer</h5>
            <ul>
                <li>Founder & CEO of Gastek LLC and Kub-Gas LLC</li>
                <li>Over 20 years of experience in oil and gas, mining, shipping and financial markets</li>
                <li>
                    Founder of Kub-Gas and the driver behind numerous resource successes (Oil and Gas and Coal) in
                    Ukraine
                </li>
            </ul>
        </div>

        <style jsx>{`
            .BoardDirectors {
                width: 85%;
                margin: 0 auto;
            }
            .header h2,
            .board-member .name {
                text-transform: uppercase;
            }
            .header p {
                margin: 1.5rem 0;
            }
            .board-member {
                margin: 2rem 0;
                padding-top: 1rem;
                position: relative;
            }
            .board-member:after {
                position: absolute;
                content: '';
                top: 0;
                left: -0.625rem;
                width: 5rem;
                height: 5px;
                background: #0071bd;
            }
            .board-member .position {
                text-transform: capitalize;
                line-height: 1;
            }
            .board-member ul {
                list-style-type: disc;
                padding: 0 0 0 25px;
            }
            .board-member ul li {
                margin: 1rem 0;
            }
        `}</style>
    </div>
);

export default BoardDirectors;
