import path from 'path';
import * as dotenv from 'dotenv';

const __dirname = path.resolve();

const result = dotenv.config({ path: __dirname + "/server/.env"});
if (result.error) {
    console.log(result.error);
    throw result.error
}