import Head from 'next/head';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Feed from '../components/Feed';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Modal />
      <Header />
      <MobileNav />
      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  );
}
