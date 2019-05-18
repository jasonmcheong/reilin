import Layout from '../components/Layout';

const Contact = () => (
    <Layout>
        <div className="Contact">
            <div className="contact-contain">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                </p>
                <div className="contact-info">
                    <img src="https://via.placeholder.com/50" alt="" />
                    <p>+61 (0) 3 8376 6284</p>
                </div>
                <div className="contact-info">
                    <img src="https://via.placeholder.com/50" alt="" />
                    <p>info@consulting.com</p>
                </div>
                <div className="contact-info">
                    <img src="https://via.placeholder.com/50" alt="" />
                    <div>
                        <p>6122 Collins Street West</p>
                        <p>Victoria</p>
                        <p>8007 Australia</p>
                    </div>
                </div>
            </div>
            <div className="form-contain">
                <form>
                    <label>Name:</label>
                    <input type="text" />
                    <label>Email:</label>
                    <input type="text" />
                    <label>Message:</label>
                    <textarea rows="10" />
                    <button type="submit">Send</button>
                </form>
            </div>

            <style jsx>{`
                .Contact {
                    display: grid;
                    grid-template-columns: 1fr 1.8fr;
                    z-index: -1;
                    background: #0071bd;
                }

                .contact-contain {
                }

                .contact-info {
                    display: flex;
                    align-items: center;
                    margin: 15px 0;
                }
                .contact-info > img {
                    margin-right: 12px;
                }

                .form-contain {
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                form {
                    width: 500px;
                    display: flex;
                    flex-direction: column;
                    padding: 50px 0;
                }
                form label {
                    color: #0c0c0c;
                    font-size: 20px;
                    margin-bottom: 5px;
                }
                form input {
                    height: 30px;
                }
                form input,
                form textarea {
                    padding: 9px;
                    background: #e5e5e5;
                    border: none;
                    border-radius: 2px;
                    margin-bottom: 25px;
                }
                form button {
                    font-weight: 0;
                    font-size: 20px;
                    color: #fff;
                    background: #0071bd;
                    border: none;
                    padding: 12px 0;
                    width: 200px;
                    margin: 0 auto;
                    border-radius: 2px;
                }
            `}</style>
        </div>
    </Layout>
);

export default Contact;
