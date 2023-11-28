"use client"
import { createContext, useState, useEffect } from 'react';
import UserStore from '../store/UserStore';
import DataStore from '../store/DataStore';
import { dataUser } from '../http/userAPI';
import { getAllZapisi } from '../http/dataAPI';
import { getNewOtzyvy } from '../http/otzyvyAPI';
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [user] = useState(new UserStore())
  const [dataApp] = useState(new DataStore())
  const [newOtzyvy, setNewOtzyvy] = useState(false)

  const updateState = (newState) => {
    setState(newState);
  };

  useEffect(() => {
    dataUser()
      .then(data => {
        user.setUserData(data)
        if (data) {
          user.setIsAuth(true)
          user.setUser(true)
        }
      })
      .catch(data => {
        console.log('🚀 🚀 🚀dataUser err:', data)
      })
  }, [user])

  useEffect(() => {
    getAllZapisi()
      .then(data => {
        // console.log("🚀 MyContextProvider getAllZapisi data:", data)
        if (data.length) {
          dataApp.setDataZapisi(data)
        } else {
          console.log('Записей нет')
        }
      })

  }, [dataApp.resDataZapisi])


  useEffect(() => {
    getNewOtzyvy()
      .then(data => {
        // console.log("🚀 MyContextProvider getNewOtzyvy data:", data)
        dataApp.setNewOtzyvy(data)
        if (data.length) {
          setNewOtzyvy(true)
        }
      })
  }, [user.userData])

  return (
    <MyContext.Provider value={{ state, updateState, user, dataApp, newOtzyvy }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
