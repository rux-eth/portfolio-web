// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import {BaseSetup} from "./BaseSetup.sol";

contract RuxClientManagerTest is BaseSetup {
    function setUp() public virtual override {
        BaseSetup.setUp();
        vm.startPrank(m);
        vm.stopPrank();
    }
}
