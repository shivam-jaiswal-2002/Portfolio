import Image from "next/image";

const CertificateBox = ({ name, image }) => {
  return (
    <div className="bg-gray-400 hover:bg-gray-200 active:bg-white focus:outline-none focus:ring focus:ring-violet-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-center">
      <div className="mb-4">
        <Image src={image} alt={name} layout="responsive" width={80} height={80} />
      </div>
      <p className="text-lg font-bold text-black text-center">{name}</p>
    </div>
  );
};

export default CertificateBox;
