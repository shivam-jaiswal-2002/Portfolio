import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import VisibilitySensor from "react-visibility-sensor";
const CertificateBox = ({ name, image }) => {
  return (
    <div className="bg-gray-400 hover:bg-gray-200 active:bg focus:outline-none focus:ring focus:ring-violet-300 shadow-lg rounded-lg p-4 flex sm:flex-col items-center justify-center">
              <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade bottom when={isVisible}>
              <div>
              <div className="mb-4">
        <Image src={image} alt={name} layout="responsive" width={80} height={80} />
      </div>
      <p className="text-lg font-bold text-black text-center">{name}</p>
              </div>
            </Fade>
          )}
        </VisibilitySensor>
  
    </div>
  );
};

export default CertificateBox;
