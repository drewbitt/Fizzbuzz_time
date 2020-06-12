import { Store } from "./BaseStore";
import { ref, Ref } from "vue";

interface Data extends Object {
  counter: number;
  buzz: number;
  fizz: number;
}

// Store solely for persisting across pages
class DataStore extends Store<Data> {
  protected data(): Data {
    return {
      counter: 0,
      buzz: 0,
      fizz: 0,
    };
  }

  setCounter(val: number) {
    this.state.counter = val;
  }
  setBuzz(val: number) {
    this.state.buzz = val;
  }
  setFizz(val: number) {
    this.state.fizz = val;
  }
}

export const dataStore: DataStore = new DataStore();
