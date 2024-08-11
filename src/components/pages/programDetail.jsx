'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const ProgramDetailPage = ({ params }) => {
  const { age, title } = params;
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const handleLevelClick = (level) => {
    setSelectedLevel(level === selectedLevel ? null : level);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSaveToCart = () => {
    // Logic to save the program to cart
    // For example, using localStorage or an API call to save the item to the user's cart
    setShowCartNotification(true);
  };

  const handleViewCart = () => {
    setShowCartNotification(false);
    router.push('/keranjang'); // Redirect to the cart page
  };

  const levelDetails = [
    {
      title: 'Pengenalan Scratch',
      videoId: 'VIDEO_ID_1', // Replace with actual YouTube video IDs
      description:
        'Pengenalan dasar-dasar Scratch, termasuk antarmuka dan alat dasar yang digunakan.',
    },
    {
      title: 'Membuat Animasi',
      videoId: 'VIDEO_ID_2',
      description:
        'Cara membuat animasi sederhana menggunakan Scratch, termasuk penggunaan sprite dan latar belakang.',
    },
    {
      title: 'Membuat Game',
      videoId: 'VIDEO_ID_3',
      description:
        'Langkah-langkah untuk membuat game interaktif dengan Scratch, termasuk logika permainan dan kontrol.',
    },
    {
      title: 'Proyek Akhir',
      videoId: 'VIDEO_ID_4',
      description:
        'Proyek akhir untuk mengaplikasikan semua yang telah dipelajari dalam satu proyek besar.',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="font-inter max-w-7xl mx-auto mt-24 mb-24 px-4 py-8 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Program Information */}
          <div className="flex-1 p-5 border-2 rounded-xl">
            <div className="flex justify-start gap-3 mb-5">
              <div className="bg-blue-500 text-white py-2 px-4 rounded-full text-center">
                <p>{decodeURIComponent(age)}</p>
              </div>
              <div className="bg-white border-2 text-primary border-blue-500 py-2 px-4 rounded-full text-center">
                <p>Level Pemula</p>
              </div>
              <div className="bg-white border-2 text-primary border-blue-500 py-2 px-4 rounded-full text-center">
                <p>3 Bulan</p>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <Image
                src="./assets/kelas-1.png"
                alt="Program Image"
                className="w-16 h-16 mr-4 object-cover rounded-lg"
                width={64}
                height={64}
              />
              <h1 className="font-bold text-2xl">{title.replace(/-/g, ' ')}</h1>
            </div>
            <div className="mb-5">
              <p>
                Mengenalkan dasar coding melalui bahasa pemrograman visual
                dengan platform ScratchJR, anak akan membuat karya digital
                berupa story, animasi, dan game.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-3">Benefit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ul className="space-y-3">
                  <li className="flex gap-3 items-center">
                    <FaCheck className="text-green-500" />
                    Video Pembelajaran
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheck className="text-green-500" />
                    Kuis Interaktif
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-center">
                    <FaCheck className="text-green-500" />
                    Proyek Akhir Sederhana
                  </li>
                  <li className="flex gap-3 items-center">
                    <FaCheck className="text-green-500" />
                    Diskusi Bersama Tutor
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Summary */}
          <div className="flex-1 p-5 border-2 rounded-xl lg:max-w-sm">
            <h2 className="text-xl font-semibold mb-3">Ringkasan Produk</h2>
            <p className="text-lg font-medium mb-2">
              Paket Belajar Scratch Untuk Pemula
            </p>
            <p className="text-lg font-bold mb-5">Rp99.000</p>
            <div
              className="flex items-center justify-between bg-blue-500 p-4 rounded-lg text-white mb-5 cursor-pointer"
              onClick={toggleModal}
            >
              <p className="font-medium">Pilih Metode Pembayaran</p>
              <FaArrowRight />
            </div>
            <div className="flex justify-between mb-3">
              <p>Subtotal</p>
              <p>Rp99.000</p>
            </div>
            <div className="flex justify-between mb-3">
              <p>PPN (11%)</p>
              <p>Rp10.890</p>
            </div>
            <div className="flex justify-between font-semibold mb-5">
              <p>TOTAL</p>
              <p>Rp109.890</p>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3 hover:bg-blue-600 transition-all duration-300">
              Lanjut Bayar
            </button>
            <button
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300"
              onClick={handleSaveToCart}
            >
              Simpan ke Keranjang
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10">
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              Seperti Apa Proyek di ScratchJr untuk Level Pemula?
            </h2>
            <p className="mb-5">
              Mengenalkan dasar coding melalui bahasa pemrograman visual dengan
              platform ScratchJr, anak akan membuat karya digital berupa story,
              animasi, hingga game.
            </p>
            <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
              <Image
                src="../assets/proyek-1.png"
                alt="Proyek 1"
                className="w-56 h-32 object-cover rounded-lg"
                width={128}
                height={128}
              />
              <Image
                src="/assets/proyek-1.png"
                alt="Proyek 2"
                className="w-56 h-32 object-cover rounded-lg"
                width={128}
                height={128}
              />
              <Image
                src="./assets/proyek-1.png"
                alt="Proyek 3"
                className="w-56 h-32 object-cover rounded-lg"
                width={128}
                height={128}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              Belajar Apa Aja di Program Scratch Untuk Pemula
            </h2>
            <p className="mb-5">
              Mengenalkan dasar coding melalui bahasa pemrograman visual dengan
              platform ScratchJr, anak akan membuat karya digital berupa story,
              animasi, hingga game.
            </p>
            <div className="space-y-4">
              {levelDetails.map((level, index) => (
                <div key={index} className="border-2 rounded-lg mb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer border-b-2 p-4"
                    onClick={() => handleLevelClick(level.title)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                        <p className="text-white font-bold">{index + 1}</p>
                      </div>
                      <p className="font-medium">{level.title}</p>
                    </div>
                    <FaArrowRight
                      className={`transform transition-transform ${
                        selectedLevel === level.title ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                  {selectedLevel === level.title && (
                    <div className="p-4 border-t-0">
                      <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-4">
                          <div className="relative aspect-w-16 aspect-h-9">
                            <iframe
                              className="w-full h-full rounded-lg"
                              src={`https://www.youtube.com/embed/${level.videoId}`}
                              title={level.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                          <p>{level.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Payment Method Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={toggleModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Pilih Metode Pembayaran
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" id="payment1" />
                <label htmlFor="payment1" className="cursor-pointer">
                  Transfer Bank
                </label>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" id="payment2" />
                <label htmlFor="payment2" className="cursor-pointer">
                  Kartu Kredit/Debit
                </label>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" id="payment3" />
                <label htmlFor="payment3" className="cursor-pointer">
                  E-Wallet
                </label>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
              Lanjutkan
            </button>
          </div>
        </div>
      )}

      {/* Cart Notification Modal */}
      {showCartNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowCartNotification(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Berhasil Menyimpan ke Keranjang
            </h2>
            <p className="mb-4">
              Program belajar telah berhasil disimpan ke keranjang.
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 w-full"
              onClick={handleViewCart}
            >
              Lihat Keranjang
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramDetailPage;
