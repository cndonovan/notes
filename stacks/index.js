import { ApiStack } from './ApiStack';
import { StorageStack } from './StorageStack';
import { App } from '@serverless-stack/resources';

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
  app.stack(StorageStack).stack(ApiStack);
}
