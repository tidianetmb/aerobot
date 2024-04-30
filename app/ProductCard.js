'use client';
import useCart from '@/app/(store)/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProductCard(props) {
  const { product } = props;
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;
  const setProduct = useCart((state) => state.setProduct);
  const router = useRouter();
  function onProductClick() {
    const newProduct = {
      price_id,
      cost,
      productInfo,
      name,
      description,
    };
    setProduct({ newProduct });
    router.push('/product?price_id' + price_id);
  }
  return (
    <div
      onClick={onProductClick}
      className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer"
    >
      <Image
        src={productInfo.images[0]}
        height={400}
        width={400}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          <p>${cost / 100}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
