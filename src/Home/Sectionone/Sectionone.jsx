import React from 'react';
import img1 from '../../assets/natural-marble-pattern-background_1258-22160.avif';
import img2 from '../../assets/ai-generated-7968016_1280.webp'

const Sectionone = () => {
    return (
        <div data-aos="flip-right" data-aos-duration="1000">
            <div className='h-[calc(100vh-90px)] w-full relative '>
                <img src={img1} alt="" className='object-cover h-full w-full' />
                <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                    <div className='md:w-2/3 px-5 flex flex-col items-center'>
                        <img src={img2} alt="" className='object-cover h-[200px] w-[200px]' />
                        <p className='text-lg font-medium mb-10'>
                            "Music AI: Where artistry and algorithms compose a harmonious future."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectionone;