import { z } from 'zod';

import { configUtil } from 'utils';

const schema = z.object({
  APP_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  IS_DEV: z.preprocess(() => process.env.APP_ENV === 'development', z.boolean()),
  API_URL: z.string(),
  WS_URL: z.string(),
  WEB_URL: z.string(),
  MIXPANEL_API_KEY: z.string().optional(),
});

type Config = z.infer<typeof schema>;

const processEnv = {
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  WS_URL: process.env.NEXT_PUBLIC_WS_URL,
  WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
  MIXPANEL_API_KEY: process.env.NEXT_PUBLIC_MIXPANEL_API_KEY,
} as Record<keyof Config, string | undefined>;

const config = configUtil.validateConfig<Config>(schema, processEnv);

export default config;
