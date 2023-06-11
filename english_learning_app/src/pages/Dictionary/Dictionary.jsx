//import data from '../../data.json';
import Table from '../../components/Table/Table';
import { observer, inject} from 'mobx-react';
import { useState } from 'react';
import CSSModules from 'react-css-modules';
import style from './dictionary.module.scss';

function Dictionary({wordsStore}) {

  const [wordsList, setWordsList] = useState(false)

  const editWords = (id, english, transcription, russian, tags) => {
    const copyWordsList = [...wordsList]
    const resultEditWordsList = copyWordsList.map(item => {
      if (item.id === id) {
        item.english = english
        item.transcription = transcription
        item.russian = russian
        item.tags = tags
        return item
      }
      return item
    })
    setWordsList(resultEditWordsList)
  }
  return (
    <div styleName='table'>
      <table styleName='table_container'>
        <thead>
          <tr>
            <th>English</th>
            <th>Transcription</th>
            <th>Russian</th>
            <th>Tags</th>
            <th>Changes</th>
          </tr>
        </thead>
        <tbody>
          {
            wordsStore.words.map((item) => {
              return <Table {...item} key={item.id.toString()} editWords={editWords}/>
            // <Table 
            //   isEdit={false}
            //   key = {item.id} 
            //   english = {item.english} 
            //   transcription = {item.transcription}
            //   russian = {item.russian}
            //   tags = {item.tags}
            //   >
            // </Table>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default inject(['wordsStore'])(observer(CSSModules(Dictionary, style)));
