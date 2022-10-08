import mainCaller from "./mainCaller";
import HTTPMethods from "../HTTPMethods";

export class ArticleApi {
  static endpoint = "/api/v1/articles/";

  static get(params) {
    return mainCaller(this.endpoint, HTTPMethods.GET, null, null, params);
  }
  static getOne(id) {
    return mainCaller(`${this.endpoint}/${id}/`, HTTPMethods.GET);
  }
  static download(id) {
    return mainCaller(`/api/v1/article/download/${id}/`, HTTPMethods.POST);
  }
}
