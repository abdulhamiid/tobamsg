import React from 'react'

function IngredentCard() {
  return (
    <section className='grid grid-cols-3 gap-[40px] justify-between items-start w-[88%] mx-auto my-[60px]'>
        <div className='col-span-2 flex flex-col'>
            <h3 className='text-4xl font-bold my-10'>Ingredients</h3>
            <div>
                <h3 className='text-2xl font-bold my-12'>For main dish</h3>
                <ul className='border-t border-b border-b-grey-300 border-t-gray-300 divide-y divide-gray-300'>
                    <li className='flex gap-3 items-center py-6'>
                        <img src='checkbox.svg' alt="checkbox" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li className='flex gap-3 items-center py-6'>
                        <img src='check.svg' alt="checkbox" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li className='flex gap-3 items-center py-6'>
                        <img src='check.svg' alt="checkbox" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li className='flex gap-3 items-center py-6'>
                        <img src='check.svg' alt="checkbox" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                </ul>
            </div>
            <div className='my-[20px]'>
                <h3 className='text-2xl font-bold my-12'>For the sauce</h3>
                <ul className='border-t border-b border-b-grey-300 border-t-gray-300 divide-y divide-gray-300'>
                    <li className='flex gap-3 items-center py-6'>
                        <img src='checkbox.svg' alt="checkbox" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li className='flex gap-3 items-center py-6'>
                        <img src='check.svg' alt="checkbox" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li className='flex gap-3 items-center py-6'>
                        <img src='check.svg' alt="checkbox" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <h3 className='text-4xl font-bold my-6'>Other Recipe</h3>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-4 justify-items-center items-center'>
                    <img src='img1.svg' alt='recipe' />
                    <div className='flex flex-col gap-3'>
                        <p className='text-xl font-bold'>Chicken Meatball with Creamy Chees...</p>
                        <p className='text-base text-gray-600'>By Andreas Paula</p>
                    </div>
                </div>
                <div className='flex gap-4 justify-items-center items-center'>
                    <img src='img2.svg' alt='recipe' className='rounded-[25px]'/>
                    <div className='flex flex-col gap-3'>
                        <p className='text-xl font-bold'>The Creamiest Creamy Chicken an...</p>
                        <p className='text-base text-gray-600'>By Andreas Paula</p>
                    </div>
                </div>
                <div className='flex gap-4 justify-items-center items-center'>
                    <img src='img3.svg' alt='recipe' className='rounded-[25px]' />
                    <div className='flex flex-col gap-3'>
                        <p className='text-xl font-bold'>The Best Easy One Pot Chicken and Rice</p>
                        <p className='text-base text-gray-600'>By Andreas Paula</p>
                    </div>
                </div>
            </div>
            <img src='Ads2.svg' alt='ads' className='py-[80px]'/>
        </div>
    </section>
  )
}

export default IngredentCard