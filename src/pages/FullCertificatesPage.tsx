import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Certificates } from "../data/certificates";
export default function FullCertificatesPage({
  handleClickSound,
  handleNavClick,
}: {
  handleClickSound: () => void;
  handleNavClick: () => void;
}) {
  return (
    <>
      <Navbar
        handClickSound={handleClickSound}
        handleNavClick={handleNavClick}
      />

      <div className="bg-black min-h-screen pt-36.5 pl-20 pb-10">
        <div className="flex flex-row items-center justify-center gap-20 flex-wrap">
          {Certificates.map((certificate, index) => (
            <div
              key={index}
              className="w-100 max-h-120 bg-white/90 rounded-2xl shadow-lg overflow-hidden border "
            >
              <div className="max-h-64 max-w-full overflow-hidden">
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-6 py-5 text-center">
                <h1 className="text-black text-2xl font-bold mt-1 font-serif">
                  {certificate.title}
                </h1>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed font-serif">
                  {certificate.description}
                </p>
              </div>

              <div
                className={`text-xl ${index - Certificates.length % 2 == 0 ? "bg-cyan-500" : index % 3 ? "bg-purple-500" : index % 7 ? "bg-amber-500" : "bg-gray-500 "} text-white text-center py-3  font-bold`}
              >
                #{certificate.certificateTitle}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
