import "./certification.scss";
import CodSoft from "../../assets/Codsoft.jpg";
import namasteDev from "../../assets/namasteTm.jpg";
import Infowiz from "../../assets/infowiz.jpg";

const Certification = () => {
  const certificates = [
    {
      id: 1,
      src: Infowiz,
    },
    {
      id: 2,
      src: namasteDev,
    },
    {
      id: 3,
      src: CodSoft,
    },
  ];
  return (
    <>
      <div className="certification">
        <h1>Certification</h1>
        <div className="wrapper">
          <div className="certItems">
            {certificates.map((item) => (
              <div className="grid_Item" key={item?.id}>
                <img src={item?.src} alt="All images" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
