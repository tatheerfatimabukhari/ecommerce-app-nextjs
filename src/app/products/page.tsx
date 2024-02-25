"use client";

import ProductBox from "@/components/ProductBox";
import { products } from "@/lib/tempDB";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Product() {
  const [viewProducts, setProducts] = useState(products({}));

  return (
    <div className="min-w-full flex justify-center items-center p-4 gap-2 flex-col">
      <div className="flex justify-center items-center p-4 gap-2 flex-col">
        <h3 className="text-1xl font-bold text-secondary">ALL PRODUCTS</h3>
        <h4 className="text-3xl font-bold text-primary-content">
          Check, What We Have!
        </h4>
      </div>

      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 py-2 w-full grid gap-4">
        {viewProducts.map((product: any, index: number) => (
          <ProductBox
            key={`productSection_product_${index}`}
            name={product.title}
            category={product.category}
            price={product.price}
            id={product._id}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
