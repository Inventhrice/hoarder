import "dotenv/config";

import { TidyAssetsWorker } from "tidyAssetsWorker";

import serverConfig from "@hoarder/shared/config";
import logger from "@hoarder/shared/logger";
import { runQueueDBMigrations } from "@hoarder/shared/queues";

import { CrawlerWorker } from "./crawlerWorker";
import { shutdownPromise } from "./exit";
import { OpenAiWorker } from "./openaiWorker";
import { SearchIndexingWorker } from "./searchWorker";

async function main() {
  logger.info(`Workers version: ${serverConfig.serverVersion ?? "not set"}`);
  runQueueDBMigrations();

  const [crawler, openai, search, tidyAssets] = [
    await CrawlerWorker.build(),
    OpenAiWorker.build(),
    SearchIndexingWorker.build(),
    TidyAssetsWorker.build(),
  ];

  await Promise.any([
    Promise.all([crawler.run(), openai.run(), search.run(), tidyAssets.run()]),
    shutdownPromise,
  ]);
  logger.info(
    "Shutting down crawler, openai, tidyAssets and search workers ...",
  );

  crawler.stop();
  openai.stop();
  search.stop();
  tidyAssets.stop();
}

main();
