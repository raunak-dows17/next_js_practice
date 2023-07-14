"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import getData from "@/FetchData/FetchData";

const Albums = () => {
  const [albumsData, setAlbumsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const fetchAlbumsData = async () => {
      const data = await getData("albums");
      setAlbumsData(data);
      setIsLoaded(true);
    };

    fetchAlbumsData();
  }, []);

  return (
    <div className="text-white bg-black">
      {!isLoaded ? (
        <div className="preloader">
          <div className="loader"></div>Loading Albums
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="p-5">Album</h1>
          <div className="grid grid-cols-4 gap-4 p-4">
            {albumsData &&
              albumsData.map((album) => (
                <Link href={`/albums/${album.id}/photos`} key={album.id}>
                  <button className="bg-teal-700 p-4 rounded-lg h-full w-full">
                    {album.title}
                  </button>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Albums;
