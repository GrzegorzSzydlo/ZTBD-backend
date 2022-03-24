import { Terms } from "../entities/mysql/Terms";
import { MySqlDatabase } from "../connection/TypeOrmConnectionFactory";

export const termsRepository = MySqlDatabase.getRepository(Terms);
