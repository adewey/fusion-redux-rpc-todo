import { createPlugin } from "fusion-core";
import { LoggerToken } from "fusion-tokens";

export default __NODE__ &&
  createPlugin({
    deps: { logger: LoggerToken },
    middleware({ logger }) {
      return (ctx, next) => {
        if (ctx.method === "POST" && ctx.path === "/health") {
          ctx.body = { ok: true };
          logger.log("health");
        }
        return next();
      };
    }
  });
