import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from 'react';

function belajar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar></Navbar>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="md:mt-0 md:mx-0 md:mb-[150px] xs:mt-0 xs:mx-0 xs:mb-20 tn:mt-0 tn:mx-0 tn:mb-[50px] flex flex-col mb-[209px]">
          {/* Section that introduces the topic of Scratch and provides an overview of the content. */}
          <div className="lg:flex-col lg:items-center lg:gap-y-[30px] tn:mt-0 tn:mx-auto tn:mb-[50px] w-[88.33%] flex justify-between gap-x-2.5 max-w-[1271.9500732421875px] mx-auto mb-[57px]">
            {/* Container for the main content layout consisting of multiple columns. */}
            <div className="lg:w-full lg:min-w-[unset] w-[788px] flex flex-col items-center gap-y-10 min-w-0">
              {/* Main column for introductory content and descriptions. */}
              <figure
                className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-2xl outline outline-[rgb(217,217,217)] outline-[3px] w-[99.11%]"
                style={{ '--src': `url(${'/assets/9c96f03ff67271c719746119eb07c706.png'})` }}>
                {/* Container for images representing the content. */}
                <img
                  className="xl:mt-[170px] xl:mx-auto xl:mb-[169px] md:my-[150px] md:mx-auto xs:my-20 xs:mx-auto tn:my-[50px] tn:mx-auto w-[78px] h-[82px] object-cover max-w-[85%] mt-[170px] mr-[352px] mb-[169px] ml-[351px]"
                  src={'/assets/3cf01ac3001ca378947835fd83505f01.svg'}
                  alt="alt text"
                />
              </figure>
              <div className="w-[98.98%] flex flex-col gap-y-[31px]">
                {/* Column that includes the description and discussion sections. */}
                <div className="sm:flex-col sm:gap-y-[30px] flex items-center gap-x-px">
                  {/* Row that contains the title and 'Continue' button. */}
                  <div className="sm:w-full sm:min-w-[unset] w-[652px] flex flex-col gap-y-2 min-w-0">
                    {/* Column for the title of the section. */}
                    <h3 className="md:text-[18px] md:items-start xxs:text-[16px] font-normal text-[20px] leading-[1.2] font-Inter text-[rgb(37,37,37)] tracking-[-0.5px]">
                      Level 1
                    </h3>
                    <h1 className="md:text-[30px] md:items-start xxs:text-[26px] font-semibold text-[32px] leading-[1.21] font-Inter text-[rgb(37,37,37)]">
                      Petualangan Pertama dengan Scratch: Mari Berkenalan!
                    </h1>
                  </div>
                  <button className="sm:w-full sm:min-w-[unset] flex justify-center font-bold text-[18px] leading-none font-Inter text-white text-center bg-[rgb(71,143,243)] rounded-xl shadow-[0px_4px_4px_-4px_rgba(12,_12,_13,_0.05)] pt-5 pr-9 pb-5 pl-9 min-w-[127px]">
                    Lanjut
                  </button>
                </div>
                <div className="flex flex-col gap-y-3.5">
                  <h2 className="md:text-[22px] md:items-start xxs:text-[20px] font-semibold text-[24px] leading-[1.2] font-Inter text-[rgb(37,37,37)]">
                    Deskripsi
                  </h2>
                  <h3 className="md:text-[18px] md:items-start xxs:text-[16px] font-normal text-[20px] leading-normal font-Inter text-[rgb(37,37,37)]">
                    Temukan dasar-dasar Scratch dan mulai petualangan coding pertamamu. Belajar cara menggunakan blok dan membuat proyek sederhana!
                  </h3>
                </div>
                <div className="flex flex-col gap-y-[31px]">
                  <h2 className="md:text-[22px] md:items-start xxs:text-[20px] font-semibold text-[24px] leading-[1.2] font-Inter text-[rgb(37,37,37)]">
                    Diskusi
                  </h2>
                  <div className="flex flex-col bg-white border-solid border-[rgb(217,217,217)] border-t-[0px] border-r-[0px] border-b-[1px] border-l-[0px]">
                    <div className="xs:my-6 xs:mx-4 tn:my-6 tn:mx-2 tn:gap-x-2 flex justify-between items-center gap-x-2.5 m-6">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src={'/assets/7ad36fb45645f6d62da38eda27ec0271.svg'}
                        alt="alt text"
                      />
                      <h3 className="md:text-[18px] xxs:text-[16px] flex items-center font-normal text-[20px] leading-normal font-Inter text-[rgb(132,121,121)]">
                        Tanyakan kepada tutor
                      </h3>
                      <img
                        className="w-6 h-6 object-cover"
                        src={'/assets/e270291bee383fa36e3fd7b069cd663a.svg'}
                        alt="alt text"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col bg-white rounded-lg outline outline-[rgb(217,217,217)] outline-1 outline-offset-[-1px]">
                  <div className="xs:my-6 xs:mx-4 tn:my-6 tn:mx-2 flex flex-col gap-y-4 m-6">
                    <div className="tn:gap-x-2 flex items-center gap-x-4">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src={'/assets/7ad36fb45645f6d62da38eda27ec0271.svg'}
                        alt="alt text"
                      />
                      <h3 className="md:text-[18px] xxs:text-[16px] flex items-center font-bold text-[20px] leading-normal font-Inter text-[rgb(37,37,37)]">
                        Hendrik
                      </h3>
                    </div>
                    <h3 className="md:text-[18px] xxs:text-[16px] flex items-center font-normal text-[20px] leading-normal font-Inter text-[rgb(37,37,37)]">
                      Saya ingin bertanya, saya tidak paham tentang bagaimana mengatur suara di Scratch
                    </h3>
                    <h3 className="md:text-[18px] xxs:text-[16px] flex items-center font-normal text-[20px] leading-normal font-Inter text-[rgb(71,143,243)]">
                      Lihat Balasan
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-full lg:min-w-[unset] lg:m-0 w-[442px] flex flex-col gap-y-6 min-w-0 mb-[282px]">
              <h1 className="md:text-[30px] md:items-start xxs:text-[26px] font-bold text-[32px] leading-normal font-Inter text-[rgb(37,37,37)]">
                Materi
              </h1>
              <div className="flex flex-col bg-white rounded-3xl outline outline-[rgb(71,143,243)] outline-1 outline-offset-[-1px]">
                <div className="xs:my-6 xs:mx-4 xxs:flex-col xxs:gap-y-[30px] tn:my-6 tn:mx-2 flex items-center gap-x-4 m-6">
                  <img
                    className="xxs:w-full xxs:max-w-[36px] w-9 h-[38px] object-cover"
                    src={'/assets/8287b6833e766fe94df7b2bb2c06b598.svg'}
                    alt="alt text"
                  />
                  <p className="md:text-[16px] md:items-start xxs:w-full font-normal text-[18px] leading-normal font-Inter text-[rgb(71,143,243)] w-[301px]">
                    Petualangan Pertama dengan Scratch : Mari Berkenalan!
                  </p>
                  <div className="xxs:w-full rounded-[7px] outline outline-[rgb(71,143,243)] outline-2 w-[25px] h-[25px] min-h-[25px]" />
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-3xl">
                <div className="xs:my-6 xs:mx-4 tn:my-6 tn:mx-2 tn:gap-x-2 flex items-center gap-x-4 m-6">
                  <img
                    className="w-9 h-[38px] object-cover"
                    src={'/assets/3ac3085960161126133909b89a96e580.svg'}
                    alt="alt text"
                  />
                  <p className="md:text-[16px] md:items-start font-normal text-[18px] leading-normal font-Inter text-[rgb(132,121,121)] w-[342px]">
                    Petualangan Pertama dengan Scratch : Mari Berkenalan!
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-3xl">
                <div className="xs:my-6 xs:mx-4 tn:my-6 tn:mx-2 tn:gap-x-2 flex items-center gap-x-4 m-6">
                  <img
                    className="w-9 h-[38px] object-cover"
                    src={'/assets/3ac3085960161126133909b89a96e580.svg'}
                    alt="alt text"
                  />
                  <p className="md:text-[16px] md:items-start font-normal text-[18px] leading-normal font-Inter text-[rgb(132,121,121)] w-[342px]">
                    Petualangan Pertama dengan Scratch : Mari Berkenalan!
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-3xl">
                <div className="xs:my-6 xs:mx-4 tn:my-6 tn:mx-2 tn:gap-x-2 flex items-center gap-x-4 m-6">
                  <img
                    className="w-9 h-[38px] object-cover"
                    src={'/assets/3ac3085960161126133909b89a96e580.svg'}
                    alt="alt text"
                  />
                  <p className="md:text-[16px] md:items-start font-normal text-[18px] leading-normal font-Inter text-[rgb(132,121,121)] w-[342px]">
                    Petualangan Pertama dengan Scratch : Mari Berkenalan!
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-3xl">
                <div className="xs:my-6 xs:mx-4 tn:my-6 tn:mx-2 tn:gap-x-2 flex items-center gap-x-4 m-6">
                  <img
                    className="w-9 h-[38px] object-cover"
                    src={'/assets/3ac3085960161126133909b89a96e580.svg'}
                    alt="alt text"
                  />
                  <p className="md:text-[16px] md:items-start font-normal text-[18px] leading-normal font-Inter text-[rgb(132,121,121)] w-[342px]">
                    Petualangan Pertama dengan Scratch : Mari Berkenalan!
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-3xl">
                <div className="xs:my-6 xs:mx-4 tn:my-6 tn:mx-2 tn:gap-x-2 flex items-center gap-x-4 m-6">
                  <img
                    className="w-9 h-9 object-cover"
                    src={'/assets/b5bf7367098e0ce87e236a291b61ec55.svg'}
                    alt="alt text"
                  />
                  <p className="md:text-[16px] md:items-start font-normal text-[18px] leading-normal font-Inter text-[rgb(132,121,121)]">
                    Kuis
                  </p>
                </div>
              </div>
              <button className="flex justify-center font-bold text-[17px] leading-[1.23] font-Inter text-[rgb(255,247,247)] text-center bg-[rgb(175,175,175)] rounded-lg pt-4 pr-2 pb-4 pl-2">
                Klaim Sertifikat
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default belajar;
