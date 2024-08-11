'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  FaPlay,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaThumbsUp,
  FaReply,
} from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

function Belajar() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      profilePic: './assets/profile1.jpg',
      username: 'Hendrik',
      time: '1 jam yang lalu',
      text: 'Saya ingin bertanya, saya tidak paham tentang bagaimana mengatur suara di Scratch',
      likes: 5,
      replies: [
        {
          id: 1,
          profilePic: './assets/profile2.jpg',
          username: 'Tutor',
          time: '30 menit yang lalu',
          text: "Untuk mengatur suara, buka tab 'Sounds' dan pilih opsi yang Anda inginkan.",
        },
      ],
    },
  ]);
  const [newComment, setNewComment] = useState('');
  const [isReplying, setIsReplying] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleCommentChange = (e) => setNewComment(e.target.value);
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          profilePic: './assets/profile1.jpg',
          username: 'User',
          time: 'Sekarang',
          text: newComment,
          likes: 0,
          replies: [],
        },
      ]);
      setNewComment('');
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
                    profilePic: './assets/profile2.jpg',
                    username: 'User',
                    time: 'Sekarang',
                    text: replyText,
                  },
                ],
              }
            : comment
        )
      );
      setReplyText('');
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
                    ? 'Petualangan Pertama dengan Scratch adalah pengantar yang menyenangkan untuk pemrograman dasar. Dalam video ini, Anda akan belajar tentang konsep dasar Scratch dan membuat proyek pertama Anda. Teruslah eksplorasi dan temukan lebih banyak fitur di Scratch!'
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
                    ? 'Lihat Lebih Sedikit'
                    : 'Selengkapnya'}
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
                    <Image
                      width={0}
                      height={0}
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
                            <Image
                              width={0}
                              height={0}
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
        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Belajar;
