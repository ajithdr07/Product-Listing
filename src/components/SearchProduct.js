import React, { useEffect, useState } from "react";

const SearchProduct = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchedProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSearchedProducts();
  }, []);

  useEffect(() => {
    if (!searchText) {
      setSearchResults([]);
      return;
    }
    const res = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(res);
  }, [searchText, products]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
        className="px-4 py-2 w-full rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      {searchResults.length > 0 && (
        <div className="absolute z-10 top-full max-h-60 overflow-y-scroll left-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-full">
          {searchResults.map((product) => (
            <p
              key={product.id}
              className="text-black px-4 py-2 first:border-t-0 border-t-2 border-t-slate-500 hover:bg-gray-100"
            >
              {product.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
