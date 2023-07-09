# B3 Curious Connect Four
This is a game of connect four that is played on the blockchain.

~ more details coming soon

## Supported Chains
- Goerli Testnet

## Useful Links
- [Fractal Framework](https://app.dev.fractalframework.xyz/)

## Game Address
~ coming soon

## Play against another Address
~ coming soon

## Play against a bot
~ details coming soon
## Play as a DAO
~ details coming soon

**Supported DAOS**
### Snapshot
~ details coming soon

### Safe Global
~ details coming soon
### Fractal Framework
if you are not a member of a DAO and would like to create your own using Fractal Framework visit [Fractal Framework](https://app.dev.fractalframework.xyz/)

## How to Play

There are two main commands for gameplay. You will need to create a proposal to play a game and then for making each move.

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

## Playing on etherscan
Want to challange as an ethereum account? Currently the only way to play is using `Etherscan`'s write contract feature. Search for the current game address on the correct network's etherscan. In the `Contract` tab, click on `Write Contract`. After connecting your web3 wallet you can use the methods here to interact directly with the contracts.

## Gameplay
~ coming soon
### FAQs
- Who goes first?
- - Turns occur as each player makes a move starting with Team two. 
- Why can't I call column 6?
- - The contract is written with the count starting with 0 (like a developer). So from left to right, it's 0, 1, 2, 3, 4, 5, 6


