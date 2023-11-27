import {useEffect, useState} from 'react'
import './styles.css'
import { Environment } from '@react-three/drei';

export const Poem = () => {
    const [clickedWords, setClickedWords] = useState([]);

    const handleClick = (word) => {
        if (word.length < 20 && clickedWords.length < 5) {
            setClickedWords(prevWords => [...prevWords, word]);
        }
    };

    useEffect(() => {
        console.log(clickedWords);
    }, [clickedWords]);

    return (
        <div className='w-10  content' onClick={handleClick}>
            <div className='grid grid-cols-2 gap-1  '>
                {["Heroina", "Paisaje", "Amor", "Miedo", "Profundo", "familia", "Susurro", "Éxtasis", "Melodía", "Aurora", "Esencia",
                "Sinfonía", "Serenidad", "Destino", "Quimera", "Cielo"].map(word => (
                    <button
                        key={word}
                        onClick={() => handleClick(word)}
                        disabled={clickedWords.includes(word)}
                        className={clickedWords.includes(word) ? 'transition-colors text-gray-500 underline decoration-1  ' : ''}
                    >
                        {word}
                    </button>
                ))}
                { false && <>
                <button>Efímero</button>
                <button>Encanto</button>
                <button>Crepúsculo</button>
                <button>Inefable</button>
                <button>Anhelo</button>
                <button>Lamento</button>
                <button>Nostalgia</button>
                <button>Perfume</button>
                <button>Resplandor</button>
                <button>Palpitar</button>
                <button>Maravilla</button>
                <button>Eclipse</button>
                <button>Resplandor</button>
                <button>Época</button>
                <button>Soliloquio</button>
                </>}
            </div>
        </div>
    )
}
