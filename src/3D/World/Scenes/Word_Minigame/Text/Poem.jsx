import { useEffect, useState } from 'react'
import './styles.css'
import { useDispatch,useSelector } from 'react-redux';
import { setEnd,setHalf,setInteraction } from '../../../../../store/slicers/Minigame1Slice';
export const Poem = ({sendDataToParent}) => {
    const [clickedWords, setClickedWords] = useState([]);
    const [clickedWords2, setClickedWords2] = useState(false);
    const [numWords, setNumWords] = useState(5);
    const [winner, setWinner] = useState({eriri:0,megumi:0,utaha:0});
    const eriri = [ 'Paisaje', 'Miedo', 'familia', 'Aurora', 'Esencia', 'Lamento','Resplandor', 'Palpitar', 'Soliloquio', 'Época', 'Nostalgia']
    const megumi = ['Heroina', 'Amor', 'Profundo', 'Susurro', 'Serenidad', 'Melodía','Anhelo','Perfume','Amanecer','Alba','Inefable']
    const utaha = ['Sinfonía', 'Éxtasis', 'Cielo',  'Destino', 'Quimera', 'Maravilla', 'Efímero', 'Encanto', 'Crepúsculo', 'Eclipse'  ]
    
    const handleClick = (word) => {
        if (word.length < 20 && clickedWords.length < numWords) {
            setClickedWords(prevWords => [...prevWords, word]);
            if (eriri.includes(word)) {
                setWinner(prevWinner => ({...prevWinner,eriri:prevWinner.eriri+1}))
            }
            if (megumi.includes(word)) {
                setWinner(prevWinner => ({...prevWinner,megumi:prevWinner.megumi+1}))
            }
            if (utaha.includes(word)) {
                setWinner(prevWinner => ({...prevWinner,utaha:prevWinner.utaha+1}))
            }
        }

        
    };

    useEffect(() => {
        if (clickedWords.length == 5) {
            setNumWords(10);
            setClickedWords2(true);
            sendDataToParent({half:true});
            }
        if (clickedWords.length == 10) {
            // console.log(winner);
            const maxKey = Object.keys(winner).reduce((a, b) => winner[a] > winner[b] ? a : b);
            // console.log(maxKey);

            sendDataToParent({end:true,winner:maxKey});
        }
    }, [clickedWords]);

    return (
        <div className='w-10  content' onClick={handleClick}>
            <div className='grid grid-cols-2 gap-1 transition-all '>
                {!clickedWords2 &&["Heroina", "Paisaje", "Amor", "Miedo", "Profundo", "familia", "Susurro", "Éxtasis", "Melodía", "Aurora", "Esencia", "Sinfonía", "Serenidad", "Destino", "Quimera", "Cielo"].map(word => (
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
