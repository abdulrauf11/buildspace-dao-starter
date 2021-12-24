import sdk from './1-initialize-sdk.js';

const bundleDrop = sdk.getBundleDropModule(
  '0x8dE0180C52599d88701E6C1cB9ff95adCc0cbCEe'
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 10_000,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log('✅ Sucessfully set claim condition!');
  } catch (error) {
    console.error('Failed to set claim condition', error);
  }
})();
