// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://a66b20f0f48eaa1b5588707ff7b54b0e@o4509996574834688.ingest.us.sentry.io/4509996580077568",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],

//   tracesSampleRate: 1.0,
});

Sentry.profiler.startProfiler();

Sentry.startSpan({
    name: "My First Transaction",
}, () => {

});
 
Sentry.profiler.stopProfiler();