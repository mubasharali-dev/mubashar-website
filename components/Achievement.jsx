import React, { useState } from "react";
import Image from "next/image";

const Achievement = ({ image, title, communityName, ambassadorImage, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="relative p-4 cursor-pointer" onClick={openModal}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/3">
            <Image className="object-cover" alt={title} src={image} width={150} height={150} />
          </div>
          <div className="w-2/3 p-4">
            <h2 className="text-xl font-semibold mb-2 text-blue-500">{title}</h2>
            <h6 className="text-gray-600">
                <p className=" hover:underline text-black-200 font-semibold py-2 rounded">
                  {communityName}
                </p>
            </h6>
          </div>
        </div>
      </div>

      {isModalOpen && (
  <div
    className="fixed inset-0 flex items-center justify-center z-[100] bg-black bg-opacity-50"
    onClick={closeModal}
  >
    <div
      className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full h-96 overflow-y-auto no-scrollbar"
      onClick={stopPropagation}
    >
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold text-blue-500">{title}</p>
        <button
          className="text-white-600 hover:text-red-800"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="text-gray-600 mb-10">{communityName}</p>
      <div className="flex items-center justify-center h-48 mt-3">
        <Image
          className="object-cover h-auto max-w-lg rounded-lg my-auto"
          alt={title}
          src={ambassadorImage}
          width={220}
          height={250}
        />
      </div>
      <p className="text-xl font-semibold mt-10">Key Achievements</p>
      <p className="mb-10">{description}</p>
      <button
        className="bg-red-500 hover:bg-red-600 w-full text-white py-2 px-4 rounded-md"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Achievement;
