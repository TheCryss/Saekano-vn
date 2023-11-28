import { useEffect, useState } from 'react'
import './styles.css'
import { Environment } from '@react-three/drei';

export const Poem = () => {
    const [clickedWords, setClickedWords] = useState([]);
    const [clickedWords2, setClickedWords2] = useState(false);
    const [numWords, setNumWords] = useState(5);

    const handleClick = (word) => {
        if (word.length < 20 && clickedWords.length < numWords) {
            setClickedWords(prevWords => [...prevWords, word]);
            
        }

        
    };

    useEffect(() => {
        if (clickedWords.length == 5) {
            setNumWords(10);
            setClickedWords2(true);
        }
    }, [clickedWords]);

    return (
        <div className='w-10  content' onClick={handleClick}>
            <div className='grid grid-cols-2 gap-1 transition-all '>
                {!clickedWords2 &&["Heroina", "Paisaje", "Amor", "Miedo", "Profundo", "familia", "Susurro", "Éxtasis", "Melodía", "Aurora", "Esencia",
                    "Sinfonía", "Serenidad", "Destino", "Quimera", "Cielo"].map(word => (
                        <button
                            key={word}
                            onClick={() => handleClick(word)}
                            disabled={clickedWords.includes(word)}
                            className={clickedWords.includes(word) ? 'transition-colors text-gray-500 ' : ''}
                        >
                            {word}
                        </button>
                    ))}
                {clickedWords2 && <>
                    {["Efímero", "Encanto", "Crepúsculo", "Inefable", "Anhelo", "Lamento", "Nostalgia", "Perfume", "Resplandor", "Palpitar", "Maravilla", "Eclipse", "Amanecer", "Época", "Soliloquio", "Alba"].map(word => (
                        <button
                            key={word}
                            onClick={() => handleClick(word)}
                            disabled={clickedWords.includes(word)}
                            className={clickedWords.includes(word) ? 'transition-colors text-gray-500 ' : ''}
                        >
                            {word}
                        </button>
                    ))}
                </>}
            </div>
        </div>
    )
}
