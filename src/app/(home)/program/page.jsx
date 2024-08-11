'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProgramCard from '@/components/ProgramCard';
import AgeSelectionModal from '@/components/AgeSelectionModal';
import AgeButton from '@/components/AgeButton';

const ProgramPage = () => {
  const [selectedAge, setSelectedAge] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const ages = [
    '9 Tahun',
    '10 Tahun',
    '11 Tahun',
    '12 Tahun',
    '13 Tahun',
    '14 Tahun',
    '15 Tahun',
  ];

  const handleAgeClick = (age) => {
    setSelectedAge(age);
    setShowModal(false);
  };

  const programs = [
    {
      age: '9 Tahun',
      title: 'Belajar Scratch Untuk Pemula',
      description: 'Belajar Scratch untuk pemula untuk usia 9-12 tahun',
    },
    {
      age: '10 Tahun',
      title: 'Belajar Scratch Untuk Pemula',
      description: 'Belajar Scratch untuk pemula untuk usia 9-12 tahun',
    },
    // Tambahkan program lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <Navbar />
      <div className="font-nunito mx-auto px-4 py-8 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 justify-between">
          <div className="w-full lg:w-1/2">
            <p className="text-2xl font-black xl:text-4xl">
              Lebih dari Sekedar Belajar Coding, Karena Coding Menyenangkan!
            </p>
            <p className="py-3">
              Akses semua video pembelajaran menarik dan interaktif bersama
              KodingKidz dan jadi programmer sejak dini.
            </p>
            <div className="flex gap-6">
              <button className="px-6 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300">
                Langganan Sekarang
              </button>
            </div>
          </div>
          <Image
            src="./assets/landing-page-1.png"
            alt="Foto Say Hello"
            className="w-full lg:w-2/5 object-cover"
            width={800}
            height={600}
          />
        </div>

        {/* Pilih Umur */}
        <div className="mt-10">
          <p className="text-xl font-bold mb-4">Pilih Umur</p>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {ages.map((age, index) => (
              <AgeButton
                key={index}
                age={age}
                selectedAge={selectedAge}
                handleAgeClick={handleAgeClick}
              />
            ))}
          </div>
        </div>

        {/* Program Tersedia */}
        {selectedAge ? (
          <div className="mt-10">
            <p className="text-xl font-bold mb-4">
              Program Tersedia untuk {selectedAge}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs
                .filter((program) => program.age === selectedAge)
                .map((program, index) => (
                  <ProgramCard key={index} program={program} />
                ))}
            </div>
          </div>
        ) : (
          <div className="mt-10">
            <p className="text-xl font-bold mb-4 text-center">
              Silakan pilih umur untuk melihat program belajar
            </p>
          </div>
        )}
      </div>

      {/* Modal Pop-up */}
      {showModal && (
        <AgeSelectionModal
          ages={ages}
          selectedAge={selectedAge}
          handleAgeClick={handleAgeClick}
          setShowModal={setShowModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default ProgramPage;
