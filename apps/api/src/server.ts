import { logger } from '@youtility/logger';
import { createServer } from './app';

const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  logger.info(`api running on ${port}`);
});
