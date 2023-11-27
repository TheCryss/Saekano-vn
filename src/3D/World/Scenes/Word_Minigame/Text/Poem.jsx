import {useState} from 'react'
import './styles.css'
import { Environment } from '@react-three/drei';

export const Poem = () => {
    const words = []
    const handleClick = (event) => {
        const clickedWord = event.target.textContent;
        
        if (clickedWord.length< 20  && words.length < 5) {
            words.push(clickedWord)
            event.target.setAttribute('disabled', true);
            
        }
        // console.log(`Se hizo clic en la palabra: ${clickedWord}`);
        console.log(words);
    };

    return (
        <div className='w-10  content' onClick={handleClick}>
            <div className='grid grid-cols-2 gap-1  '>
                <button  >Heroina</button>
                <button>Paisaje</button>
                <button>Amor</button>
                <button>Miedo</button>
                <button>Profundo</button>
                <button>familia</button>
                <button>Susurro</button>
                <button>Éxtasis</button>
                <button>Melodía</button>
                <button>Aurora</button>
                <button>Esencia</button>
                <button>Sinfonía</button>
                <button>Serenidad</button>
                <button>Destino</button>
                <button>Quimera</button>
                <button>Cielo</button>
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
