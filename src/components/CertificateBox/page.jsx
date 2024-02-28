import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import VisibilitySensor from "react-visibility-sensor";
const CertificateBox = ({ name, image, link }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Fade bottom when={isVisible}>
          <div className="bg-gray-400 hover:bg-yellow-100 active:bg focus:outline-none focus:ring focus:ring-violet-300 shadow-lg rounded-lg p-4 flex sm:flex-col items-center justify-center">
            <div>
              <div className="mb-4">
                <a className="cursor-pointer" href={link} target="_blank">
                <Image
                  src={image}
                  alt={name}
                  layout="responsive"
                />
                </a>
               
              </div>
              <p className="text-lg font-bold text-black text-center">{name}</p>
            </div>
          </div>
        </Fade>
      )}
    </VisibilitySensor>
  );
};

export default CertificateBox;
