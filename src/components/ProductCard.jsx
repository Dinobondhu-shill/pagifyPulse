import { useState } from 'react';

const ProductCard = ({product}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, laboriosam, velit ratione labore odit vel eos animi";
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
console.log(product)
  return (
    <div className='border rounded-lg px-4 py-4 flex flex-col items-center w-80'>
      <img className='w-28 h-28' src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" alt="" /> <hr />
      <div className='text-start'>
      <h2 className='text-xl font-semibold text-start py-4'>{product.name}</h2>
     <p className='w-72'>
          {isExpanded ? product.description : `${product.description.substring(0, 60)}...`}
          <button onClick={toggleDescription} className='text-blue-300'>
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        </p>
      <div className='flex justify-between mt-3'>
        <p><span className='font-bold'>Price: $</span>{product.price}</p>
        <p><span className='font-bold'>Ratings :</span> {product.ratings}</p>
        
      </div>
      <p><span className='font-bold'>category:</span> {product.category}</p>
      <p><span className='font-bold'>Date :</span> {product.created_at}</p>
      </div>
    </div>
  );
};

export default ProductCard;