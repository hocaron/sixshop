import {registerAs} from '@nestjs/config';
import {MongooseModuleOptions} from '@nestjs/mongoose';

export default registerAs('mongo', async (): Promise<MongooseModuleOptions> => {
  return {
    uri: process.env.MONGO_URI || 'mongodb://root:root@mongo:27017/sixshop',
  };
});
