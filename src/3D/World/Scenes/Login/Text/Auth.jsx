import { useAuth } from "../../../../../context/AuthContext"
import './styles.css'
import { useEffect, useState } from 'react'
import { createUser, editUser } from '../../../../../db/user-collection'


export const Auth = () => {
    const auth = useAuth()
    const { displayName, email, savedata } = auth.userLogged
    const [valuesUser, setValuesUser] = useState(null)

    const onHandleGoogle = async (e) => {
        e.preventDefault()
        const result = await auth.loginWithGoogle()

        if (result.success) {
            console.log("success");
        } else {
            console.log(result.error)
        }
    }

    const saveDataUser = async (valuesUser) => {
        const result = await createUser(valuesUser)
    }

    const getUser = async (email) => {
        const result = await getUser(email)
    }

    const checkSavedata = (savedata) => {
        if (!savedata) return {}
        else return savedata
    }

    useEffect(() => {
        setValuesUser({
            email: email,
            name: displayName,
            savedata: checkSavedata(savedata)
        })
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
            console.log("success logout");
        } else {
            console.log(result.error)
        }
    }

/*     const onHandleGame = (event) => {
        if (event) {
            console.log("new game");

        } else{
            console.log("continue game");
        }
    } */

    return (
        <>
            <div className="flex justify-end  ">
                {email && (
                    <div className=" transform absolute z-10 m-5 bg-white p-4 rounded-lg transition-all duration-500 ">
                        <h1 className="mb-3 z-10  top-5 select-none font-semibold text-md text-green-950 rounded-md bg-white w-auto capitalize">{displayName.toLowerCase()}</h1>
                        <button className="select-none w-48 bg-pink-600   hover:bg-indigo-500 hover:scale-105  transition-all text-white rounded-md py-1 font-bold " onClick={onHandleLogout} >
                            Cerrar Sesion
                        </button>
                    </div>
                )}
            </div>

            <div className="scale-10">
                <img className=" absolute z-10 m-4 small-image" src="./assets/img/logo.png" alt="Saekano" />
            </div>
            <form onSubmit={onHandleGoogle}>
                <div className="flex justify-center">
                    <div className=" absolute z-10 flex flex-col bottom-40 ">
                        {!email   ?(
                            <button className="select-none my-3  w-48  bg-pink-600   hover:bg-indigo-500 hover:scale-105  transition-all text-white rounded-md py-1 font-bold " type='submit'>
                                Iniciar Sesion
                            </button>
                        ) : (
                            <button  className="select-none my-3  w-48  bg-pink-600   hover:bg-indigo-500 hover:scale-105  transition-all text-white rounded-md py-1 font-bold " type='button'>
                                Nuevo Juego
                            </button>
                        )}

                        <button  className="select-none w-48  bg-pink-600   hover:bg-indigo-500 hover:scale-105  transition-all text-white rounded-md py-1 font-bold " type="button">
                            Continuar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
