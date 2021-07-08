import { action, makeAutoObservable, makeObservable, observable } from 'mobx';

// makeObservable
// class Count {
//   number: number = 0;

//   constructor() {
//     makeObservable(this, {
//       number: observable,
//       increase: action,
//       decrease: action,
//     });
//   }

//   increase = () => {
//     this.number++;
//   };
//   decrease = () => {
//     this.number--;
//   };
// }

// makeAutoObservable 방법을 더 선호...
// 하지만, super나 subclassed 에서는 사용 불가능
class Count {
  number: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
}

const countStore = new Count();
export default countStore;
