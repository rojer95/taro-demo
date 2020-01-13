import Taro from "@tarojs/taro";

const interceptor = function(chain) {
  const requestParams = chain.requestParams;

  if (!requestParams.header)
    requestParams.header = {
      Accept: "application/json"
    };

  return chain
    .proceed(requestParams)
    .then(res => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        return res;
      }
      const msg = res.data.message || `错误${res.statusCode}`;
      throw new Error(msg);
    })
    .catch(e => {
      setTimeout(() => {
        Taro.showToast({ title: e.message || e.errMsg, icon: "none" });
      }, 0);
      throw e;
    });
};

Taro.addInterceptor(interceptor);

export default async (url, method = "GET", data = {}) => {
  if (typeof method !== "string") {
    data = method;
    method = "GET";
  }

  return await Taro.request({
    url,
    method: method.toUpperCase(),
    data,
    dataType: "json"
  });
};
