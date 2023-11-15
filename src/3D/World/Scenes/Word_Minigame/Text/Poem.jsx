import React from 'react'
import './styles.css'

export const Poem = () => {
    const handleClick = (event) => {
        const clickedWord = event.target.textContent;
        console.log(`Se hizo clic en la palabra: ${clickedWord}`);
    };

    return (
        <div className='w-10  content' onClick={handleClick}>
            <div className='grid grid-cols-2 gap-1  '>
                <p>Heroina</p>
                <p>Paisaje</p>
                <p>Amor</p>
                <p>Miedo</p>
                <p>Profundo</p>
                <p>familia</p>
                <p>Susurro</p>
                <p>Éxtasis</p>
                <p>Melodía</p>
                <p>Aurora</p>
                <p>Esencia</p>
                <p>Sinfonía</p>
                <p>Serenidad</p>
                <p>Destino</p>
                <p>Quimera</p>
                <p>Cielo</p>
                {/* <p>Efímero</p>
                <p>Encanto</p>
                <p>Crepúsculo</p>
                <p>Inefable</p>
                <p>Anhelo</p>
                <p>Lamento</p>
                <p>Nostalgia</p>
                <p>Perfume</p>
                <p>Resplandor</p>
                <p>Palpitar</p>
                <p>Maravilla</p>
                <p>Eclipse</p>
                <p>Resplandor</p>
                <p>Época</p>
                <p>Soliloquio</p> */}
            </div>
        </div>
    )
}
