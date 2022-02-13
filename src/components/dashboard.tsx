import Head from 'next/head';
import LeftNavbar from './LeftNavbar';
import Header from './Header';
import style from '../Home.module.css';
import DashboardContent from './DashboardContent';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>Dashboard</title>
        {/* <Link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <LeftNavbar />
      <Header />
      <DashboardContent />
    </div>
  )
}

export default Dashboard
