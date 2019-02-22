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
    colony: null,
    colonyClient: null,
    domain: null,
    networkClient: null,
    task: null,
    token: null,
  };

  constructor(
    @Inject(MatSnackBar) private matSnackBar: MatSnackBar,
    @Inject(AppService) private appService: AppService,
  ) {}

  public ngOnInit(): void {
    this.start();
  }

  public async start() {
    // Create an instance of ColonyNetworkClient using the adapter
    this.appService.connectNetwork().then((res) => {
      this.model.networkClient = res;
    }).catch((err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  // Create an ERC20 token
  public async token(symbol: string) {
    this.setStatus("Initiating tx...");
    this.appService.createToken(this.model.networkClient, symbol).then((res) => {
      this.model.token.name = name;
      this.model.token.symbol = symbol;
      this.model.token.address = res;
    }).catch((err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  // Create a colony using the token address of the ERC20 token
  public async createColony(tokenAddress: string) {
    this.setStatus("Initiating tx...");
    this.appService.createColony(this.model.networkClient, tokenAddress).then((res) => {
      this.model.colony = res;
      this.getColonyClient();
    }).catch((err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  // Get an initialized ColonyClient for the colony
  public async getColonyClient() {
    this.appService.getColonyClient(this.model.networkClient, this.model.colony.id).then((res) => {
      this.model.colonyClient = res;
    });
  }

  // Add a domain to the colony
  public async addDomain() {
    this.setStatus("Initiating tx...");
    this.appService.addDomain(this.model.colonyClient).then((res) => {
      this.model.domain = res;
    }).catch((err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  // Create a task in the colony
  public async createTask(title: string, description: string, domainId: number) {
    this.setStatus("Initiating tx...");
    const taskSpecification = { title, description };
    this.appService.createTask(this.model.colonyClient, Number(domainId), taskSpecification).then((res) => {
      this.model.task = res;
    }).catch((err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  private setStatus(status: string) {
    this.matSnackBar.open(status, null, { duration: 3000 });
  }
}
