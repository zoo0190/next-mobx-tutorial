import React from 'react';
import { observer } from 'mobx-react';
import store from '../../store';
import { autorun } from 'mobx';

const Count: React.FC = observer(() => {
  const { countClass, countObject, doubleClassAuto, doubleObject } = store;
  autorun(() => {
    if (doubleObject.double) return console.log('Double' + doubleObject.double);
    if (doubleObject.double === 8) {
      console.log('만약 value가 8이라면 0으로 초기화');
      doubleObject.value = 0;
    }
  });

  return (
    <div style={{ padding: '50px' }}>
      <div style={{ marginBottom: '50px' }}>
        <h1>Count (Class)</h1>
        <div>number: {countClass.number}</div>
        <button onClick={() => countClass.increase()}>plus</button>
        <button onClick={() => countClass.decrease()}>minus</button>
      </div>

      <div style={{ marginBottom: '50px' }}>
        <h1>Count (Object)</h1>
        <div>num: {countObject.num}</div>
        <button onClick={() => countObject.increase()}>increase</button>
        <button onClick={() => countObject.decrease()}>decrease</button>
      </div>

      <div>
        <h1>Computed</h1>
        <div>double number: {doubleObject.value}</div>
        <button onClick={() => doubleObject.increment()}>
          double increment
        </button>
      </div>
    </div>
  );
});

export default Count;
