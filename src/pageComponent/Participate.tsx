import { useRef, useState, useEffect } from "react";
import ParticipateComp from "../components/ParticipateComp";
import CodingSvg from "../assets/Illustrations/undraw_programmer_re_owql.svg";
import PrizeSvg from "../assets/Illustrations/undraw_gift_re_qr17.svg";
import CodingPairSvg from "../assets/Illustrations/undraw_pair_programming_re_or4x.svg";

const Participate = () => {
    const headingRef = useRef<HTMLDivElement>(null);
    const [isHeadingVisible, setIsHeadingVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeadingVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const headingElement = headingRef.current;
        if (headingElement) {
            observer.observe(headingElement);
        }

        return () => {
            if (headingElement) {
                observer.unobserve(headingElement);
            }
        };
    }, []);

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            {/* Fixed Header */}
            <div
                ref={headingRef}
                className={`static top-10 z-10 transition-opacity duration-500 ${
                    isHeadingVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 underline underline-offset-4 lg:text-4xl">
                    Why Participate?
                </h1>
            </div>

            {/* Section 1 */}
            <div className="py-20 flex flex-col items-center justify-center lg:flex-row lg:gap-20 lg:mx-80">
                <img src={CodingSvg} alt="coding" className="w-36 lg:w-[240px]" />
                <div className="mt-2 lg:mt-0">
                    <ParticipateComp
                        heading="Learn More Than Just Programming!"
                        para="Alongside acquiring mechanical skills, anticipate opportunities for collaboration, networking, and engaging in workshops focused on entrepreneurship and critical thinking at our hackathon. Diverse guest speakers will further enrich the event, offering valuable insights and perspectives. Our hackathon provides an experience that extends beyond basic technological skills, offering a full approach to learning and growth."
                    />
                </div>
            </div>

            {/* Section 2 */}
            <div className="py-20 flex flex-col items-center justify-center lg:flex-row lg:gap-20 lg:mx-80">
                <img src={PrizeSvg} alt="prize" className="w-48 lg:w-[240px]" />
                <div className="mt-2 lg:mt-0">
                    <ParticipateComp
                        heading="Innovate to Win Prizes"
                        para="Get ready to showcase your creativity and problem-solving skills at our hackathon, where you can win exciting prizes by coming up with groundbreaking ideas. It's an opportunity to think outside the box and push the boundaries of innovation. This is a great place to submit a project you were going to build anyway, except you get the opportunity to win prizes and get recognized for it."
                    />
                </div>
            </div>

            {/* Section 3 */}
            <div className="py-20 flex flex-col items-center justify-center lg:flex-row lg:gap-20 lg:mx-80">
                <img src={CodingPairSvg} alt="prize" className="w-48 lg:w-[240px]" />
                <div className="mt-2 lg:mt-0">
                    <ParticipateComp
                        heading="Meet New People"
                        para="Connect and interact with individuals from different countries and backgrounds at our hackathon! Discover people who share an interest in similar projects and collaborate based on your respective strengths and weaknesses. Join forces with fellow participants to create a functional project that reflects everyone's passion and dedication, building lasting relationships beyond the hacking period."
                    />
                </div>
            </div>
        </div>
    );
};

export default Participate;
