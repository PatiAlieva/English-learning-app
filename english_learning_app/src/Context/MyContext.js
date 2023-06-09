import { useState, useEffect, createContext } from "react";
import GetWords from "../Services/GetWords";

// создание контекста (хранилище) 
export const glContext = createContext();

// создание компонента, который будет редактировать наше хранилище
export const ContextProvider = (props) => {

    // создание состояния для хранилища или контекста
    const [dataContext, setDataContext] = useState([]);
    
    // помещаем данные состояния и функцию обновления состояния в объект
    const value = {dataContext, setDataContext};

    // const [dictionary, setDictionary] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updateWord, setUpdateWord] = useState({});

    useEffect (() => {
        const getWords = async () => {
            const words = await GetWords.getWords()
            setDataContext(words);
        }
        getWords()
    },[dataContext]);

    // if(!dataContext) {
    //     return <h1>Loading...</h1>
    // }

    const addWord = async (newWord) => {
        try {
            const resp = await fetch('http://itgirlschool.justmakeit.ru/api/words/add',
                {
                    mode: 'no-cors',
                    method: "Post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newWord),
                }
            );
            if (resp.status === 200) {
                dataContext.push(newWord);
                setDataContext([...dataContext]);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateWords = (updateWord) => {
        console.log(updateWord);
        setIsLoading(true);
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${updateWord.id}/update`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateWord),
            }
        )
        .then((resp) => resp.json())
        .then ((words) => {
            console.log(words);
        })
        .catch((error) => {
            console.error(error);
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    const deleteWords = (id) => {
        setIsLoading(true);
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
            {
                method: "POST",
            }
        )
        .then((resp) => {
            if (!resp.ok) {
                throw new Error("Couldn't delete word");
            }
            const newDataContext = [...dataContext].filter((item) => item.id !== id)
            setDataContext(newDataContext)
        })
        .catch((error) => {
            console.error(error);
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    // if (isLoading) {
    //     return (
    //     <><p>Loading</p></>)
    // }

    if (error) {
        return (
        <><p>Error</p></>)
    }


    return (
    // оборачиваем children в контекст и передаём в контекст объект с состоянием и функцией обновления состояния
    <glContext.Provider value={{value, dataContext, isLoading, setDataContext, error, addWord, deleteWords, updateWords, updateWord, setUpdateWord}}>
        {props.children}
    </glContext.Provider>
    )
}