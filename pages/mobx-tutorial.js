import React from 'react';
import { computed, observable } from 'mobx';
import { observer } from 'mobx-react-lite';

// 상태
const state = observable({
  time: 0,
  start: false,
});

// 계산된 값
const elapsedTime = computed(() => {
  const sec = Math.floor(state.time / 1000);
  const ms = Math.floor((state.time % 1000) / 10);
  return `${sec}:${ms}`;
});

let timerId = null;

const App = () => {
  const startTimer = () => {
    timerId = setInterval(() => {
      // 액션
      state.time = state.time + 10;
    }, 10);
    // 액션
    state.start = true;
  };

  const stopTimer = () => {
    if (timerId) clearInterval(timerId);
    // 액션
    state.start = false;
  };

  const handleClick = () => {
    if (state.start) stopTimer();
    else startTimer();
  };

  return (
    <>
      <div>{elapsedTime.get()}</div>
      <button onClick={() => handleClick()}>
        {state.start ? 'Stop' : 'Start'}
      </button>
    </>
  );
};

// 리액션
export default observer(App);
