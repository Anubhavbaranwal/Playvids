import React from "react";

const Videocard = (data) => {

  return (
    <div className="p-2 max-sm:px-0 rounded-md hover:shadow-md hover:shadow-stone-800 hover:bg-stone-700">
      <img
        src={data.data.submission.thumbnail}
        className="w-[440px] h-64 p-2 rounded-lg max-sm:mr-2 max-sm:w-[350px]"
      />
      <div className=" flex flex-wrap p-2 max-sm:px-0">
        <img src={data.data.creator.pic} className="w-20 rounded-full px-2" alt="thumbnail" />
        <div className="pl-2">
          <h1 className="text-2xl font-bold">{data.data.submission.title}</h1>
          <h4 className="text-xl font-bold text-gray-600">
            {data.data.creator.handle}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
