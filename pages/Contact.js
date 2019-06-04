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
    p, a, li {
        font-size: 1.125rem;
    }
`;

const Contact = () => (
    <div className="Contact">
        <Head>
            <style type="text/css">{globalStyles}</style>
            <link href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap" rel="stylesheet" />
        </Head>
        <div className="contact-container">
            <div className="desc">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="contact-info">
                <div className="info">
                    <img src="https://via.placeholder.com/70" alt="" />
                    <p className="i">+61 (0) 3 8376 6284</p>
                </div>
                <div className="info">
                    <img src="https://via.placeholder.com/70" alt="" />
                    <p className="i">info@consulting.com</p>
                </div>
                <div className="info">
                    <img src="https://via.placeholder.com/70" alt="" />
                    <div className="i">
                        <p>6122 Collins Street</p>
                        <p>West Victoria</p>
                        <p>8007 Australia</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea rows="10" />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>

        <style jsx>{`
            .contact-container {
                color: #fff;
                background: #0071bd;
                padding: 2rem 0 1rem 0;
                position: relative;
            }
            .contact-container:after {
                position: absolute;
                content: '';
                bottom: -40px;
                left: 50%;
                transform: translateX(-50%);
                border-left: 40px solid transparent;
                border-right: 40px solid transparent;
                border-top: 40px solid #0071bd;
            }
            .contact-container > div,
            .form-container {
                width: 85%;
                margin: 0 auto;
            }
            .desc {
                padding: 1rem 0;
                position: relative;
            }
            .desc:after {
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                width: 80px;
                height: 5px;
                background: #fff;
            }
            .contact-info {
                padding-top: 1rem;
            }
            .info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .i {
                margin: 1rem 0 2rem 0;
            }
            form {
                margin: 4rem 0;
                font-size: 1.25rem;
                font-weight: bold;
            }
            .form-group {
                margin: 1.2rem 0;
            }
            form input,
            form textarea,
            form button {
                font-size: 1.125rem;
                width: 100%;
                height: 2rem;
                padding: 0.5rem;
                margin-top: 0.5rem;
            }
            form textarea {
                height: 5rem;
            }
            form input,
            form textarea,
            form button {
                background: #e5e5e5;
                border: none;
                border-radius: 2px;
            }
            form button {
                color: #fff;
                background: #0071bd;
                height: 100%;
                padding: 1rem;
            }
        `}</style>
    </div>
);

export default Contact;
