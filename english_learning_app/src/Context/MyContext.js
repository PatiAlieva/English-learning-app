import { useState, useEffect, createContext } from "react";
import GetWords from "../Services/GetWords";

// создание контекста (хранилище) 
export const glContext = createContext();

// создание компонента, который будет редактировать наше хранилище
export const ContextProvider = ({children}) => {

    // создание состояния для хранилища или контекста
    const [dataContext, setDataContext] = useState([]);

    // помещаем данные состояния и функцию обновления состояния в объект
    const value = {dataContext, setDataContext};

    useEffect (() => {
        const getWords = async () => {
            const words = await GetWords.getWords()
            setDataContext(words);
        }
        getWords()
    },[])

    // if(!dataContext) {
    //     return <h1>Loading...</h1>
    // }

    // const addWord = async (newWord) => {
    //     try {
    //         const resp = await fetch('http://itgirlschool.justmakeit.ru/api/words/add',
    //         {
    //             mode: 'no-cors',
    //             method: "Post",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(newWord),
    //         }
    //         );
    //         if (resp.status === 200) {
    //             data.push(newWord);
    //         }
    //     } catch (err) {
    //         console.err(err)
    //     }
    // };

    return (
    // оборачиваем children в контекст и передаём в контекст объект с состоянием и функцией обновления состояния
    <glContext.Provider value={value}>
        {children}
    </glContext.Provider>
    )
}