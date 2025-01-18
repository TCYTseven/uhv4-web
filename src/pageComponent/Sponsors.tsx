import CodeCrafter from "../assets/Sponsors/CodeCrafters.io_full_logo_Dark_text.webp"
import Aops from "../assets/Sponsors/aopsLogo.webp"
import Balsamidq from "../assets/Sponsors/balsamiqLogo.webp"
import Cocalc from "../assets/Sponsors/cocalcLogo.webp"
import Desmos from "../assets/Sponsors/desmosLogo.webp"
import Devitjobs from "../assets/Sponsors/devitjobsLogo.webp"
import Genxyz from "../assets/Sponsors/genxyzLogo.webp"
import InterviewCake from "../assets/Sponsors/interviewcakeLogo.webp"
import Tintype from "../assets/Sponsors/tintypeLogo.webp"
import TreeHouses from "../assets/Sponsors/Treehouse_logo.webp"

const Sponsors = () => {
    return (
        <div className="flex flex-col items-center mx-4">
            <div style={{ height: '100px' }}></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text underline underline-offset-4 lg:text-4xl ">Our Sponsors</h1>
            <p className="text-zinc-300 text-sm lg:mt-4 lg:mx-40 text-center">Join us in shaping the future of innovation at <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-200 text-transparent bg-clip-text">United Hack V4 !</span> By sponsoring our hackathon, you will gain valuable exposure to a diverse community of tech enthusiasts, developers, and aspiring entrepreneurs. Showcase your brand, engage with talented participants, and support the next generation of leaders in technology. To view our prospectus and potentially sponsor our event, please email <b>humans@hackunited.org</b>!
            </p>
            <div className="mt-10 mx-10 flex flex-col gap-5 justify-center items-center lg:mx-40">
                <div id="main" className="flex flex-wrap justify-center gap-2 lg:gap-6"> 
                    <a href="https://codecrafters.io" target="_blank" rel="noopener noreferrer">
                        <img src={CodeCrafter} alt="CodeCrafters" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32" />
                    </a>
                    <a href="https://teamtreehouse.com" target="_blank" rel="noopener noreferrer">
                        <img src={TreeHouses} alt="Treehouse" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32"/>
                    </a>
                    <a href="https://devitjobs.us" target="_blank" rel="noopener noreferrer">
                        <img src={Devitjobs} alt="DevItJobs" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32"/>
                    </a>
                    <a href="https://gen.xyz" target="_blank" rel="noopener noreferrer">
                        <img src={Genxyz} alt="Gen.xyz" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32"/>
                    </a>
                    <a href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer">
                        <img src={InterviewCake} alt="Interview Cake" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32"/>
                    </a>
                    <a href="https://balsamiq.com" target="_blank" rel="noopener noreferrer">
                        <img src={Balsamidq} alt="Balsamiq" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32"/>
                    </a>
                    <a href="https://trytintype.io/" target="_blank" rel="noopener noreferrer">
                        <img src={Tintype} alt="Tintype" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32"/>
                    </a>
                    <a href="https://artofproblemsolving.com" target="_blank" rel="noopener noreferrer">
                        <img src={Aops} alt="AoPS" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32"/>
                    </a>
                    <a href="https://cocalc.com" target="_blank" rel="noopener noreferrer">
                        <img src={Cocalc} alt="CoCalc" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32"/>
                    </a>
                    <a href="https://www.desmos.com" target="_blank" rel="noopener noreferrer">
                        <img src={Desmos} alt="Desmos" className="rounded p-2 border-2 border-zinc-400 h-14 lg:h-32"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
