import mainCaller from "./mainCaller";
import HTTPMethods from "../HTTPMethods";

export class CategoryApi {
  static endpoint = "/api/v1/categories/";

  static get(params) {
    return mainCaller(this.endpoint, HTTPMethods.GET, null, null, params);
  }
}
