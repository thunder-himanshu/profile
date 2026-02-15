import React from "react";

function My3DText() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] bg-transparent overflow-hidden">
      {/* Background Blur Shape */}
      <div className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-15rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 
          bg-gradient-to-tr from-[#ff80b5] to-[#64ffda] opacity-30 
          sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* 3D Text (Spline Embed) */}
      <div className="spline-iframe-wrapper max-w-5xl w-full border border-[#64ffda]/40 rounded-2xl shadow-2xl overflow-hidden">
        <iframe
          src="https://app.spline.design/file/0c2e5fbd-da4f-4105-9ed5-61fca05bd91a"
          width="100%"
          height="500px"
          frameBorder="0"
          title="3D Text"
          className="rounded-2xl"
        ></iframe>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .spline-iframe-wrapper iframe {
            height: 500px;
            width: 100%;
            border: 0;
          }
          @media (max-width: 768px) {
            .spline-iframe-wrapper iframe {
              height: 400px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default My3DText;
