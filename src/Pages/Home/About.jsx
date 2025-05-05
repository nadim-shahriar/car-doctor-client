import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"


const About = () => {
    return (
        <div className="hero my-[120px]">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 h-full relative">
                    <img
                        src={person}
                        className=" w-[460px] rounded-lg shadow-2xl" />
                    <img
                        src={parts}
                        className="w-[327px] border-8 border-white rounded-lg shadow-2xl top-1/2 left-[160px] absolute" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-xl text-[#FF3811] font-bold pb-5">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="pt-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                    </p>
                    <p className="py-5">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                    </p>

                    <button className="btn bg-[#FF3811] border-none btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;