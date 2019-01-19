import { Component, OnInit } from '@angular/core';

// Module Imports
const connectNetwork = require('../../examples/connectNetwork');
const createToken = require('../../examples/createToken');
const createColony = require('../../examples/createColony');
const getColonyClient = require('../../examples/getColonyClient');
const addDomain = require('../../examples/addDomain');
const createTask = require('../../examples/createTask');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'colony-starter-angular';

  // State
  state = {
    networkClient: [],    // networkClient (per account)
    colonyClient: [],     // colonyClient (per account)
    tokenAddress: '',
    colony: {address: '', id: null},
    domain: {id: null, parentSkillId: null, potId: null},
    task: {}
  };

  ngOnInit(): void {
    this.example();
  }

  async example() {

    // Create an instance of ColonyNetworkClient using the adapter
    this.state.networkClient[0] = await connectNetwork(0);

    // Create ERC20 token
    this.state.tokenAddress = await createToken(
      this.state.networkClient[0],         // networkClient
      'Token',                        // name
      'TKN',                          // symbol
    );

    // Create a colony using the token address of the ERC20 token
    this.state.colony = await createColony(
      this.state.networkClient[0],         // networkClient
      this.state.tokenAddress,             // tokenAddress
    );

    // Get an initialized ColonyClient for the colony
    this.state.colonyClient[0] = await getColonyClient(
      this.state.networkClient[0],         // networkClient
      this.state.colony.id,                // colonyId
    );
    // TODO - Same issues as before

    this.state.domain = await addDomain(
      this.state.colonyClient[0],          // colonyClient
      1,                              // parentDomainId
    );
    this.createTask();
  }

  async createTask() {
    try {
      this.state.task = await createTask(
        this.state.colonyClient[0],          // colonyClient
        this.state.domain.id,                // domainId
        {
          title: 'Task Title',                  // title
          description: 'Title Description',      // description
        },
      );
      if (!this.state.task) {
        console.log('Create Task failed!');
      } else {
        console.log('Create Task complete!');
      }
    } catch (e) {
      console.log(e);
    }
  }
}
