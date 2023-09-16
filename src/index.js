import app from "./app.js";
import { sequelize } from './database/database.js';
import 'dotenv/config';
import logger from './logs/logger.js';

async function main() {
    console.clear();
    await sequelize.sync({ force: false });

    const PORT = process.env.PORT;
    app.listen(PORT);
    //   console.log('Server listen on ', PORT);
    logger.info('Server on port ${PORT}');
    logger.debug('Server on port' + PORT);
}

main();