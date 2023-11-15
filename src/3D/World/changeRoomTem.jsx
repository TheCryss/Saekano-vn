import React, { useEffect } from "react";
import { useGame } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";

const ChangeRoomTem = () => {
    const { setDev,getActualContent } = useGame();
    const navigate = useNavigate();

    useEffect(() => {
        setDev()
    }, []);

    console.log(getActualContent());

    const navegar = () => {
        console.log("navegando");
        navigate("/room3D");
    };

    return (
    <>
    <div>You Are Now Running Dev</div>
    <button onClick={navegar} className="select-none my-3  w-48  bg-pink-600   hover:bg-indigo-500 hover:scale-105  transition-all text-white rounded-md py-1 font-bold " >Navegar</button>
    </>
    );
};

export default ChangeRoomTem;
