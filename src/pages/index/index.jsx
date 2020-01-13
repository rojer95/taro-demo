import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";

import "./index.less";

@inject("counterStore")
@observer
class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidHide() {}

  config = {
    navigationBarTitleText: "首页"
  };

  increment = () => {
    const { counterStore } = this.props;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props;
    counterStore.incrementAsync();
  };

  go_test = () => {
    Taro.navigateTo({
      url: "/pages/list/index"
    });
  };
  render() {
    const {
      counterStore: { counter }
    } = this.props;
    return (
      <View>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>

        <Button onClick={this.go_test}>go test</Button>
      </View>
    );
  }
}

export default Index;
