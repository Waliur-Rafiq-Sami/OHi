import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div style={containerStyle}>
      <TypeAnimation
        sequence={[
          "Ohi, you are my star.",
          2000,
          "You light up my world like no one else.",
          2000,
          "In the story of my life, you’re the best chapter.",
          2000,
          "You’re my sunshine on a cloudy day.",
          2000,
          "Every moment with you feels like a dream come true.",
          2000,
          "You’re the missing piece that makes my heart whole.",
          2000,
          "You’re my forever and always.",
          2000,
          "With you, every day feels like a fairytale.",
          2000,
          "You’re the spark that ignites my soul.",
          2000,
          "In a sky full of stars, you’re my brightest.",
          2000,
          "You make my heart skip a beat with just a smile.",
          2000,
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
  textShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
  display: "inline-block",
  padding: "10px 20px",
  borderRadius: "10px",
  animation: "fadeIn 3s ease-in-out infinite",
  backgroundImage: "linear-gradient(90deg, #e7aaff, #77ffbb)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  textFillColor: "transparent",
  WebkitTextFillColor: "transparent",
};

export default TypingAnimation;
