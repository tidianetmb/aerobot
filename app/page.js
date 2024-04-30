import ProductCard from '@/app/ProductCard';
import Stripe from 'stripe';

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27',
  });
  const res = await stripe.prices.list({
    expand: ['data.product'],
  });
  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  console.log(products);
  return (
    <main className="p-4 flex flex-col">
      <div className="max-w-grid  max-w-[1000px] w-full mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, productIndex) => (
          <ProductCard key={productIndex} product={product} />
        ))}
      </div>
    </main>
  );
}
