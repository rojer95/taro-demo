import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import moment from "moment";
import "./index.less";

@inject("list")
@observer
class Index extends Component {
  componentWillMount() {
    this.load();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentWillReact() {}

  config = {
    navigationBarTitleText: "测试"
  };

  load = async () => {
    this.props.list.load();
  };

  render() {
    const {
      list: { list }
    } = this.props;
    return (
      <View className="container">
        <View>statu: {list.status}</View>
        {list.result && (
          <View>
            <View>count: {list.result.count}</View>
            {list.result && list.result.data && list.result.data.length && (
              <View>
                <View>data:</View>
                {list.result.data.map(it => {
                  const date_format = moment(it.create_time).format(
                    "YYYY-MM-DD HH:mm:ss"
                  );
                  return (
                    <View key={it.id}>
                      <View>id: {it.id}</View>
                      <View>title: {it.title}</View>
                      <View>create_time: {date_format}</View>
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

export default Index;
