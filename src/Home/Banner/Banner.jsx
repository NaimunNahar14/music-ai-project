import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../Banner/Banner.css';
import img2 from '../../assets/Artificial_Intelligence_Tools_To_Generate_Your_Own_Music_ae083ea2-2052-4785-8911-0d74af747676.png';
import img3 from '../../assets/645aadd22ed680cf8352ebdb_the-ai-driven-future-of-music-production-embracing-new-possibilities.jpg';
import img1 from '../../assets/impacts-disruption-artificial-intelligence-music.webp';

const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    return (
        <div className="mySwiper mt-2 mb-2" data-aos="flip-right" data-aos-duration="1000">

            <Swiper pagination={pagination}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img1} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <p className="font-bold text-4xl">
                                    Music-Ai
                                </p>
                                <p className='text-lg font-medium mb-10'>
                                    Exploring the synergy of human emotion and AI precision, Music AI crafts melodies that resonate with the heart's symphony.From AI-assisted compositions to reimagined classics, Music AI conducts an innovative orchestra of sounds that captivate the imagination.
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Telegram</button>
                                    <button className="btn btn-primary ml-5">Buy Some Tai</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img2} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <p className="font-bold text-4xl">
                                    Music-Ai
                                </p>
                                <p className='text-lg font-medium mb-10'>
                                    Exploring the synergy of human emotion and AI precision, Music AI crafts melodies that resonate with the heart's symphony.From AI-assisted compositions to reimagined classics, Music AI conducts an innovative orchestra of sounds that captivate the imagination.
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Telegram</button>
                                    <button className="btn btn-primary ml-5">Some buy Tai</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img3} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <p className="font-bold text-4xl">
                                    Music-Ai
                                </p>
                                <p className='text-lg font-medium mb-10'>
                                    Exploring the synergy of human emotion and AI precision, Music AI crafts melodies that resonate with the heart's symphony.From AI-assisted compositions to reimagined classics, Music AI conducts an innovative orchestra of sounds that captivate the imagination.
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Telegram</button>
                                    <button className="btn btn-primary ml-5">Some Buy Tai</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;
