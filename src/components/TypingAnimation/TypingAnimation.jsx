import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div style={containerStyle}>
      <TypeAnimation
        sequence={[
          "Ohi, you are my star.",
          1000,
          "I never want to lose you again.",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        wrapper="span"
        speed={1}
        style={textStyle}
        repeat={Infinity}
      />
    </div>
  );
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const textStyle = {
  fontSize: "2em",
  fontWeight: "bold",
  color: "#fff",
  textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  display: "inline-block",
  padding: "10px 20px",
  borderRadius: "10px",
  animation: "fadeIn 3s ease-in-out infinite",
};

export default TypingAnimation;
