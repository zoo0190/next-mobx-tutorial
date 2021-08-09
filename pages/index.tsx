import Link from 'next/link';

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/count">
          <a>mobx count</a>
        </Link>
      </li>
      <li>
        <Link href="material-ui">
          <a>material-ui test</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
