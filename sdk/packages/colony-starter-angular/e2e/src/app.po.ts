import { browser, by, element } from "protractor";

export class AppPage {

  public navigateTo() {
    return browser.get("/");
  }

  public getTitleText() {
    return element(by.css("app-root h1")).getText();
  }

}
