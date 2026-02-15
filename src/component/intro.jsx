import React from 'react';
import Header from './Header';
import myPDF from '../assets/HIMANSHU.pdf';
import { useRef } from 'react';

function Intro() {
  const downloadLinkRef = useRef(null);

  const handleDownload = () => {
    if (downloadLinkRef.current) {
      downloadLinkRef.current.click();
    }
  }

  return (
    <div className="bg-transparent">
      <Header/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
        
        <div className="mx-auto py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <p className="tracking-tight text-blue-200 font-poppins">Hi, my name is</p>
            <h1 className="text-4xl font-bold tracking-tight font-poppins text-blue-200 sm:text-6xl">
              Himanshu Ratnakar
            </h1>
            <h1 className="text-4xl font-bold tracking-tight mt-5 font-poppins text-blue-200 sm:text-6xl">
              I build things for the Web/Mobile
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-poppins">
              AI MERN Stack Developer | Software Engineer
            </p>
            <button
              type="button"
              onClick={handleDownload}
              className="text-blue-200 mt-5 hover:text-white border border-[#64ffda] rounded-xl px-10 py-2 text-xl  font-poppins"
            >
              Resume
            </button>
            
            {/* Hidden download link */}
            <a 
              href={myPDF} 
              ref={downloadLinkRef} 
              download="Himanshu_Ratnakar_Resume.pdf"
              style={{ display: 'none' }}
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;