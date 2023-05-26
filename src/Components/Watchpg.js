import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import dislikeicon from "../Assests/like1.png";
import likeicon from "../Assests/icons8-facebook-like-50.png";
import dropicon from "../Assests/icons8-dropdown-50.png";
import { json, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/Menu";

const Watchpg = () => {
  const page = useSelector((data) => data.Apidata.page);
  const [showdesc, setShowdes] = useState("hide");
  console.log(page);
  const [params] = useSearchParams();
  console.log(params.get("v"));
  const [video, setvideo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideoData();
  }, []);
  const getVideoData = async () => {
    const data = await fetch(
      `https://internship-service.onrender.com/videos?page=${page}`
    );
    const json1 = await data.json();
    const singlevid = json1.data.posts;
    const filtered = singlevid.filter(
      (data) => data.postId === params.get("v")
    );

    setvideo(filtered);
    console.log(filtered);
  };
  const voted = video[0]?.reaction?.voted;
  const votedno = video[0]?.reaction?.count;
  const [like, setLike] = useState(voted);
  const [likeno, setLikeno] = useState(votedno);
  console.log(votedno);
  const likebtn = () => {
    {
      like ? setLikeno(likeno + 1) : setLikeno(likeno - 1);
    }
    setLike(!like);
    console.log(likeno);
  };
  const dropmenu = () => {
    showdesc === "show" ? setShowdes("hide") : setShowdes("show");
  };

  ///return
  return (
    <div className="flex max-md:flex-col w-screen">
      <div className=" w-full">
        {video.length > 0 && (
          <div className=" h-screen max-md:w-full ">
            <div className="flex text-center mt-10 ml-10 mr-10 h-3/5 w-2/3 max-md:w-fit">
              <video controls className="w-full">
                <source src={video[0]?.submission?.mediaUrl} />
              </video>
            </div>
            <div className="w-2/3 ">
              <h1 className="text-3xl ml-14 mb-2 flex justify-between ">
                <p>{video[0]?.submission?.title}</p>
                <img
                  src={dropicon}
                  className="h-5 mt-2 flex justify-end "
                  onClick={() => dropmenu()}
                />
              </h1>

              <div>
                {showdesc === "show" && (
                  <p className="ml-16">{video[0]?.submission?.description}</p>
                )}
              </div>
              <div className="flex ml-14  ">
                <img
                  src={video[0]?.creator?.pic}
                  className="w-10 rounded-full"
                />
                <div className="ml-4 flex justify-between">
                  <div className="flex">
                    <h2 className="text-xl">{video[0]?.creator?.handle}</h2>
                    <button className="bg-white text-black rounded-lg h-7 text-lg align-middle  px-2 mx-4 hover:bg-red-600">
                      Subscribe
                    </button>
                  </div>
                  <div>
                    <button
                      className="bg-zinc-800 w-24 rounded-full p-2 flex justify-center h-8"
                      onClick={() => likebtn()}
                    >
                      {!like ? (
                        <span className="flex align-middle">
                          <img src={likeicon} className="h-4 text-white " />{" "}
                          <p className="text-sm pl-2">{likeno}</p>
                        </span>
                      ) : (
                        <span className="flex align-middle">
                          <img src={dislikeicon} className="h-4 text-white " />
                          <p className="text-sm pl-2">{likeno}</p>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchpg;
