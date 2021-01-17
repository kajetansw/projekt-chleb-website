import Head from 'next/head';
import Footer from '../Footer';
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

      <Footer mt={20} mb={8}></Footer>
    </>
  );
};

export default PageShell;
