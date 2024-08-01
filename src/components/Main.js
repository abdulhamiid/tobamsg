import React from 'react'

const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
};

function Main() {
  const today = new Date();

  return (
    <section className='w-[88%] mx-auto'>
        <div className='grid grid-cols-3 gap-[60px] justify-between items-start'>
            <div className='col-span-2 flex flex-col gap-4'>
                <div className='flex flex-col gap-8 my-[40px]'>
                    <h2>Health Japanese Fried Rice</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-items-center items-center gap-3'>
                            <img src="ellipse.svg" />
                            <div className='flex flex-col justify-items-center items-center'>
                                <p>John Smith</p>
                                <p>{formatDate(today)}</p>
                            </div>
                        </div>
                        <div className='flex justify-items-center items-center gap-3'>
                            <img src="Timer.svg" />
                            <div className='flex flex-col justify-items-center items-center'>
                                <p>PREP TIME</p>
                                <p>15 Minutes</p>
                            </div>
                        </div>
                        <div className='flex justify-items-center items-center gap-3'>
                            <img src="Timer.svg" />
                            <div className='flex flex-col justify-items-center items-center'>
                                <p>COOKING TIME</p>
                                <p>15 Minutes</p>
                            </div>
                        </div>
                        <div className='flex justify-items-center items-center gap-3'>
                            <img src="ForkKnife.svg" alt="Japanese Fried Rice" />
                            <p>Chicken</p>
                        </div>
                    </div>
                </div>
                <div id='showcase-col'>
                    <div>
                        <img className='w-[100%]' src='MaskGroup.svg' />
                        <img src='Group884.svg' />
                    </div>
                </div>
            </div>
            <div className='col-span flex flex-col gap-6'>
                <div className='flex gap-[30px] items-end'>
                    <div className='flex justify-items-center p-4 w-[60px] h-[60px] rounded-full bg-[#E7FAFE]'>
                        <img src='printer.svg' alt="print" />
                    </div>
                    <div className='flex justify-items-center p-4 items-center w-[60px] h-[60px] rounded-full bg-[#E7FAFE]'>
                        <img src='share.svg' alt='shareIcon' />
                    </div>
                </div>
                <div>
                    <div>
                            <h4>Nutrition Information</h4>
                            <ul>
                                <li>
                                    <p>Calories</p>
                                    <p>219.9 kcal</p>
                                </li>
                                <li>
                                    <p>Total Fat</p>
                                    <p>10.7 g</p>
                                </li>
                                <li>
                                    <p>Protein</p>
                                    <p>7.9 g</p>
                                </li>
                                <li>
                                    <p>Carbohydrate</p>
                                    <p>22.3 g</p>
                                </li>
                                <li>
                                    <p>Cholesterol</p>
                                    <p>37.4 mg</p>
                                </li>
                                <li>
                                    <p>Total Fat</p>
                                    <p>219.9 kcal</p>
                                </li>
                            </ul>
                    </div>
                    <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
       <p className='my-[60px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>    
    </section>
  )
}

export default Main