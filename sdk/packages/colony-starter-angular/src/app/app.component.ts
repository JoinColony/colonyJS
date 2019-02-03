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

  public state = {
    colonyClient: [],     // colonyClient (per account)
    networkClient: [],    // networkClient (per account)
  };

  public model = {
    colony: {
      address: "",
      id: null,
    },
    domain: {
      id: null,
      parentSkillId: null,
      potId: null,
    },
    networkClient: {
      accountAddr: "",
      addr: "",
    },
    parentDomainId: 1,
    task: {
      desc: "",
      title: "",
    },
    taskObject: null,
    token: {
      address: "",
      name: "",
      symbol: "",
    },
  };

  constructor(@Inject(MatSnackBar) private matSnackBar: MatSnackBar,
              @Inject(AppService) private appService: AppService) {}

  public ngOnInit(): void {
    this.start();
  }

  public async start() {
    // Create an instance of ColonyNetworkClient using the adapter
    this.appService.connectNetwork().then( (res) => {
      this.state.networkClient[0] = res;
      this.model.networkClient.addr = this.state.networkClient[0]._contract.address;
      this.model.networkClient.accountAddr = this.state.networkClient[0]._contract.signer.address;
    }).catch( (err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  // Create an ERC20 token
  public async token(name, symbol) {
    this.setStatus("Initiating tx...");
    this.appService.createToken(this.state.networkClient[0], name, symbol).then( (res) => {
      this.model.token.name = name;
      this.model.token.symbol = symbol;
      this.model.token.address = res;
    }).catch( (err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  // Create a colony using the token address of the ERC20 token
  public async createColony(tokenAddress) {
    this.setStatus("Initiating tx...");
    this.appService.createColony(this.state.networkClient[0], tokenAddress).then( (res) => {
      this.model.colony = res;
      this.getColonyClient();
    }).catch( (err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  // Get an initialized ColonyClient for the colony
  public async getColonyClient() {
    this.appService.getColonyClient(this.state.networkClient[0], this.model.colony.id).then( (res) => {
      this.state.colonyClient[0] = res;
    });
  }

  // Add a domain to the colony
  public async addDomain() {
    this.setStatus("Initiating tx...");
    this.appService.addDomain(this.state.colonyClient[0], this.model.parentDomainId).then( (res) => {
      this.model.domain = res;
    }).catch( (err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  // Create a task in the colony
  public async createTask(title, desc, domainId) {
    this.setStatus("Initiating tx...");
    const taskObj = {title, desc};
    this.model.task.title = title;
    this.model.task.desc = desc;
    this.appService.createTask(this.state.colonyClient[0], Number(domainId), taskObj).then( (res) => {
      this.model.taskObject = res;
    }).catch( (err) => {
      this.setStatus("Error: See console");
      console.error(err);
    });
  }

  private setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }
}
