import Head from 'next/head';
import Navbar from '../Navbar';

interface PageShellProps {
  title: string;
  children: React.ReactNode;
}

const PageShell = ({ children, title }: PageShellProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar></Navbar>

      <main>{children}</main>
    </>
  );
};

export default PageShell;
