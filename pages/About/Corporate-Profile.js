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

const CorporateProfile = () => (
    <div className="CorporateProfile">
        <Head>
            <style type="text/css">{globalStyles}</style>
            <link href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap" rel="stylesheet" />
        </Head>
        <div className="desc-head">
            <img src="https://via.placeholder.com/300x200" alt="" />
            <div className="desc">
                <p className="info container">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </div>
        <div className="profile container">
            <h2>Corporate Profile</h2>
            <ul>
                <li>Anti-Corruption Policy (PDF)</li>
                <li>Audit Committee Mandate (PDF)</li>
                <li>Board of Directors Mandate (PDF)</li>
                <li>Code of Business Conduct and Ethics (PDF)</li>
                <li>Compensation Committee Mandate (PDF)</li>
                <li>Corporate Governance Committee Mandate (PDF)</li>
                <li>Insider Trading Policy (PDF)</li>
                <li>Reserves and Health, Safety and Environment Committee Mandate (PDF)</li>
                <li>Whistleblower Policy (PDF)</li>
            </ul>
        </div>

        <style jsx>{`
            .desc-head img {
                width: 100%;
            }
            .desc {
                color: #fff;
                background: #1a5c8c;
                padding: 1rem 0;
            }
            .info {
                padding-left: 1.4rem;
                position: relative;
            }
            .container {
                width: 85%;
                margin: 0 auto;
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
            .profile {
                padding: 2rem 0;
            }
            ul {
                list-style: none;
            }
            ul li {
                margin: 0.8rem 0;
            }
        `}</style>
    </div>
);

export default CorporateProfile;
