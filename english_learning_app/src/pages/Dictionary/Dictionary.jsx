import React from 'react';
import data from '../../data.json';
import Table from '../../components/Table/Table';
import CSSModules from 'react-css-modules';
import style from './dictionary.module.scss';

function Dictionary() {
  return (
    <div styleName="table">
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
          data.map((item) =>
            <Table 
              isEdit={false}
              key = {item.id} 
              english = {item.english} 
              transcription = {item.transcription}
              russian = {item.russian}
              tags = {item.tags}
              >
            </Table>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default CSSModules(Dictionary, style);
