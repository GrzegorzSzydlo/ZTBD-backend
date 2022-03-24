import { Terms } from "../entities/mongodb/Terms";
import { MongoDbDatabase } from "../connection/TypeOrmConnectionFactory";

export const termsRepository = MongoDbDatabase.getRepository(Terms);
