import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { glContext } from '../../Context/MyContext';
import Table from '../../components/Table/Table';
import CSSModules from 'react-css-modules';
import style from './dictionary.module.scss';

function Dictionary() {
  const {dataContext, setDataContext} = useContext(glContext); 

  const [dictionary, setDictionary] = useState(false);

  useEffect (() => {
    setDictionary(dataContext)
  },[])

  const editWord = (id, english, transcription, russian, tags) => {
    const copyDictionary = [...dictionary]
    const resEditWord = copyDictionary.map(item => {
      if(item.id === id) {
        item.english = english
        item.transcription = transcription
        item.russian = russian
        item.tags = tags
        return item
      }
      return item
    })
    setDictionary(resEditWord)
  }

  return (
    <div styleName="table">
      <table styleName='table_container'>
        <tr styleName='table_header'>
          <td><div styleName='table_header_cell'>English</div></td>
          <td><div styleName='table_header_cell'>Transcription</div></td>
          <td><div styleName='table_header_cell'>Russian</div></td>
          <td><div styleName='table_header_cell'>Tags</div></td>
          <td><div styleName='table_header_cell'>Changes</div></td>
        </tr>
        <tr>
          {dataContext?.map((item) => {
              return (
                <Table 
                  {...item}
                  isEdit={false}
                  key = {item.id.toString()}
                  editWord = {editWord}>
                </Table>)
              }
            )
          }
        </tr>
      </table>
    </div>
  );
};

export default CSSModules(Dictionary, style);
