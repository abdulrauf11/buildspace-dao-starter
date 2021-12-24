import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
  '0x8dE0180C52599d88701E6C1cB9ff95adCc0cbCEe'
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Blue book',
        description: 'This NFT will give you access to TeachDAO!',
        image: readFileSync('scripts/assets/book.jpeg'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
