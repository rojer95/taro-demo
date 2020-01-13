/* eslint-disable import/prefer-default-export */
import request from "./utils/request";

export const load = async () => {
  return await request(
    "https://apis.map.qq.com/place_cloud/search/region?key=OORBZ-4MYCW-6WARR-O5CS7-LL2GF-7ABC4&table_id=5e01efe43a52dd5681654d21&region=%E5%85%A8%E5%9B%BD"
  );
};
