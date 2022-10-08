import mainCaller from "./mainCaller";
import HTTPMethods from "../HTTPMethods";

export class MemberApi {
  static endpoint = "/api/v1/scholars/";

  static get() {
    return mainCaller(this.endpoint, HTTPMethods.GET);
  }
}
