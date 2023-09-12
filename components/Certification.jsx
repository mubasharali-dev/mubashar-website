import React from "react";
import Image from "next/image";

const Certification = ({ imageUrl, title, description, buttonLink, buttonText }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center mb-5">
      <div className="flex items-center justify-center h-48 w-full mt-3">
        <Image
          className="object-cover"
          alt={title}
          src={imageUrl}
          width={300}
          height={200}
        />
      </div>
      <div className="px-6 py-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm my-2">{description}</p>
        <div className="mt-4">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certification;
