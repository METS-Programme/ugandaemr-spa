import { getAsyncLifecycle } from '@openmrs/esm-framework';

const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

const backendDependencies = {};
const moduleName = '@uganda/esm-cervical-cancer-app';

function setupOpenMRS() {
  return {
    pages: [
      {
        route: 'cervical-cancer',
        load: getAsyncLifecycle(() => import('./root.component'), {
          featureName: 'cervical-cancer',
          moduleName,
        }),
        online: true,
        offline: true,
      },
    ],
    extensions: [],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
