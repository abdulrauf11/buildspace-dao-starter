import sdk from './1-initialize-sdk.js';

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule('0xa6b9C4b1d98640D8785E1Df0063a08150DF4E3dC');

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: 'TeachDAO Governance Token',
      // What's your token's symbol? Ex. "ETH"
      symbol: 'TEACH',
    });
    console.log(
      '✅ Successfully deployed token module, address:',
      tokenModule.address
    );
  } catch (error) {
    console.error('failed to deploy token module', error);
  }
})();
