import React, { useState } from 'react';
import Chance from 'chance';
import { Link, useNavigate } from 'react-router-dom';

const getCertificates = () => {
  const chance = new Chance();
  const certificates = [];

  for (let i = 0; i < 10; i++) {
    certificates.push({
      name: chance.name(),
      "Internship Name": chance.email({ domain: "gmail.com" }),
      Role: chance.profession({ rank: true }),
      Organization: chance.company(),
      Organizer: chance.name(),
      Internship: chance.profession({ rank: true }),
      "Internship From": chance.date({ string: true, american: false }, { year: '2023' }),
      "Internship To": chance.date({ string: true, american: false, year: '2023' }),
      "Certificate Number": chance.guid().split('-')[0],
      "Photo": chance.avatar({ protocol: 'https' }),
    });
  }

  return certificates;
}

const CertficateView = () => {
  const [Certificates, setCertificates] = useState(getCertificates());
  const navigate = useNavigate();

  const handleUpdate = (certificate) => {
    navigate('/view', { state: certificate });
  }
  // console.log(Certificates);
  return (
    <section className='border relative h-[90vh] flex flex-col items-center py-6 gap-6'>

      <h1 className='text-xl md:text-4xl text-white font-semibold'>All Published Certificate</h1>
      <section className='flex flex-col w-[95vw] list_container bg-white px-6 py-2'>
        {/* Header for the table */}
        <section className='flex text-sm text-black capitalize font-semibold'>
          {
            Object.keys(Certificates[0]).map((key, index) => (
              <span key={index}>{key}</span>
            )
            )
          }
          <span>Action</span>
        </section>
        {/* Body for the table */}
        {
          Certificates.map((certificate, index) => (
            <section key={index} className='flex text-sm text-black capitalize'>
              {
                Object.values(certificate).map((value, index) => (
                  (index === 9 ? <span><img src={value} alt={value} key={index} className='w-6 h-6 rounded-full object-contain' /></span> : <span key={index}>{value}</span>
                  ))
                )
              }
              <span className='text-blue-500 hover:cursor-pointer'
                onClick={()=>{
                  handleUpdate(certificate)
                }}
              >View</span>
            </section>
          ))}
      </section>
    </section>
  );
};

export default CertficateView;
