import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ClipPathTitle from "../components/ClipPathTitle";
import VideoPinSection from "../components/VideoPinSection";

const benefitItems = [
  {
    id: "first-title",
    title: "Shelf stable",
    color: "#faeade",
    bg: "#c88e64",
    borderColor: "#222123",
  },
  {
    id: "second-title",
    title: "Protein + Caffeine",
    color: "#222123",
    bg: "#faeade",
    borderColor: "#222123",
  },
  {
    id: "third-title",
    title: "Infinitely recyclable",
    color: "#faeade",
    bg: "#7F3B2D",
    borderColor: "#222123",
  },
  {
    id: "fourth-title",
    title: "Lactose free",
    color: "#2E2D2F",
    bg: "#FED775",
    borderColor: "#222123",
  },
];

function BenefitSection() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".benefit-section",
          start: "top 60%",
          end: "top top",
          scrub: 1.5,
        },
      })
      .to(".benefit-section .benefit-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
        stagger: 0.2,
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages:
            <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>

          <div className="mt-20 col-center">
            {benefitItems.map((item) => (
              <ClipPathTitle
                key={item.id}
                title={item.title}
                color={item.color}
                bg={item.bg}
                className={`benefit-title ${item.id}`}
                borderColor={item.borderColor}
              />
            ))}
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
}

export default BenefitSection;
