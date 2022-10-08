import mainCaller from "./mainCaller";
import HTTPMethods from "../HTTPMethods";

export class SettingsApi {
  static endpoint = "/api/v1/settings/";

  static get() {
    return mainCaller(this.endpoint, HTTPMethods.GET);
  }
}
