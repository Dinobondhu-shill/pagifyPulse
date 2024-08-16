import React, { useState } from 'react';

const ProductCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, laboriosam, velit ratione labore odit vel eos animi";
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='border rounded-lg px-4 py-4 w-fit flex flex-col items-center'>
      <img className='w-28 h-28' src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" alt="" /> <hr />
      <div className='text-start'>
      <h2 className='text-xl font-semibold text-start py-4'>Kodur Tel</h2>
     <p className='w-72'>
          {isExpanded ? description : `${description.substring(0, 30)}...`}
          <button onClick={toggleDescription} className='text-blue-300'>
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        </p>
      <div className='flex justify-between my-3'>
        <p><span className='font-bold'>Price: $</span>140</p>
        <p><span className='font-bold'>category:</span> Oil</p>
      </div>
      <p><span className='font-bold'>Date :</span> 10-08-2024</p>
      </div>
    </div>
  );
};

export default ProductCard;