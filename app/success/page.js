import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="p-4 flex flex-col items-center">
      <h1 className="text-4xl">Success!</h1>
      <p className="text-lg">Your order is on its way!</p>
      <Link href="/">
        <a className="text-blue-500">Back to store</a>
      </Link>
    </main>
  );
}
