import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './profile.css'
import { useEffect, useState } from 'react'
import { createUser, editUser } from '../../db/user-collection'

const Profile = () => {
    const auth = useAuth()
    const { displayName, email, savedata } = auth.userLogged
    const navigate = useNavigate()

    const checkSavedata = (savedata) => {
        if (!savedata) return []
        else return savedata
    }

    // firestore
    const [valuesUser, setValuesUser] = useState(null)

    const onHandleLogout = async (e) => {
        e.preventDefault()
        const result = await auth.logout()
        if (result.success) {
            navigate('/')
        } else {
            console.log(result.error)
        }
    }

    const saveDataUser = async (valuesUser) => {
        const result = await createUser(valuesUser)
    }

    const getUser = async(email) => {
        const result = await getUser(email)
    }

    const EditDataUser = async (email, newValue) => {
        setValuesUser({
            ...valuesUser,
            displayName: newValue,
        })
        const result = await editUser(email, valuesUser)
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
            saveDataUser(valuesUser)
        }
    }, [valuesUser])

    return (
        <div>
            <div>
                <h1>Profile</h1>
                <span>Name: {displayName}</span>
                <span>Email: {email}</span>
            </div>

            <button onClick={onHandleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Profile
