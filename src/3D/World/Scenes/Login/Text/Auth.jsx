import { useAuth } from '../../../../../context/AuthContext'
import './styles.css'
import { useEffect, useState } from 'react'
import { createUser, editUser, getUser } from '../../../../../db/user-collection'
import { useNavigate } from 'react-router-dom'
import { setStatus } from '../../../../../store/slicers/GameStatusSlice'
import { useDispatch } from 'react-redux'


export const Auth = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { displayName, email } = auth.userLogged
    const [valuesUser, setValuesUser] = useState(null)

    const onHandleGoogle = async (e) => {
        e.preventDefault()
        const result = await auth.loginWithGoogle()

        if (result.success) {
            console.log('success')
        } else {
            console.log(result.error)
        }
    }

    const getSaveData = async () => {
        const { data } = await getUser(email)

        if (!data) return {}
        else {
            const { savedata } = data[0]

            return savedata
        }
    }

    const handleContinueGame = async () => {
        const savedata = await getSaveData()

        if (savedata) {
            dispatch(setStatus(savedata))
        }

        navigate('/acto/1')
    }

    const saveDataUser = async (valuesUser) => {
        const result = await createUser(valuesUser)
    }

    const checkSavedata = (savedata) => {
        if (!savedata) return {}
        else return savedata
    }

    useEffect(() => {
        const fetchSaveData = async () => {
            const saveData = await getSaveData()

            setValuesUser({
                email: email,
                name: displayName,
                savedata: checkSavedata(saveData)
            })
        }

        fetchSaveData()
    }, [email, displayName])

    useEffect(() => {
            if (valuesUser) {
                if (valuesUser.email) saveDataUser(valuesUser)
            }
        }, [valuesUser])

    const onHandleLogout = async (e) => {
        e.preventDefault()
        const result = await auth.logout()
        if (result.success) {
            console.log('success logout')
        } else {
            console.log(result.error)
        }
    }

    const onHandleGame = (event) => {
        if (event == 1) {
            console.log('New game')
            navigate('/acto/1')

        } else handleContinueGame()
    }

    const onHandleControls = () => {
        const modal = document.getElementById('controls-dialog')
        if (modal) {
            if (modal.open) modal.close()
            else modal.showModal()
        }
    }

    return (
        <>
            <div className='flex justify-end  '>
                {email && (
                    <div className=' transform absolute z-10 m-5 bg-white p-4 rounded-lg transition-all duration-500 '>
                        <h1 className='mb-3 z-10  top-5 select-none font-semibold text-md text-green-950 rounded-md bg-white w-auto capitalize'>{displayName.toLowerCase()}</h1>
                        <button className='select-none w-48 bg-pink-600   hover:bg-indigo-500 hover:scale-105  transition-all text-white rounded-md py-1 font-bold ' onClick={onHandleLogout} >
                            Cerrar Sesion
                        </button>
                    </div>
                )}
            </div>

            <div className='scale-10'>
                <img className=' absolute z-10 m-4 small-image' src='./assets/img/logo.png' alt='Saekano' />
            </div>
            <form onSubmit={onHandleGoogle}>
                <div className='flex justify-center'>
                    <div className=' absolute z-10 flex flex-col bottom-40 '>
                        {!email   ?(
                            <button className='select-none my-3  w-48  bg-pink-600   hover:bg-indigo-500 hover:scale-105  transition-all text-white rounded-md py-1 font-bold ' type='submit'>
                                Iniciar Sesion
                            </button>
                        ) : (
                            <button onClick={() => onHandleGame(1)} className='select-none my-3  w-48  bg-pink-600   hover:bg-indigo-500 hover:scale-105  transition-all text-white rounded-md py-1 font-bold ' type='button'>
                                Nuevo Juego
                            </button>
                        )}

                        <button onClick={() => onHandleGame(0)} className='select-none w-48  bg-pink-600   hover:bg-indigo-500 hover:scale-105  transition-all text-white rounded-md py-1 font-bold ' type='button'>
                            Continuar
                        </button>

                        <button onClick={() => onHandleControls()}>
                            Controles
                        </button>

                        <dialog
                            id="controls-dialog"
                            className="w-72 p-4 bg-white border rounded-lg shadow-md hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >

                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
                                onClick={() => onHandleControls()}
                            >
                                Cerrar
                            </button>
                        </dialog>
                    </div>
                </div>
            </form>
        </>
    )
}
