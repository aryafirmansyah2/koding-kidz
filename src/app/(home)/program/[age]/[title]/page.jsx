"use client";

import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const ProgramDetail = () => {
  const { age, title } = useParams();

  return (
    <div>
      <Navbar />
      <div className="font-inter max-w-7xl mx-auto mt-24 mb-24 px-4 py-8 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Program Information */}
          <div className="flex-1 p-5 border-2 rounded-xl">
            <div className="flex justify-start gap-3 mb-5">
              <div className="bg-blue-500 text-white py-2 px-4 rounded-full text-center">
                <p>{age}</p>
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
                src="/assets/kelas-1.png"
                alt="Program Image"
                className="w-16 h-16 mr-4 object-cover rounded-lg"
                width={64}
                height={64}
              />
              <h1 className="font-bold text-2xl">{title.replace(/-/g, " ")}</h1>
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
            <div className="flex items-center justify-between bg-blue-500 p-4 rounded-lg text-white mb-5 cursor-pointer">
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
            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300">
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
              animasi, hingga game
            </p>
            <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
              <Image
                src="/assets/proyek-1.png"
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
                src="/assets/proyek-1.png"
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
              {[
                "Pengenalan Scratch",
                "Membuat Animasi",
                "Membuat Game",
                "Proyek Akhir",
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <p className="text-white font-bold">{index + 1}</p>
                  </div>
                  <div className="flex w-full items-center justify-between p-4 rounded-lg border-2">
                    <p>
                      Level {index + 1} : {item}
                    </p>
                    <FaArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramDetail;
