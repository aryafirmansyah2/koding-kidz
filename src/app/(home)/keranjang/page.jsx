'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';

const Keranjang = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Pengenalan Scratch',
      age: '5-7 Tahun',
      price: 99000,
      duration: '3 Bulan',
      level: 'Pemula',
    },
    {
      id: 2,
      title: 'Pengenalan Scratch',
      age: '5-7 Tahun',
      price: 99000,
      duration: '3 Bulan',
      level: 'Pemula',
    },
    // Add more items as needed
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleItemChange = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((item) => item !== id));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    toggleModal();
  };

  const calculateTotal = () => {
    const subtotal = selectedItems.reduce(
      (total, id) => total + cartItems.find((item) => item.id === id).price,
      0
    );
    const ppn = subtotal * 0.11;
    const total = subtotal + ppn;
    return { subtotal, ppn, total };
  };

  const { subtotal, ppn, total } = calculateTotal();

  return (
    <div>
      <Navbar />
      <div className="font-inter max-w-7xl mx-auto mt-24 mb-24 px-4 py-8 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Keranjang</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="flex-1 p-5 border-2 rounded-xl">
            <h2 className="text-xl font-semibold mb-5">Daftar Produk</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Keranjang Anda kosong.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleItemChange(item.id)}
                    className="mr-4"
                  />
                  <div className="flex-1 flex items-center">
                    <Image
                      src="./assets/kelas-1.png"
                      alt="Program Image"
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                      width={64}
                      height={64}
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        {item.age} - {item.level} - {item.duration}
                      </p>
                      <p className="text-sm font-bold">Rp{item.price}</p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 ml-4"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Summary and Payment Method */}
          <div className="flex-1 p-5 border-2 rounded-xl lg:max-w-sm">
            <h2 className="text-xl font-semibold mb-5">Ringkasan Produk</h2>
            <div className="flex justify-between mb-3">
              <p>Subtotal</p>
              <p>Rp{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-3">
              <p>PPN (11%)</p>
              <p>Rp{ppn.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-semibold mb-5">
              <p>TOTAL</p>
              <p>Rp{total.toFixed(2)}</p>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-3 rounded-lg mb-3 hover:bg-blue-600 transition-all duration-300"
              onClick={handleCheckout}
            >
              Lanjut Bayar
            </button>
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
    </div>
  );
};

export default Keranjang;
