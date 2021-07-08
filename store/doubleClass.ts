import {
  makeObservable,
  observable,
  computed,
  action,
  runInAction,
} from 'mobx';
import { makeAutoObservable } from 'mobx';

class Doubler {
  value;

  constructor(value: number) {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
    });

    this.value = value;
  }

  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }
}

const doubleClass = new Doubler(1);
export default doubleClass;

// class Doubler {
//   value;

//   constructor(value: number) {
//     makeAutoObservable(this);
//     // makeAutoObservablue이 다른 action, computed를 자동으로 선언
//     this.value = value;
//   }

//   get double() {
//     return this.value * 2;
//   }

//   increment() {
//     this.value++;
//   }
// }

// const doubleClassAuto = new Doubler(1);
// export default doubleClassAuto;
