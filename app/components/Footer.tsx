import React from "react";
import { RevealWrapper } from "next-reveal";

function Footer() {
  return (
    <section id="footer">
      <div className="h-screen bg-[url('/images/gallery/bg.jpg')] bg-cover bg-[47.5%] bg-no-repeat flex items-end">
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#FFFFFF00_0%,#424242_67%)] absolute inset-x-0 bottom-0 -top-24"></div>
          <div className="flex flex-col items-center text-center gap-4 text-white p-6 z-10 relative">
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.75rem] font-light leading-relaxed">
                Merupakan suatu penghormatan dan kebahagiaan bagi kami sekiranya
                Tuan/Puan/Saudara/Saudari sudi hadir dan memberikan doa restu kepada kami.
                Kami mengucapkan terima kasih atas kehadiran dan doa yang diberikan.
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.75rem] font-light leading-relaxed">
                Wassalamualaikum Warahmatullahi Wabarakatuh
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="bottom">
              <h1 className="text-[1.75rem] font-light">Aqil & Fulanah</h1>
            </RevealWrapper>
          </div>
        </div>
      </div>
      <div className="bg-[#424242] p-20 flex items-center justify-center">
        <img src="/images/footer/logo-final.png" alt="logo" className="w-24" />
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.75rem] font-light leading-relaxed">
                &copy; 2025 Muhammad Aqil
              </p>
            </RevealWrapper>
      </div>
    </section>
  );
}

export default Footer;
