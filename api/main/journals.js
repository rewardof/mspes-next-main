import mainCaller from "./mainCaller";
import HTTPMethods from "../HTTPMethods";

export class JournalApi {
  static endpoint = "/api/v1/journals/";

  static get(params) {
    return mainCaller(this.endpoint, HTTPMethods.GET, null, null, params);
  }
  static getID(id) {
    return mainCaller(`${this.endpoint + id}/`, HTTPMethods.GET, null, null);
  }
  static getOne(id, params) {
    return mainCaller(
      `${this.endpoint + id}/articles/`,
      HTTPMethods.GET,
      null,
      null,
      params
    );
  }
  static getArticleList(id, params) {
    return mainCaller(
      `${this.endpoint + id}/articles/`,
      HTTPMethods.GET,
      null,
      null,
      params
    );
  }
  static download(id) {
    return mainCaller(`/api/v1/journal/download/${id}/`, HTTPMethods.POST);
  }
}
