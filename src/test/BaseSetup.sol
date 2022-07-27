// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {stdStorage, StdStorage, Test} from "@std/Test.sol";

import {Utils} from "./utils/Utils.sol";
import {RuxClientManager} from "../contracts/RuxClientManager.sol";

contract BaseSetup is RuxClientManager, Utils {
    Utils internal utils = new Utils();
    address payable[] internal users = utils.createUsers(4);

    address internal m = users[0];
    address internal s = users[1];
    address internal j = users[2];
    address internal d = users[3];

    constructor() RuxClientManager() {}

    function setUp() public virtual {
        vm.label(m, "tm1");
        vm.label(s, "tm2");
        vm.label(j, "tm3");
        vm.label(d, "tm4");
        vm.startPrank(this.owner());
        this.transferOwnership(m);
        vm.stopPrank();
    }
}
