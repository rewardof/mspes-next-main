import mainCaller from "./mainCaller";
import HTTPMethods from "../HTTPMethods";

export class IndexingApi {
  static endpoint = "/api/v1/indexs/";

  static get() {
    return mainCaller(this.endpoint, HTTPMethods.GET);
  }
}
