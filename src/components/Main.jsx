import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Main = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [priceSort, setPriceSort] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  const handleSearch = (e) =>{
    e.preventDefault()
    const searchText = e.target.search.value
  setSearch(searchText)
  }
  return (
    <div>
      <div className="flex gap-3">
        {/* Search */}
      <form onSubmit={handleSearch} 
className="input input-bordered mt-2 flex items-center gap-2">
  <input type="text" name="search" className="grow" placeholder="Search" />
  <button type="submit"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70 z-10"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
</form>
{/* Sort */}
<div className="dropdown dropdown-hover">
  <select
    onChange={e => setSort(e.target.value)}
    name='sort'
    id="sort"
    value={sort}
    className=" mt-1 bg-base-100 border rounded-md w-52">
      <option disabled value="">Sort By Date</option>
      <option value="quantity-desc">Newest First</option>
      <option value="quantity-asc">Oldest First</option>
  </select>
</div>
<div className="dropdown dropdown-hover">
  <select
    onChange={e => setPriceSort(e.target.value)}
    name='priceSort'
    id="priceSort"
    value={priceSort}
    className="mt-1 bg-base-100 border rounded-md w-52">
      <option disabled value="">Sort By Price</option>
      <option value="quantity-desc">High to low</option>
      <option value="quantity-asc">Low to high</option>
  </select>
</div>
<div className="dropdown dropdown-hover">
  <select
    onChange={e => setPriceSort(e.target.value)}
    name='priceSort'
    id="priceSort"
    value={priceSort}
    className="mt-1 bg-base-100 border rounded-md w-52">
      <option disabled value="">Sort By Price</option>
      <option value="quantity-desc">High to low</option>
      <option value="quantity-asc">Low to high</option>
  </select>
</div>
      </div>
    <div className="px-20 py-5 flex justify-center">
    <div className="grid grid-cols-3 gap-5">
    {
      data?.map((product)=> (<ProductCard key={product._id} product={product}></ProductCard>))
     }
    </div>
    </div>
    </div>
  );
};

export default Main;