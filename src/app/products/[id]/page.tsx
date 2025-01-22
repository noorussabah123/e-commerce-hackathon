import { client } from "@/sanity/lib/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
  product: {
    name: string;
    price: number;
    description: string;
    category: string;
    discountPercent: number;
    colors: string;
    sizes: string;
    image: string;
  };
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await client.fetch(`*[_type == "products" && _id == $id][0]`, {
    id: params.id,
  });

  if (!product) {
    return <p>Product not found</p>;
  }

  const discountedPrice = product.price - (product.price * product.discountPercent) / 100;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="shadow-md border rounded-lg">
        <CardHeader className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </CardHeader>

        <CardContent className="p-4">
          <CardTitle className="text-2xl font-semibold">{product.name}</CardTitle>
          <CardDescription className="text-sm text-gray-600 mt-2">
            {product.description}
          </CardDescription>

          <div className="mt-4">
            <p className="text-sm font-medium">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p className="text-sm font-medium mt-2">
              <span className="font-semibold">Colors:</span> {product.colors}
            </p>
            <p className="text-sm font-medium mt-2">
              <span className="font-semibold">Sizes:</span> {product.sizes}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-500 line-through">
              ${product.price}
            </p>
            <p className="text-lg font-bold text-green-600">
              ${discountedPrice.toFixed(2)}
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center px-4 py-2">
          <Button variant="outline">Add to Cart</Button>
          <Button className="bg-black text-white hover:bg-transparent hover:text-black">
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
