import React from 'react';

interface IcardProps {
  src: string;
  description: string;
}

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const Icard: React.FC<IcardProps> = ({ src, description }) => {
  const today = new Date();
  const formattedDate = formatDate(today);
  
  return (
    <div className="bg-white py-4" id="exl">
      <div className="justify-items-center items-center">
        <div className="flex justify-items-center items-center">
          <img className="oval w-8 h-8" src="Oval.svg" alt="recipe" />
          <div className="icon-desc m-2 text-xs">
            <div className="flex">
              <h4 className="font-bold">Foodieland.</h4>
              <img src="Shape.svg" alt="shape" />
            </div>
            <small>Tokyo, Japan</small>
          </div>
        </div>
        <img className="moreicon size-6" src="MoreIcon.svg" alt="more" />
      </div>
      <div>
        <img className="recipe" src={src} alt={description} />
      </div>
      <div className="px-3">
        <ul>
          <li>
            <a>
              <img className="size-6" src="Like.svg" alt="like" />
            </a>
          </li>
          <li>
            <a>
              <img className="size-6" src="Comment.svg" alt="comment" />
            </a>
          </li>
          <li>
            <a>
              <img className="size-6" src="Messanger.svg" alt="messenger" />
            </a>
          </li>
        </ul>
        <img className="size-5" src="Pagination.svg" alt="pagination" />
        <img src="Save.svg" alt="saveIcon" />
      </div>
      <div className="px-3 text-xs">
        <div className="flex justify-items-center items-center">
          <img className="pr-3 w-10 h-10" src="Oval2.svg" alt="user" />
          <p>
            Liked by
            <span className="text-black font-bold">craig_love</span>
            {' '}
            and
            <span className="text-black font-bold">44,686</span>
          </p>
        </div>
        <p>
          <span className="text-black font-bold">Foodieland.</span>
          {' '}
          {description}
        </p>
      </div>
      <p className="px-3 text-xs text-gray-500">{formattedDate}</p>
    </div>
  );
};

Icard.defaultProps = {
  src: '',
  description: '',
};

export default Icard;
