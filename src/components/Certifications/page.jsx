import CertificateBox from "@/components/CertificateBox/page";
import MS from "../../../public/microsoft.png";
import Java from "../../../public/JAVA_HACKERRANK.png";
import PS from "../../../public/PS.png";
import JAVAC from "../../../public/JAVA.png";
import CPP from "../../../public/CPP.png";
import SQL from "../../../public/MYSQL.png";

export default function Certifications() {
  const certifications = [
    { name: "Microsoft SC-900 ", image: MS },
    { name: "Java Tutorial IIT Bombay", image: Java},
    { name: "CPP Tutorial IIT Bombay", image: CPP },
    { name: "Php and Mysql Tutorial IIT Bombay", image: SQL},
    { name: "Java HackerRank", image: JAVAC },
    { name: "Problem Solving HackerRank", image: PS},
  ];

  return (
    <div id="certifications" className="max-w-20xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
      <h2 className="text-3xl font-bold mb-4">Certifications</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {certifications.map((certification, index) => (
          <CertificateBox key={index} name={certification.name} image={certification.image} />
        ))}
      </div>
    </div>
  );
}
