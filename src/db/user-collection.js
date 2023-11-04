"use strict"

import {
    addDoc,
    collection,
    getDocs,
    query,
    updateDoc,
    where,
  } from "firebase/firestore"
import { db } from "../firebase.config"

const usersRef = collection(db, "users")

const createUser = async (userData) => {
    try {
        const res = await addDoc(usersRef, userData)
        return { success: true, data: res }
    } catch (error) {
        console.log("Error to create user", error)
        return { success: false, data: error }
    }
}

const getUser = async (userEmail) => {
    try {
        const userSnapshot = await getDocs(
            query(usersRef, where("email", "==", userEmail))
        )

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" }
        }
        const userData = userSnapshot.docs.map((doc) => doc.data())
        return { success: true, data: userData }
    } catch (error) {
        return { success: false, message: "Error to get the user", error }
    }
}

const editUser = async (userEmail, newData) => {
    try {
        const userSnapshot = await getDocs(
            query(usersRef, where("email", "==", userEmail))
        )

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" }
        }
        const userDoc = userSnapshot.docs[0]

        await updateDoc(userDoc.ref, newData)

        return { success: true, message: "User updated successfully" }
    } catch (error) {
        return { success: false, message: "Error to update the user", error }
    }
}

export { createUser, getUser, editUser }
