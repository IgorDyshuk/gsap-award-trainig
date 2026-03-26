import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function VideoPinSection() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const pinVideoSrc = `${import.meta.env.BASE_URL}videos/pin-video.mp4`;
  const circleTextSrc = `${import.meta.env.BASE_URL}images/circle-text.svg`;
  const playIconSrc = `${import.meta.env.BASE_URL}images/play.svg`;

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video src={pinVideoSrc} playsInline muted loop autoPlay />
        <div className="abs-center md:scale-100 scale-200">
          <img src={circleTextSrc} alt="" className="spin-circle" />
          <div className="play-btn">
            <img src={playIconSrc} alt="" className="size-[3vw] ml-[.5vw]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoPinSection;
