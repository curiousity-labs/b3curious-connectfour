# Fractal Connected

Do more with DAOs...like play games. With the power of a simple descisions made in collaboration (or solo if you really want to). This site is for viewing purposes only. It reads events and data from Solidity written [Smart Contracts](https://github.com/curiousity-labs/b3-curious-games/blob/main/packages/b3-curious-contracts/contracts/ConnectFour.sol) and displays the game progress in real time.

## Supported Chains
- Goerli Testnet

## Useful Links
- [Fractal Framework](https://app.dev.fractalframework.xyz/)

## Game Address
Located at the top of the site [Fractal Connect Four](https://fractal-connect-four.netlify.app/). This will be used to interact with the current game along with the game id.

## Play as a DAO

if you are not a member of a DAO and would like to create your own using Fractal Framework visit [Fractal Framework](https://app.dev.fractalframework.xyz/)

There are two main commands for gameplay.

`Challenge`: Opponent can be a Safe Address or any other DAO or account address that is able to interact with contracts.
```shell
Target Address = [current season address]
Function Name = challenge
Function Signature = address opponent
```

```shell
Target Address = [current season address]
Function Name = makeMove
Function Signature = uint8 gameId, uint8 column
```

## Playing Solo
Want to challange as an ethereum account? Currently the only way to play is using `Etherscan`'s write contract feature. Search for the current game address on the correct network's etherscan. In the `Contract` tab, click on `Write Contract`. After connecting your web3 wallet you can use the methods here to interact directly with the contracts.

## Gameplay
### FAQs
- Who goes first?
- - Turns occur as each player makes a move starting with Team two. 
- Why can't I call column 6?
- - The contract is written with the count starting with 0 (like a developer). So from left to right, it's 0, 1, 2, 3, 4, 5, 6


