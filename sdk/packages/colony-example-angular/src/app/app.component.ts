import { Component, Inject, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})

export class AppComponent implements OnInit {

  public title = "colony-example-angular";
  public status = "";
  public model = {
    colonyAddress: null,
    colonyClient: null,
    domain: null,
    networkClient: null,
    task: null,
    token: {
      address: null,
      symbol: null,
    },
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
    .then((wallet) => {
      this.model.wallet = wallet;
      return this.appService.getNetworkClient("local", wallet);
    }).then((networkClient) => {
      this.model.networkClient = networkClient;
    }).catch((error) => {
      this.setError(error);
    });
  }

  // Create an ERC20 token
  public async token(symbol: string) {
    this.clearError();
    this.setLoading();
    this.appService.createToken(this.model.networkClient, symbol).then((res) => {
      this.model.token.address = res;
      this.model.token.symbol = symbol;
      this.clearLoading();
    }).catch((error) => {
      this.setError(error);
    });
  }

  // Create a colony using the token address
  public async createColony(tokenAddress: string) {
    this.clearError();
    this.setLoading();
    this.appService.createColony(this.model.networkClient, tokenAddress).then((res) => {
      this.model.colonyAddress = res;
      this.clearLoading();
    }).catch((error) => {
      this.setError(error);
    });
  }

  // Get colony client
  public async getColonyClient(colonyAddress: string) {
    this.clearError();
    this.setLoading();
    this.appService.getColonyClient(this.model.networkClient, colonyAddress).then((res) => {
      this.model.colonyClient = res;
      this.clearLoading();
    }).catch((error) => {
      this.setError(error);
    });
  }

  // Add a domain to the colony
  public async addDomain(parentDomainId: number) {
    this.clearError();
    this.setLoading();
    this.appService.addDomain(this.model.colonyClient, Number(parentDomainId)).then((res) => {
      this.model.domain = res;
      this.clearLoading();
    }).catch((error) => {
      this.setError(error);
    });
  }

  // Create a task in the colony
  public async createTask(title: string, description: string, domainId: number) {
    this.clearError();
    this.setLoading();
    this.appService.createTask(this.model.colonyClient, Number(domainId), { title, description }).then((res) => {
      this.model.task = res;
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
