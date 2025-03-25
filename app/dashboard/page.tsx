import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link href="/dashboard/inventory">Inventory</Link>
    </div>
  );
};

export default Dashboard;
