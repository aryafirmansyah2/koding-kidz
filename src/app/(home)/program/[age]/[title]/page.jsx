import React from 'react';
import ProgramDetailPage from '@/components/pages/programDetail';

export function generateStaticParams() {
  return [
    { age: '9 Tahun', title: 'Belajar-Scratch-Untuk-Pemula' },
    { age: '10 Tahun', title: 'Belajar-Scratch-Untuk-Pemula' },
  ];
}

const ProgramDetail = ({ params }) => {
  return (
    <>
      <ProgramDetailPage params={params} />
    </>
  );
};

export default ProgramDetail;
