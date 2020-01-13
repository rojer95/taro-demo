import Taro from "@tarojs/taro";
import { observable, flow, action } from "mobx";
import { load } from "../api";

class Model {
  @observable list = {};

  load = flow(function*() {
    const { data } = yield load();
    this.list = data;
  });

  @action.bound
  clear(key, dedault = []) {
    this[key] = dedault;
  }
}

export default new Model();
