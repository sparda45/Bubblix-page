import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN || "https://f63c6a79c49273109027cf190510745e@o4508302996013056.ingest.us.sentry.io/4508302999158784",

  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1,

  debug: process.env.NODE_ENV === 'development',
});
