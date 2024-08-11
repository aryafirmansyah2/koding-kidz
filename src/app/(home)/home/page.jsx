import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import React from 'react';

import {
  FaBook,
  FaStar,
  FaGamepad,
  FaVideo,
  FaGraduationCap,
  FaComment,
} from 'react-icons/fa';

const HomePage = () => {
  const services = [
    {
      icon: <FaBook />,
      title: 'Belajar Interaktif',
      description:
        'Pelajari coding dengan metode interaktif yang menyenangkan.',
    },
    {
      icon: <FaStar />,
      title: 'Program Unggulan',
      description:
        'Ikuti program-program unggulan kami untuk pengalaman belajar yang optimal.',
    },
    {
      icon: <FaGamepad />,
      title: 'Tutor Menyenangkan',
      description:
        'Belajar bersama tutor yang menyenangkan dan mudah untuk dipahami, khusus untuk kamu.',
    },
  ];

  const features = [
    {
      icon: <FaVideo />,
      title: 'Video Pembelajaran Interaktif',
      description:
        'Video pembelajaran seru dengan tutor yang seru dan menyenangkan',
    },
    {
      icon: <FaComment />,
      title: 'Forum Diskusi dengan Tutor',
      description: 'Diskusi bersama tutor untuk masalah belajar anak.',
    },
    {
      icon: <FaGamepad />,
      title: 'Pembelajaran Berbasis Proyek',
      description:
        'Tugas akhir berbasis proyek sederhana dan menyenangkan untuk klaim sertifikat',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Kuis Asah Kemampuan Anak',
      description: 'Kuis untuk menunjang kemampuan anak dalam belajar',
    },
  ];

  const programs = [
    {
      title: 'Belajar Scratch Untuk Pemula',
      description:
        'Belajar Scratch untuk usia 9-12 tahun dengan membuat game sederhana',
      image: '/assets/kelas-1.png',
    },
    {
      title: 'Minecraft Education',
      description:
        'Memahami dasar-dasar pemrograman Python untuk anak usia 12-15 tahun',
      image: '/assets/kelas-2.png',
    },
    {
      title: 'Roblox Studio',
      description:
        'Membangun situs web sederhana dengan HTML dan CSS untuk anak usia 10-13 tahun',
      image: '/assets/kelas-3.png',
    },
  ];

  const testimonials = [
    {
      name: 'Adinda Maharani',
      feedback:
        'Anak saya senang sekali belajar tentang pemrograman di KodingKidz. Saya ingin merekomendasikan ke orang tua lainnya untuk mulai belajar pemrograman untuk anak Anda!',
      image: '/assets/testimoni-1.png',
    },
    {
      name: 'Brandon Salim',
      feedback:
        'Anak saya senang sekali belajar tentang pemrograman di KodingKidz. Saya ingin merekomendasikan ke orang tua lainnya untuk mulai belajar pemrograman untuk anak Anda!',
      image: '/assets/testimoni-2.png',
    },
    {
      name: 'Alexandria Miranda',
      feedback:
        'Anak saya senang sekali belajar tentang pemrograman di KodingKidz. Saya ingin merekomendasikan ke orang tua lainnya untuk mulai belajar pemrograman untuk anak Anda!',
      image: '/assets/testimoni-3.png',
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto lg:p-20 p-6 mt-20 mb-16 text-primaryText ">
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
              <button className="px-6 py-4 shadow-main-shadow bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300">
                Mulai
              </button>
              <button className="px-6 py-4 border shadow-main-shadow border-blue-500 text-primary rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
                Lihat Program
              </button>
            </div>
          </div>
          <Image
            src="./assets/landing-page-1.png" // Path relative to `public`
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
              className="bg-white shadow-main-shadow p-5 rounded-xl flex flex-col items-center hover:shadow-xl hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="p-5 w-fit rounded-full text-primary text-2xl bg-blue-200 mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <div className="text-center">
                <p className="font-bold hover:text-primary cursor-auto text-xl mb-2">
                  {service.title}
                </p>
                <p className="text-secondaryText">{service.description}</p>
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
              <p className="text-2xl font-bold text-primaryText">
                <span className="font-bold text-primary">Lebih Sekadar</span>{' '}
                Belajar Coding
              </p>
              <p className="mt-3 text-secondaryText">
                KodingKidz menyediakan berbagai metode pembelajaran yang
                disesuaikan dengan kemampuan anak, meliputi video pembelajaran
                interaktif dan pembelajaran berbasis proyek menarik
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 bg-white shadow-main-shadow p-4 rounded-xl hover:shadow-xl hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  <div className="p-2 text-primary text-2xl">
                    {feature.icon}
                  </div>

                  <div>
                    <p className="font-semibold text-primaryText leading-8">
                      {feature.title}
                    </p>
                    <p className="text-secondaryText">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 mb-24 px-4 lg:px-0">
          <div className="mb-6 text-center">
            <p className="text-2xl font-bold">
              Program Belajar <span className="text-primary">Unggulan</span>
            </p>
            <p className="mt-2 text-secondaryText">
              KodingKidz menyediakan program belajar yang variatif dan sesuai
              dengan umur dan kemampuan anak, sehingga lebih eksploratif dan
              banyak pilihan belajar
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border-gray-200 p-5 rounded-xl shadow-main-shadow hover:shadow-xl hover:border-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={program.image}
                    alt="Program Image"
                    className="w-16 h-16 object-cover"
                    width={64}
                    height={64}
                  />
                  <p className="font-bold text-xl text-gray-800">
                    {program.title}
                  </p>
                </div>
                <p className="text-secondaryText mb-4">{program.description}</p>
                <div className="flex gap-3">
                  <button className="py-3 px-6 w-full border-2 font-semibold border-blue-500 rounded-xl text-primary hover:bg-blue-500 hover:text-white transition-all duration-300">
                    Detail
                  </button>
                  <button className="py-3 px-6 w-full bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-all duration-300">
                    Langganan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <div className="mb-4 text-center">
            <p className="font-bold text-2xl mb-3">
              Apa yang <span className="text-primary">Mereka Katakan?</span>
            </p>
            <p className="text-secondaryText">
              Pandangan pengguna tentang pengalaman belajar dengan KodingKidz,
              gabung untuk menjadi bagian dari pengalaman menarik dan seru
              bersama KodingKidz.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-5 rounded-lg shadow-main-shadow text-center hover:shadow-xl  transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <Image
                  src={testimonial.image}
                  alt="Testimonial Image"
                  className="w-16 h-16 object-cover mx-auto mb-3"
                  width={64}
                  height={64}
                />
                <p className="font-semibold text-xl mb-2">{testimonial.name}</p>
                <p className="mb-2 text-secondaryText">
                  {testimonial.feedback}
                </p>
                <div className="flex justify-center gap-3 mt-3 text-[#F9D131] text-[20px]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-blue-100 shadow-main-shadow p-5 rounded-xl text-center">
          <div className="mb-4">
            <p className="text-xl font-bold">
              <span className="text-primary">Mulai Belajar Sekarang </span>
              dan Ikuti Program Menarik Bersama KodingKidz!
            </p>
            <p className=" mt-2 text-secondaryText">
              Bersama KodingKidz, ciptakan generasi emas yang berwawasan luas
              dan menjadikan Indonesia unggul dalam teknologi.
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <button className="bg-blue-500 text-white py-4 px-8 rounded-xl hover:bg-blue-600 transition-all duration-300">
              Mulai
            </button>
            <button className="border-2 border-blue-500 py-4 px-8 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
              Lihat Program
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
