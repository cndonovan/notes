import { App } from '@serverless-stack/resources';

import { ApiStack } from './ApiStack';
import { AuthStack } from './AuthStack';
import { FrontendStack } from './FrontendStack';
import { StorageStack } from './StorageStack';

/**
 * @param {App} app
 */
export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'api',
    bundle: {
      format: 'esm',
    },
  });
  app.stack(StorageStack).stack(ApiStack).stack(AuthStack).stack(FrontendStack);
}
