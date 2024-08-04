import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

import { FaBook, FaStar, Fa } from "react-icons/fa";

const HomePage = () => {
  const services = [
    {
      icon: <FaBook />,
      title: "Belajar Interaktif",
      description:
        "Pelajari coding dengan metode interaktif yang menyenangkan.",
    },
    {
      icon: <FaStar />,
      title: "Program Unggulan",
      description:
        "Ikuti program-program unggulan kami untuk pengalaman belajar yang optimal.",
    },
    {
      icon: <FaStar />,
      title: "Tutor Menyenangkan",
      description:
        "Belajar bersama tutor yang menyenangkan dan mudah untuk dipahami, khusus untuk kamu.",
    },
  ];

  const features = [
    {
      icon: <FaBook />,
      title: "Belajar Interaktif",
      description:
        "Pelajari coding dengan metode interaktif yang menyenangkan.",
    },
    {
      icon: <FaStar />,
      title: "Program Unggulan",
      description:
        "Ikuti program-program unggulan kami untuk pengalaman belajar yang optimal.",
    },
    {
      icon: <FaStar />,
      title: "Program Unggulan",
      description:
        "Ikuti program-program unggulan kami untuk pengalaman belajar yang optimal.",
    },
    {
      icon: <FaStar />,
      title: "Program Unggulan",
      description:
        "Ikuti program-program unggulan kami untuk pengalaman belajar yang optimal.",
    },
  ];

  const testimonials = [
    {
      name: "Adinda Maharani",
      feedback:
        "Anak saya senang sekali belajar tentang pemrograman di KodingKidz. Saya ingin merekomendasikan ke orang tua lainnya untuk mulai belajar pemrograman untuk anak Anda!",
      image: "/assets/testimoni-1.png",
    },
    {
      name: "Adinda Maharani",
      feedback:
        "Anak saya senang sekali belajar tentang pemrograman di KodingKidz. Saya ingin merekomendasikan ke orang tua lainnya untuk mulai belajar pemrograman untuk anak Anda!",
      image: "/assets/testimoni-2.png",
    },
    {
      name: "Adinda Maharani",
      feedback:
        "Anak saya senang sekali belajar tentang pemrograman di KodingKidz. Saya ingin merekomendasikan ke orang tua lainnya untuk mulai belajar pemrograman untuk anak Anda!",
      image: "/assets/testimoni-3.png",
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto lg:p-20 p-6 mt-20 mb-16 ">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 justify-between">
          <div className="w-full lg:w-1/2">
            <p className="text-2xl font-bold xl:text-4xl leading-relaxed">
              Mulai Petualangan Belajar Seru Bersama KodingKidz
            </p>
            <p className="py-3 leading-relaxed">
              Belajar coding seru dan interaktif untuk anak-anak dengan
              permainan dan animasi menarik!
            </p>
            <div className="flex gap-6">
              <button className="px-6 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300">
                Mulai
              </button>
              <button className="px-6 py-4 border border-blue-500 text-primary rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
                Lihat Program
              </button>
            </div>
          </div>
          <Image
            src="/assets/landing-page-1.png" // Path relative to `public`
            alt="Foto Say Hello"
            className="w-3/6 lg:w-2/5 object-cover"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-5 rounded-xl flex flex-col items-center hover:shadow-2xl hover:border hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="p-5 w-fit rounded-full text-primary bg-blue-200 mb-4 flex items-center justify-center">
                {/* Mengganti FontAwesomeIcon dengan React Icons */}
                {service.icon}
              </div>
              <div className="text-center">
                <p className="font-black text-xl mb-2">{service.title}</p>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto p-4 mt-24 flex flex-col lg:flex-row items-center gap-5 justify-between">
          <Image
            src="/assets/landing-page-2.png" // Path relative to `public`
            alt="Foto Say Hello"
            className="w-3/6 lg:w-2/5 object-cover"
            width={500} // Adjust width as needed
            height={500}
          ></Image>

          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <p className="text-2xl">
                <span className="font-black text-blue-500">Lebih Sekadar</span>{" "}
                Belajar Coding
              </p>
              <p className="mt-3">
                KodingKidz menyediakan berbagai metode pembelajaran yang
                disesuaikan dengan kemampuan anak, meliputi video pembelajaran
                interaktif dan pembelajaran berbasis proyek menarik
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 bg-white border-2 p-4 rounded-xl hover:shadow-2xl hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  <div className="p-2 text-blue-500 text-2xl">
                    {feature.icon}
                  </div>

                  <div>
                    <p className="font-extrabold">{feature.title}</p>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 px-4 lg:px-0">
          <div className="mb-6 text-center">
            <p className="text-2xl font-extrabold">
              Program Belajar <span className="text-blue-500">Unggulan</span>
            </p>
            <p className="mt-2 text-gray-600">
              KodingKidz menyediakan program belajar yang variatif dan sesuai
              dengan umur dan kemampuan anak, sehingga lebih eksploratif dan
              banyak pilihan belajar
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-5 rounded-xl shadow-md hover:shadow-lg hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/assets/kelas-1.png"
                    alt="Program Image"
                    className="w-16 h-16 object-cover"
                    width={64} // Adjust width as needed
                    height={64} // Adjust height as needed
                  />
                  <p className="font-bold text-xl text-gray-800">
                    Belajar Scratch Untuk Pemula
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  Belajar Scratch untuk usia 9-12 tahun dengan membuat game
                  sederhana
                </p>
                <div className="flex gap-3">
                  <button className="py-3 px-6 border-2 border-blue-500 rounded-xl text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
                    Detail
                  </button>
                  <button className="py-3 px-6 border-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-all duration-300">
                    Langganan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <div className="mb-4 text-center">
            <p className="font-extrabold text-2xl mb-3">
              Apa yang <span className="text-blue-500">Mereka Katakan?</span>
            </p>
            <p>
              Pandangan pengguna tentang pengalaman belajar dengan KodingKidz,
              gabung untuk menjadi bagian dari pengalaman menarik dan seru
              bersama KodingKidz.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border-2 text-center hover:shadow-2xl hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial from ${testimonial.name}`}
                  className="mx-auto mb-3"
                />
                <p className="font-extrabold text-xl mb-2">
                  {testimonial.name}
                </p>
                <p className="mb-2">{testimonial.feedback}</p>
                <div className="flex justify-center gap-3 text-primary text-[20px]">
                  {[...Array(5)].map((_) => (
                    <FaStar />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
