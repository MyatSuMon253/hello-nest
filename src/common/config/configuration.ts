// export default () => ({
//   port: parseInt(process.env.PORT!, 10) || 3000,
//   database: {
//     host: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     port: process.env.DATABASE_PORT,
//   },
// });

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import * as yaml from 'js-yaml';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
  const config = yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;

  if (config.http.port < 1024 || config.http.port > 49151) {
    throw new Error('HTTP port must be between 1024 and 49151');
  }

  return config;
};
