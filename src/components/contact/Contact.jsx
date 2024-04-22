import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pk0sgtg", "template_1tfbrse", formRef.current, {
        publicKey: "HgyFsGZGlE-GGXXDy",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <>
      <motion.div
        className="contactContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="wrapper" variants={variants}>
          <motion.div className="textInfo" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div variants={variants}>
              <h2>Mail</h2>
              <p>tusharmalhotra589@gmail.com</p>
            </motion.div>
            <motion.div variants={variants}>
              <h2>Address</h2>
              <p>123,Ferozepur city</p>
            </motion.div>
            <motion.div variants={variants}>
              <h2>Phone Number</h2>
              <p>+91 7508878288</p>
            </motion.div>
          </motion.div>
          <div className="formInfo">
            <motion.div
              className="phoneSvg"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <svg
                width="450PX"
                height="450px"
                viewBox="-11.04 -11.04 46.08 46.08"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#F0F0F0"
                stroke="#F0F0F0"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0"
                  transform="translate(1.8000000000000007,1.8000000000000007), scale(0.85)"
                >
                  <path
                    transform="translate(-11.04, -11.04), scale(1.44)"
                    d="M16,30.02124808728695C17.979292016298537,29.888927703288797,19.923662083028137,29.669094220955362,21.802483178598763,29.03259059909345C23.782492515290535,28.361806607421297,26.5672398585771,28.14027092420359,27.314920137105332,26.18799985235671C28.191708824285783,23.898613279964515,24.825118183759656,21.44509181059675,25.59919946670269,19.118968974800115C26.381774583212703,16.76732207498207,31.520063757193533,16.86076157463121,31.238234391907056,14.398397027439481C30.954709728117233,11.921220528599967,26.650819421680858,12.508206552053219,24.669344074591216,10.994751864837278C23.517885651200583,10.115265702885049,22.844252454307018,8.775884946074555,22.18666278383838,7.484789196272995C21.025086143075235,5.204177545409792,21.50653767121173,1.7615728675291003,19.303300813561,0.4591915318562858C17.426703511154535,-0.650106042184013,14.849604678300077,0.8616703133280319,13.040900097261504,2.0785295006216895C11.33332089629408,3.2273536151355335,10.957375488294494,5.600562048747705,9.500552849882439,7.054278449520291C8.29892726458994,8.253341928401777,6.556742322789799,8.687798866562797,5.287666678324486,9.815231473081637C3.7293238038093035,11.199645851000726,1.4512400927751061,12.37550647904251,1.1838342425729405,14.442758228496116C0.9184975346385703,16.49401392562051,2.796655167588498,18.210098871277307,3.9825601840391442,19.90470289449923C4.976515434069579,21.325019481611186,6.69839149982509,22.088906781505376,7.5794915030838155,23.58185990566765C8.71807705829337,25.511101598425874,8.062026360031282,28.47139714767585,9.84150306000674,29.832210599201417C11.490960392372777,31.09359476097894,13.928137368059568,30.159757037352065,16,30.02124808728695"
                    fill="#7ed0ec"
                    strokeWidth="0"
                  ></path>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title></title>{" "}
                  <g
                    fill="none"
                    fillRule="evenodd"
                    id="页面-1"
                    stroke="none"
                    strokeWidth="1"
                  >
                    {" "}
                    <g
                      id="导航图标"
                      transform="translate(-251.000000, -207.000000)"
                    >
                      {" "}
                      <g
                        id="编组"
                        transform="translate(251.000000, 207.000000)"
                      >
                        {" "}
                        <rect
                          fill="#FFFFFF"
                          fillOpacity="0.01"
                          fillRule="nonzero"
                          height="24"
                          id="矩形"
                          width="24"
                          x="0"
                          y="0"
                        ></rect>{" "}
                        <path
                          d="M18,16 C20.20915,16 22,14.20915 22,12 C22,9.79085 20.20915,8 18,8"
                          id="路径"
                        ></path>{" "}
                        <path
                          d="M18,16 L18,16 C20.20915,16 22,14.20915 22,12 C22,9.79085 20.20915,8 18,8"
                          id="路径"
                          stroke="#212121"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>{" "}
                        <path
                          d="M6,8 C3.79086,8 2,9.79085 2,12 C2,14.20915 3.79086,16 6,16"
                          id="路径"
                        ></path>{" "}
                        <path
                          d="M6,8 C3.79086,8 2,9.79085 2,12 C2,14.20915 3.79086,16 6,16 L6,16"
                          id="路径"
                          stroke="#212121"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>{" "}
                        <path
                          d="M6,16 L6,15.75 L6,14.5 L6,12 L6,8 C6,4.68629 8.6863,2 12,2 C15.3137,2 18,4.68629 18,8 L18,16 C18,19.3137 15.3137,22 12,22"
                          id="路径"
                          stroke="#212121"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </motion.div>
            <motion.form
              ref={formRef}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                placeholder="Message"
              ></textarea>
              <button>Submit</button>
              {error && "Error"}
              {success && "Success"}
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
