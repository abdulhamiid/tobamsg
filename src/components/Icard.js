import React from 'react'

const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

function Icard({src, description}) {
    const today = new Date();

  return (
    <div className='bg-neutral-50 py-4' id="exl">
        <div className='justify-items-center items-center'>
            <div className='flex justify-items-center items-center'>
                <img className="oval" src="Oval.svg" alt="recipe" />
                <div className='icon-desc m-2'>
                    <div className='flex'>
                        <h4>Foodieland.</h4>
                        <img src="Shape.svg" alt="shape" />
                    </div>
                    <small>Tokyo, Japan</small>
                </div>
            </div>   
            <img className="moreicon size-6" src="MoreIcon.svg" alt="more" />
        </div>
        <div>
            <img className='recipe' src={src} alt={description} />
        </div>
        <div className='px-3'>
            <ul>
                <li>
                    <a>
                        <img className='size-6' src="Like.svg" alt='like'/>
                    </a>
                </li>
                <li>
                    <a>
                        <img className='size-6' src="Comment.svg" alt='comment' />
                    </a>
                </li>
                <li>
                    <a>
                        <img className='size-6' src="Messanger.svg" alt='messenger' />
                    </a>
                </li>
            </ul>
            <img className='size-5' src="Pagination.svg" />
            <img src="Save.svg" />
        </div>
        <div className='px-3'>
            <div className='flex justify-items-center items-center'>
                <img className='pr-3 w-10 h-10' src="Oval2.svg" alt="user" />
                <p>Liked by craig_love and 44,686</p>
            </div>
            <p>{description}</p>
        </div>
        <p className='px-3'>{formatDate(today)}</p>
    </div>
  )
}

export default Icard