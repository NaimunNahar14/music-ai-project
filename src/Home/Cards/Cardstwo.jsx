import React from 'react';
const cardData = [
    { title: ' its crucial to emphasize your commitment to user privacy and security.' },
    { title: 'Your provided statement effectively conveys that message.' },
    { title: 'If you need further assistance or have any other content you had like help with, feel free to ask!', artist: ' Music AI collaborates with human musicians, suggesting chord progressions, melodies, and harmonies, enhancing the creative process and pushing artistic boundaries.' },

];
const Cardstwo = () => {
    return (
        <div data-aos="flip-right" data-aos-duration="1000">
            <h2 className='text-center text-teal-950 py-2 mt-5 font-bold text-3xl'>
                Privacy and security statement</h2>
            <div className="flex justify-center items-center h-screen bg-slate-400">

                <div className="grid grid-cols-3 gap-4">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-auto"
                        >
                            <div className="p-4">
                                <h2 className="font-bold text-lg">{card.title}</h2>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cardstwo;