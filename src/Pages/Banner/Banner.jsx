
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import banner1 from "../../assets/images/banner/1.jpg"
import banner2 from "../../assets/images/banner/2.jpg"
import banner3 from "../../assets/images/banner/3.jpg"
import banner4 from "../../assets/images/banner/4.jpg"
import banner5 from "../../assets/images/banner/5.jpg"
import banner6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel h-[800px] w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={banner1}
                    className="w-full " />
                <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="absolute left-[100px] top-1/2 text-white flex flex-col -translate-y-1/2 transform justify-end gap-7 ">
                        <h1 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <a className="btn py-7 px-7 bg-[#FF3811] text-white border-none text-lg font-semibold ">Discover More</a>
                            <a className="btn btn-ghost py-7 px-7 text-white border-2 border-white text-lg font-semibold ">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-5 flex -translate-y-1/2 transform justify-end gap-7 ">
                    <a href="#slide6" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowLeftLong className="text-xl" /></a>
                    <a href="#slide2" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowRightLong className="text-xl" /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={banner2}
                    className="w-full " />
                <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="absolute left-[100px] top-1/2 text-white flex flex-col -translate-y-1/2 transform justify-end gap-7 ">
                        <h1 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <a className="btn py-7 px-7 bg-[#FF3811] text-white border-none text-lg font-semibold ">Discover More</a>
                            <a className="btn btn-ghost py-7 px-7 text-white border-2 border-white text-lg font-semibold ">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-5 flex -translate-y-1/2 transform justify-end gap-7 ">
                    <a href="#slide1" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowLeftLong className="text-xl" /></a>
                    <a href="#slide3" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowRightLong className="text-xl" /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={banner3}
                    className="w-full" />
                <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="absolute left-[100px] top-1/2 text-white flex flex-col -translate-y-1/2 transform justify-end gap-7 ">
                        <h1 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <a className="btn py-7 px-7 bg-[#FF3811] text-white border-none text-lg font-semibold ">Discover More</a>
                            <a className="btn btn-ghost py-7 px-7 text-white border-2 border-white text-lg font-semibold ">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-5 flex -translate-y-1/2 transform justify-end gap-7 ">
                    <a href="#slide2" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowLeftLong className="text-xl" /></a>
                    <a href="#slide4" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowRightLong className="text-xl" /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={banner4}
                    className="w-full" />
                <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="absolute left-[100px] top-1/2 text-white flex flex-col -translate-y-1/2 transform justify-end gap-7 ">
                        <h1 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <a className="btn py-7 px-7 bg-[#FF3811] text-white border-none text-lg font-semibold ">Discover More</a>
                            <a className="btn btn-ghost py-7 px-7 text-white border-2 border-white text-lg font-semibold ">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-5 flex -translate-y-1/2 transform justify-end gap-7 ">
                    <a href="#slide3" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowLeftLong className="text-xl" /></a>
                    <a href="#slide5" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowRightLong className="text-xl" /></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={banner5}
                    className="w-full" />
                <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="absolute left-[100px] top-1/2 text-white flex flex-col -translate-y-1/2 transform justify-end gap-7 ">
                        <h1 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <a className="btn py-7 px-7 bg-[#FF3811] text-white border-none text-lg font-semibold ">Discover More</a>
                            <a className="btn btn-ghost py-7 px-7 text-white border-2 border-white text-lg font-semibold ">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-5 flex -translate-y-1/2 transform justify-end gap-7 ">
                    <a href="#slide4" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowLeftLong className="text-xl" /></a>
                    <a href="#slide6" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowRightLong className="text-xl" /></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={banner6}
                    className="w-full" />
                <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="absolute left-[100px] top-1/2 text-white flex flex-col -translate-y-1/2 transform justify-end gap-7 ">
                        <h1 className="text-6xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <a className="btn py-7 px-7 bg-[#FF3811] text-white border-none text-lg font-semibold ">Discover More</a>
                            <a className="btn btn-ghost py-7 px-7 text-white border-2 border-white text-lg font-semibold ">Latest Project</a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-5 flex -translate-y-1/2 transform justify-end gap-7 ">
                    <a href="#slide5" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowLeftLong className="text-xl" /></a>
                    <a href="#slide1" className="btn w-[60px] border-none bg-[#FFFFFF33] hover:bg-[#FF3811] text-white h-[60px] btn-circle"><FaArrowRightLong className="text-xl" /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;