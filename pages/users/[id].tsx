import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

interface UserDetailProps {
    user: object;
}

export default function UserDetail(props: UserDetailProps) {
    const { user } = props;

    return (
        <Layout pageTitle="User Detail">
            <p>{user.name}</p>
            <p>{user.email}</p>
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    const paths = dataUsers.map((user) => ({
        params: {
            id: `${user}`,
        },
    }));

    return {
        paths,
    };
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users${id}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
}
