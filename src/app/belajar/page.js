"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  FaPlay,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaThumbsUp,
  FaReply,
} from "react-icons/fa";
import { useState } from "react";

function Belajar() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      profilePic: "/assets/profile1.jpg",
      username: "Hendrik",
      time: "1 jam yang lalu",
      text: "Saya ingin bertanya, saya tidak paham tentang bagaimana mengatur suara di Scratch",
      likes: 5,
      replies: [
        {
          id: 1,
          profilePic: "/assets/profile2.jpg",
          username: "Tutor",
          time: "30 menit yang lalu",
          text: "Untuk mengatur suara, buka tab 'Sounds' dan pilih opsi yang Anda inginkan.",
        },
      ],
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [isReplying, setIsReplying] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleCommentChange = (e) => setNewComment(e.target.value);
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          profilePic: "/assets/profile1.jpg",
          username: "User",
          time: "Sekarang",
          text: newComment,
          likes: 0,
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  const handleReplyChange = (e) => setReplyText(e.target.value);
  const handleReplySubmit = (commentId) => {
    if (replyText.trim()) {
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: comment.replies.length + 1,
                    profilePic: "/assets/profile2.jpg",
                    username: "User",
                    time: "Sekarang",
                    text: replyText,
                  },
                ],
              }
            : comment
        )
      );
      setReplyText("");
      setIsReplying(null);
    }
  };

  return (
    <>
      <div>
        {/* Header */}
        <Navbar></Navbar>

        <div className="container mx-auto p-4 mt-24">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
            {/* Video Section */}
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <div className="relative pb-[56.25%] mb-4">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video"
                ></iframe>
              </div>
              <div className="flex flex-row items-center justify-between mt-3">
                <div>
                  <p className="text-xl font-bold">Level 1</p>
                  <p className="text-lg">
                    Petualangan Pertama dengan Scratch: Mari Berkenalan!
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300">
                  Lanjut
                </button>
              </div>

              {/* Video Description */}
              <div className="mt-6">
                <p className="text-lg font-bold">Deskripsi Video</p>
                <p className="mt-2 text-gray-700">
                  {isDescriptionExpanded
                    ? "Petualangan Pertama dengan Scratch adalah pengantar yang menyenangkan untuk pemrograman dasar. Dalam video ini, Anda akan belajar tentang konsep dasar Scratch dan membuat proyek pertama Anda. Teruslah eksplorasi dan temukan lebih banyak fitur di Scratch!"
                    : "Petualangan Pertama dengan Scratch adalah pengantar yang menyenangkan untuk pemrograman dasar. Klik 'Selengkapnya' untuk melihat deskripsi lengkap."}
                </p>
                <button
                  onClick={() =>
                    setIsDescriptionExpanded(!isDescriptionExpanded)
                  }
                  className="flex items-center mt-2 text-blue-500 hover:underline"
                >
                  {isDescriptionExpanded ? <FaChevronUp /> : <FaChevronDown />}
                  {isDescriptionExpanded
                    ? "Lihat Lebih Sedikit"
                    : "Selengkapnya"}
                </button>
              </div>
            </div>

            {/* Material Section */}
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <h1 className="text-2xl font-bold mb-6">Materi</h1>
              <div>
                <div className="border-2 border-blue-500 flex text-primary items-center justify-between gap-3 p-5 rounded-xl mb-3">
                  <FaPlay className="text-blue-500 text-2xl" />
                  <p className="flex-grow text-lg">
                    Petualangan Pertama dengan Scratch: Mari Berkenalan!
                  </p>
                  <FaCheck className="text-green-500 text-2xl" />
                </div>
                {/* Add more material items as needed */}
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 flex text-secondaryText items-center justify-between gap-3 p-5 rounded-xl mb-3"
                  >
                    <FaPlay className="text-gray-500 text-2xl" />
                    <p className="flex-grow text-lg">
                      Petualangan Kedua dengan Scratch: Membuat Karakter
                      Bergerak!
                    </p>
                  </div>
                ))}
                <div>
                  <button className="p-5 mx-auto text-center w-full rounded-xl bg-gray-200">
                    Klaim Sertifikat
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Diskusi</h2>
            <div className="mb-4">
              <textarea
                value={newComment}
                onChange={handleCommentChange}
                rows="4"
                placeholder="Tambahkan komentar..."
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
              />
              <button
                onClick={handleCommentSubmit}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300"
              >
                Kirim
              </button>
            </div>
            <div className="border-t border-gray-200 pt-4">
              {comments.map((comment) => (
                <div key={comment.id} className="mb-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={comment.profilePic}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{comment.username}</p>
                        <p className="text-gray-500 text-sm">{comment.time}</p>
                      </div>
                      <p className="mt-2 text-gray-700">{comment.text}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button className="flex items-center text-blue-500 hover:underline">
                          <FaThumbsUp className="mr-1" />
                          {comment.likes}
                        </button>
                        <button
                          onClick={() =>
                            setIsReplying(
                              isReplying === comment.id ? null : comment.id
                            )
                          }
                          className="flex items-center text-blue-500 hover:underline"
                        >
                          <FaReply className="mr-1" />
                          Reply
                        </button>
                      </div>
                      {isReplying === comment.id && (
                        <div className="mt-4">
                          <textarea
                            value={replyText}
                            onChange={handleReplyChange}
                            rows="3"
                            placeholder="Tambahkan balasan..."
                            className="w-full p-3 border-2 border-gray-300 rounded-lg"
                          />
                          <button
                            onClick={() => handleReplySubmit(comment.id)}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300"
                          >
                            Kirim
                          </button>
                        </div>
                      )}
                      {/* Render replies */}
                      <div className="mt-4">
                        {comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="flex items-start gap-4 mb-4"
                          >
                            <img
                              src={reply.profilePic}
                              alt="Profile"
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-grow">
                              <div className="flex items-center justify-between">
                                <p className="font-semibold">
                                  {reply.username}
                                </p>
                                <p className="text-gray-500 text-sm">
                                  {reply.time}
                                </p>
                              </div>
                              <p className="mt-2 text-gray-700">{reply.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content
        <main className="flex-grow mt-24">
          <section className="md:mt-0 md:mx-0 md:mb-[150px] xs:mt-0 xs:mx-0 xs:mb-20 tn:mt-0 tn:mx-0 tn:mb-[50px] flex flex-col mb-[209px]">
           
            <div className="lg:flex-col lg:items-center lg:gap-y-[30px] tn:mt-0 tn:mx-auto tn:mb-[50px] w-[88.33%] flex justify-between gap-x-2.5 max-w-[1271.9500732421875px] mx-auto mb-[57px]">
            
              <div className="lg:w-full lg:min-w-[unset] w-[788px] flex flex-col items-center gap-y-10 min-w-0">
              
                <figure
                  className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-2xl outline outline-[rgb(217,217,217)] outline-[3px] w-[99.11%]"
                  style={{
                    "--src": `url(${"/assets/9c96f03ff67271c719746119eb07c706.png"})`,
                  }}
                >
                
                  <img
                    className="xl:mt-[170px] xl:mx-auto xl:mb-[169px] md:my-[150px] md:mx-auto xs:my-20 xs:mx-auto tn:my-[50px] tn:mx-auto w-[78px] h-[82px] object-cover max-w-[85%] mt-[170px] mr-[352px] mb-[169px] ml-[351px]"
                    src={"/assets/3cf01ac3001ca378947835fd83505f01.svg"}
                    alt="alt text"
                  />
                </figure>
                <div className="w-[98.98%] flex flex-col gap-y-[31px]">
                  
                  <div className="sm:flex-col sm:gap-y-[30px] flex items-center gap-x-px">
                    
                    <div className="sm:w-full sm:min-w-[unset] w-[652px] flex flex-col gap-y-2 min-w-0">
                 
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
                      Temukan dasar-dasar Scratch dan mulai petualangan coding
                      pertamamu. Belajar cara menggunakan blok dan membuat
                      proyek sederhana!
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
                          src={"/assets/7ad36fb45645f6d62da38eda27ec0271.svg"}
                          alt="alt text"
                        />
                        <h3 className="md:text-[18px] xxs:text-[16px] flex items-center font-normal text-[20px] leading-normal font-Inter text-[rgb(132,121,121)]">
                          Tanyakan kepada tutor
                        </h3>
                        <img
                          className="w-6 h-6 object-cover"
                          src={"/assets/e270291bee383fa36e3fd7b069cd663a.svg"}
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
                          src={"/assets/7ad36fb45645f6d62da38eda27ec0271.svg"}
                          alt="alt text"
                        />
                        <h3 className="md:text-[18px] xxs:text-[16px] flex items-center font-bold text-[20px] leading-normal font-Inter text-[rgb(37,37,37)]">
                          Hendrik
                        </h3>
                      </div>
                      <h3 className="md:text-[18px] xxs:text-[16px] flex items-center font-normal text-[20px] leading-normal font-Inter text-[rgb(37,37,37)]">
                        Saya ingin bertanya, saya tidak paham tentang bagaimana
                        mengatur suara di Scratch
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
                      src={"/assets/8287b6833e766fe94df7b2bb2c06b598.svg"}
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
                      src={"/assets/3ac3085960161126133909b89a96e580.svg"}
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
                      src={"/assets/3ac3085960161126133909b89a96e580.svg"}
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
                      src={"/assets/3ac3085960161126133909b89a96e580.svg"}
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
                      src={"/assets/3ac3085960161126133909b89a96e580.svg"}
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
                      src={"/assets/b5bf7367098e0ce87e236a291b61ec55.svg"}
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
        </main> */}
        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Belajar;
