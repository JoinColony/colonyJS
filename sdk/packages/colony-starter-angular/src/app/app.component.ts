import { Component, Inject, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})

export class AppComponent implements OnInit {

  public title = "colony-starter-angular";
  public status = "";
  public model = {
    colonyClient: null,
    networkClient: null,
    wallet: null,
  };

  constructor(
    @Inject(MatSnackBar) private matSnackBar: MatSnackBar,
    @Inject(AppService) private appService: AppService,
  ) {}

  public ngOnInit(): void {
    this.start();
  }

  // Get network client
  public async start() {
    this.clearError();
    this.setLoading();
    this.appService.openWallet()
    .then(wallet => {
      this.model.wallet = wallet;
      return this.appService.getNetworkClient("local", wallet);
    })
    .then(networkClient => {
      this.model.networkClient = networkClient;
      return this.appService.getColonyClient(networkClient, 1);
    })
    .then(colonyClient => {
      this.model.colonyClient = colonyClient;
      this.clearLoading();
    }).catch((error) => {
      this.setError(error);
    });
  }

  private setLoading() {
    this.matSnackBar.open("Loading...", null);
  }

  private clearLoading() {
    this.matSnackBar.dismiss();
  }

  private setError(error: any) {
    this.matSnackBar.open(error.message, null);
  }

  private clearError() {
    this.matSnackBar.dismiss();
  }

}
