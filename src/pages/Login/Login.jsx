import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './login.css'

const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const onHandleGoogle = async (e) => {
        e.preventDefault()
        const result = await auth.loginWithGoogle()

        if (result.success) {
            navigate('/profile')
        } else {
            console.log(result.error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onHandleGoogle}>
                <span>Inicia con tu cuenta de Google</span>
                <button>
                    Iniciar sesión
                </button>
            </form>
        </div>
    )
}

export default Login
