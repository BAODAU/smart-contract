from brownie import accounts, config, ERC777Token, network

initial_supply = 10000000000000000000000
# singletons = ERC777Token.IERC1820Registry
def main():
    account = accounts[0]
    
    erc777 = ERC777Token.deploy(
        initial_supply, [], {"from" : account})