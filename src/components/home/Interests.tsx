import Typewriter from "typewriter-effect";

const Interests = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Frontend Developer",
          "Machine Learning Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Interests;
