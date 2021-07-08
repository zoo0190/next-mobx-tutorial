import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return <div>hi</div>;
}
