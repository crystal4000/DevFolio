import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: Record<string, unknown>;
  height: string | number;
  width: string | number;
}

const LottieAnimation = ({
  animationData,
  height,
  width,
}: LottieAnimationProps) => {
  return (
    <div style={{ height, width }}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ height, width }}
      />
    </div>
  );
};

export default LottieAnimation;
