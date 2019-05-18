import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        <div>
            <h1>Welcome to Reilin</h1>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch(); // api url goes here
    const data = await res.json();

    return {
        data: data,
    };
};

export default Index;
