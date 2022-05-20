import axios from "../axios.config";
import { SETTINGS } from "../api";

export default async (originalUrlList) => {
  try {
    const additionalUrlList = [SETTINGS];

    const mergedUrlList = [...originalUrlList, ...additionalUrlList];
    // const resList = await Promise.all(
    //   mergeUrlList.map((url) =>
    //     axios.get(url).then(({ data }) => {
    //       return data;
    //     })
    //   )
    // );

    const originalResList = [];
    const fallbackList = {};

    for await (const res of mergedUrlList.map(async (el) => {
      return axios.get(el).then(({ data }) => {
        return [el, data];
      });
    })) {
      const [key, value] = res;

      if (originalUrlList.includes(key)) {
        originalResList.push(value);
      } else {
        fallbackList[key] = value;
      }
    }

    return {
      resList: originalResList,
      fallback: fallbackList,
    };
  } catch (err) {
    throw new Error("");
  }
};
