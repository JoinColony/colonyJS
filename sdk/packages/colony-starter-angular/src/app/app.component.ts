import { Component, OnInit } from "@angular/core";

const addDomain = require("../../examples/addDomain");
const connectNetwork = require("../../examples/connectNetwork");
const createColony = require("../../examples/createColony");
const createTask = require("../../examples/createTask");
const createToken = require("../../examples/createToken");
const getColonyClient = require("../../examples/getColonyClient");

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})

export class AppComponent implements OnInit {

  public title = "colony-starter-angular";

  public state = {
    colony: {
      address: "",
      id: null,
    },
    colonyClient: [],     // colonyClient (per account)
    domain: {
      id: null,
      parentSkillId: null,
      potId: null,
    },
    networkClient: [],    // networkClient (per account)
    task: {},
    tokenAddress: "",
  };

  public ngOnInit(): void {
    this.example();
  }

  public async example() {

    // Create an instance of ColonyNetworkClient using the adapter
    this.state.networkClient[0] = await connectNetwork(0);

    // Create an ERC20 token
    this.state.tokenAddress = await createToken(
      this.state.networkClient[0],      // networkClient
      "Token",                          // name
      "TKN",                            // symbol
    );

    // Create a colony using the token address of the ERC20 token
    this.state.colony = await createColony(
      this.state.networkClient[0],      // networkClient
      this.state.tokenAddress,          // tokenAddress
    );

    // Get an initialized ColonyClient for the colony
    this.state.colonyClient[0] = await getColonyClient(
      this.state.networkClient[0],      // networkClient
      this.state.colony.id,             // colonyId
    );

    // Add a domain to the colony
    this.state.domain = await addDomain(
      this.state.colonyClient[0],       // colonyClient
      1,                                // parentDomainId
    );

    // Create a task in the colony
    this.state.task = await createTask(
      this.state.colonyClient[0],       // colonyClient
      this.state.domain.id,             // domainId
      {
        description: "Title Description",      // description
        title: "Task Title",                  // title
      },
    );

  }

}
