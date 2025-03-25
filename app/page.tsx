import Link from 'next/link';
import AddToCart from './components/AddToCart';

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <Link href="/dashboard">Dashboard</Link>
      <AddToCart />
    </main>
  );
}
