import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Qui quis totam ullam a natus repellat eaque unde. Qui explicabo pariatur quo facilis rem. Quia qui aut rerum aut autem.

          Rerum reiciendis aut voluptatibus. Rerum ratione odio eos tempora odio. Soluta in mollitia dolorem ducimus natus eos atque.

          Laudantium ullam maiores architecto voluptatem qui dignissimos aut. Eum aspernatur aut voluptatem incidunt qui consequatur consequatur neque. Distinctio eius nulla ratione.

          Quisquam autem voluptate quisquam dolor sed. Doloribus saepe minus quia facere veniam ut sint. Quos quia atque deserunt qui. Consectetur recusandae autem nulla architecto recusandae quia nostrum aut. Repellat totam eos nobis. Dolor tenetur et eveniet facilis.

          Saepe mollitia vel aperiam corrupti consequatur totam quis repellat. Repellat occaecati debitis corporis nostrum facilis. Ipsam laboriosam quas adipisci at non laboriosam.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>

          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}