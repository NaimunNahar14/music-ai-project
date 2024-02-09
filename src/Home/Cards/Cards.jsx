import React from 'react';
const cardData = [
    { title: 'Genre Fusion', artist: 'Music AI can seamlessly blend and merge different musical genres, enabling the creation of unique and captivating compositions that transcend traditional labels.' },
    { title: 'Emotion Infusion', artist: 'With advanced sentiment analysis, Music AI can craft music that evokes specific emotions, from uplifting and energetic to melancholic and introspective.' },
    { title: 'Collaborative Composer', artist: ' Music AI collaborates with human musicians, suggesting chord progressions, melodies, and harmonies, enhancing the creative process and pushing artistic boundaries.' },
    { title: 'Instant Melody Generation', artist: 'Generate catchy and original melodies on the fly, providing songwriters and composers with a constant source of inspiration.' },
    { title: 'Dynamic Arrangement', artist: 'Music AI can adapt compositions in real-time, adjusting tempo, instrumentation, and intensity to match the mood of the moment or the energy of the audience.' },
    { title: 'Innovative Remixing', artist: ' Automatically remix and reinterpret existing songs, breathing new life into classics or providing fresh perspectives on contemporary tracks.' },
    { title: 'Lyric Enhancement', artist: 'Assist in crafting compelling lyrics by suggesting rhymes, themes, and vocabulary, enhancing the storytelling aspect of music creation.' },
    { title: 'Audio Enhancement', artist: 'Improve audio quality through AI-driven noise reduction, equalization, and mastering, ensuring professional-grade production even for novice musicians.' },
];


const Cards = () => {
    return (
        <div  data-aos="fade-down" data-aos-duration="1000">
            <h2 className='text-center text-teal-950 py-2 mt-5 font-bold text-3xl'>
                Features for Music AI </h2>
            <div className="flex justify-center items-center h-screen bg-black">

                <div className="grid grid-cols-3 gap-4">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-auto"
                        >
                            <div className="p-4">
                                <h2 className="font-bold text-lg">{card.title}</h2>
                                <p className="text-gray-600">{card.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;