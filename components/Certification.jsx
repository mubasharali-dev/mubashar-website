import React from "react";
import Image from "next/image";

const Certification = ({ imageUrl, title, description, buttonText }) => {
    return (
        <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
                className='w-full h-48 object-cover mt-4 mx-auto'
                alt={title}
                src={imageUrl}
                width='300px'
                height='200px'
            />
            <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 text-sm my-2">{description}</p>
                <div className="mt-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Certification;
