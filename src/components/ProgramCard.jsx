import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProgramCard = ({ program }) => {
  return (
    <Link
      href={`/program/${program.age}/${encodeURIComponent(
        program.title.replace(/ /g, '-')
      )}`}
    >
      <div className="p-4 rounded-xl border-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="flex items-center mb-4">
          <Image
            src="./assets/kelas-1.png"
            alt="Program Image"
            className="w-16 h-16 mr-4 object-cover rounded-lg"
            width={64}
            height={64}
          />
          <p className="font-bold">{program.title}</p>
        </div>
        <p className="text-gray-600 mb-4">{program.description}</p>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
            Langganan
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;
