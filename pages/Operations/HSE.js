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

const HSE = () => (
    <div className="HSE">
        <Head>
            <style type="text/css">{globalStyles}</style>
            <link href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap" rel="stylesheet" />
        </Head>
        <div className="header">
            <h2>HS&E</h2>
            <p>
                Ogilvie LLP currently has an opening for a full-time Senior Corporate Paralegal who enjoys working in a
                busy and challenging work environment.
            </p>
            <p>We invite candidates with a solid understanding of Corporate Law and procedures to apply.</p>
        </div>
        <div className="guidelines">
            <div className="guideline">
                <h4>health and safety</h4>
                <p>
                    Throughout all our operations, we encourage a positive and robust safety culture; ensuring that
                    health and safety standards are not compromised to meet commercial objectives. We protect people
                    working for and with the Company through the effective identification, understanding and management
                    of risk and the implementation of systems to manage process safety and asset integrity.
                </p>
            </div>
            <div className="guideline">
                <h4>Environment</h4>
                <p>
                    Ithaca is committed to the principle of continuous improvement in our environmental performance. We
                    identify where there is a potential for our operations to have an impact on the environment and put
                    measures in place to avoid or minimise this impact. Annual environmental objectives and plans are
                    established by the Company, and those who work for us, to monitor and measure our impact on our
                    natural surroundings and reduce our risk of causing environmental damage.
                </p>
            </div>
            <div className="guideline">
                <h4>Emergency Response</h4>
                <p>
                    At Ithaca, we aim to ensure incident free operations. We recognise, however, that where incidents do
                    occur, effective and robust response must be provided. We therefore ensure that all relevant
                    personnel are trained and competent in emergency response, emergency response plans are in place,
                    and that these plans are frequently and regularly exercised to demonstrate and improve our emergency
                    management preparedness.
                </p>
            </div>
        </div>
        <div className="commitments">
            <h4>In order to meet our HS&E commitments, the company seeks to:</h4>
            <ul>
                <li>
                    Provide the resources necessary to implement its policies and to develop and maintain our HS&E
                    systems.
                </li>
                <li>
                    Provide effective leadership, training and coaching to sustain and develop workforce HS&E competency
                    and skills and maintains a positive HS&E culture.
                </li>
                <li>Define clear responsibilities and accountabilities for HS&E issues within the company.</li>
                <li>
                    Communicate our policy, responsibilities and performance to those who work for, with and alongside
                    us.
                </li>
                <li>
                    Set realistic HS&E objectives and targets and develop action plans to measure these as a
                    contribution towards continual improvement of our HS&E performance.
                </li>
                <li>Ensure HS&E performance is prominent in the selection of our associates and contractors.</li>
                <li>
                    Assess and manage operations through all stages to minimise risk of harm to people, the environment
                    and facilities.
                </li>
                <li>
                    Communicate and consult with stakeholders and the public and have regard for their interests when
                    planning activities.
                </li>
                <li>
                    Ensure that appropriate plans and resources are in place to respond to incidents and emergencies.
                </li>
                <li>
                    Investigate incidents, implement recommendations to prevent re-occurrence and share lessons learned.
                </li>
            </ul>
        </div>

        <style jsx>{`
            .HSE {
                width: 85%;
                margin: 0 auto;
            }
            h4 {
                text-transform: capitalize;
                margin-bottom: 0.6rem;
            }
            .header h2 {
                text-transform: uppercase;
            }
            .header p {
                margin: 1.5rem 0;
            }
            .guideline,
            .commitments {
                margin-bottom: 1.5rem;
            }
            .commitments ul {
                list-style-type: disc;
                padding: 0 0 0 25px;
            }
            .commitments ul li {
                margin: 0.8rem 0;
            }
        `}</style>
    </div>
);

export default HSE;
