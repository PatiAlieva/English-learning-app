import React from 'react';
import { glContext } from '../../Context/MyContext';
import { useState, useContext, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from "./addword.module.scss";

function AddWord(props) {
    //const {isValid, editChange} = props;
    const {addWord} = useContext(glContext);
    const [inputWord, setInputWord] = useState(props);
    const [isUnword, setIsUnword] = useState(true);

    const [addNewWord, setAddNewWord] = useState(false);
    const [btnAdd, setBtnAdd] = useState(true);

    let showAddWord;
    if (addNewWord) showAddWord = "showAddWord";

    const showAddWordForm = () => {
        setAddNewWord(!addNewWord);
        setBtnAdd(!btnAdd);
    };

    const handleChangeInput = (e) => {
        setInputWord({...inputWord,
            [e.target.name]: e.target.value,
        });

        if (e.target.value.match(/[0-9]/)) {
            console.log("Please, enter only letters");
        } else if (e.target.value === "") {
            console.log("Please, fill in all fields");
        }
    };

    useEffect(() => {
        if (
            inputWord.english ==="" ||
            inputWord.transcription === "" ||
            inputWord.russian === "" ||
            inputWord.tags === ""
        ) {
            setIsUnword(true);
        } else {
            setIsUnword(false);
        }
    }, [inputWord]);

    const onSubmit = () => {
        if (
            inputWord.english ==="" ||
            inputWord.transcription === "" ||
            inputWord.russian === "" ||
            inputWord.tags === ""
        ) {
            console.log("Please, fill in all fields");
        } else {
            console.log("Form parameters:", inputWord);
            addWord(inputWord);
            setIsUnword();
            alert ("New word was added");
            clearInputs();
        }
    }

    const clearInputs = () => {
        showAddWordForm();
    };

  return (
    <>
        <div styleName='newWord'>
            
            <input type="text" placeholder='Enter a word in English' name='english' value={inputWord.english || ""} onChange={handleChangeInput} />
            <input type="text" placeholder='Enter the transcription of the word' name='transcription' value={inputWord.transcription || ""} onChange={handleChangeInput} />
            <input type="text" placeholder='Enter a word in Russian' name='russian' value={inputWord.russian || ""} onChange={handleChangeInput} />
            <input type="text" placeholder='Enter the word tag' name='tags' value={inputWord.tags || ""} onChange={handleChangeInput} />
            {/* <div>
            {isUnword ? <button styleName="btnSave" onClick={onSubmit} disabled="">Save</button>
              : <button styleName="btnSave">Edit</button>}
            <button styleName="btnClear" onClick={clearInputs}>Delete</button>
            </div> */}
            {/* <div styleName="table_buttons">
                <button type="button" onClick={onSubmit} styleName={` table_save ${isUnword ? "disabled" : ""}`}>Save</button>
                <button styleName="" onClick={clearInputs}>Clear</button>
          </div> */}
          <div>
          {isUnword ? <button styleName="btnSave" disabled = "">Save</button>
              : <button styleName="btnSave" onClick={onSubmit}>Save</button>}
          <button styleName="btnClear" onClick={clearInputs}>Clear</button>
        </div>
        </div>
    </>
  )
}

export default CSSModules(AddWord, style);
