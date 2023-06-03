import React from 'react';
import CSSModules from 'react-css-modules';
import { useState, useEffect } from 'react';
import style from './table.module.scss';

function Table(props) {
  const [isEdit, setEdit] = useState(props.isEdit);
  const [state, setState] = useState ({
    english: props.english,
    transcription: props.transcription,
    russian: props.russian,
    tags: props.tags
  });
  const [isValid, setValid] = useState(true);
  const [isError, setError] = useState({
    english: '',
    transcription: '',
    russian: '',
    tags: ''
  });

  useEffect(() => {
    if(!state.transcription || !state.russian || !state.english || !state.tags) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [state.transcription, state.russian, state.english, state.tags])
  
  useEffect (() => {
    if (isError.transcription || isError.russian || isError.english || isError.tags) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [isError.transcription, isError.russian, isError.english, isError.tags])

  const editChange = () => {
    setEdit(!isEdit);
  }

  const handleChange = (event) => {
    setState({
        ...state, [event.target.name]: event.target.value
    });
    

    if (event.target.name === "transcription") {


      if (event.target.value.length >= 3 && /\[(.*?)\]/.test(event.target.value)) {
          setError({ ...isError, [event.target.name]: "" });
      } else {

          if (event.target.value.length < 3) {
              setError({ ...isError, [event.target.name]: "Значение менее 3-х знаков" });
          }

          if (!/\[(.*?)\]/.test(event.target.value)) {
              setError({ ...isError, [event.target.name]: "Значение должно быть в скобках" });
              console.log(isError);
          }
      }

  } else {

      if (event.target.value.length < 2) {
          setError({ ...isError, [event.target.name]: "Значение менее 2-х знаков" });
      } else {
          setError({ ...isError, [event.target.name]: "" });
      }

  }

}

const deleteChange = () => {

if (isEdit) {
    setState({
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
        tags: props.tags
    });
    setError({
        english: '',
        transcription: '',
        russian: '',
        tags: ''
    });
    setEdit(!isEdit);
  }
}


const saveChange = () => {
  if (isValid) {
      console.log(state);
      setEdit(!isEdit);
  }
}

return (
  <tr>
      <td>{isError.english ? <div styleName="error">{isError.english}</div> : ""}
          {isEdit ? <input type="text" styleName={state.english && !isError.english ? "" : "noValid"} value={state.english} onChange={handleChange} name="english" /> : state.english}</td>
      <td>{isError.transcription ? <div styleName="error">{isError.transcription}</div> : ''}
          {isEdit ? <input type="text" styleName={state.transcription && !isError.transcription ? "" : "noValid"} value={state.transcription} onChange={handleChange} name="transcription" /> : state.transcription}</td>
      <td>{isError.russian ? <div styleName="error">{isError.russian}</div> : ''}
          {isEdit ? <input type="text" styleName={state.russian && !isError.russian ? "" : "noValid"} value={state.russian} onChange={handleChange} name="russian" /> : state.russian}</td>
      <td>{isError.tags ? <div styleName="error">{isError.tags}</div> : ''}
          {isEdit ? <input type="text" styleName={state.tags && !isError.tags ? "" : "noValid"} value={state.tags} onChange={handleChange} name="tags" /> : state.tags}</td>
      <td>
          {isEdit ? <button styleName="btnSave" onClick={saveChange} disabled={!isValid}>Save</button>
              : <button styleName="btnEdit" onClick={editChange}>Edit</button>}
          <button styleName="btnDelete" onClick={deleteChange}>Delete</button>
      </td>
  </tr>
);
};
export default CSSModules(Table, style);