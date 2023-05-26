import React, { useEffect, useState } from "react";
import Videocard from "./Videocard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nextpg, Prevpg } from "../Utils/Apidata";
import { useSelector } from "react-redux";

const Container = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [video, setvideo] = useState([]);
  const page = useSelector((data) => data.Apidata.page);

  useEffect(() => {
    getVideoData();
  }, [page]);
  const getVideoData = async () => {
    const data = await fetch(
      `https://internship-service.onrender.com/videos?page=${page}`
    );
    const json = await data.json();
    setvideo(json.data.posts);
  };
  const nextpg = () => {
    dispatch(Nextpg());
    navigate("/videos?page=" + page);
  };
  const prevpg = () => {
    dispatch(Prevpg());
    navigate("/videos?page=" + page);
  };
  return (
    <div>
      <div className="flex flex-wrap justify-center max-sm:justify-start max-sm:pl-3 max-sm:w-fit">
        {video &&
          video.map((vid) => {
            return (
              <Link to={"/watch?v=" + vid.postId} key={vid.postId}>
                <Videocard data={vid} />
              </Link>
            );
          })}
      </div>
      <div className="flex justify-between mb-10 mr-4">
        <button
          disabled={page == 1}
          className="bg-zinc-700 p-2 rounded-lg"
          onClick={() => prevpg()}
        >
          &larr; Previous
        </button>
        <button className="bg-zinc-700 p-2 rounded-lg" onClick={() => nextpg()}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Container;
