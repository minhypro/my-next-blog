import { GetStaticPropsResult, InferGetStaticPropsType } from 'next';

type Props = {
  username: string;
  reqHeaders: any;
};

function UserProfile({ username, reqHeaders }: Props) {
  return (
    <div>
      <h1>{username}</h1>
      <p>{reqHeaders}</p>
    </div>
  );
}

export default UserProfile;

export async function getServerSideProps(context: ServerSideContext) {
  const { params, req, res } = context;

  return {
    props: {
      username: 'Max',
      reqHeaders: JSON.stringify(req.headers)
    },
  };
}
