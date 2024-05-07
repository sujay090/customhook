import React from "react";

function Card({item}) {
  return (
    <div className="py-5 px-7 bg-zinc-800 w-[23%] flex flex-col items-center justify-between gap-y-4 border-2">
      <div className="w-52 h-36 flex items-center justify-center px-4">
        <img src={item.thumbnailUrl} className="w-36 h-36"  />
      </div>
      <p className="text-white">
        {item.title}
      </p>
    </div>
  );
}

export default Card;
