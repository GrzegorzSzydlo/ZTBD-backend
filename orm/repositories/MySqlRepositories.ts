import { Photo } from "../entities/mysql/Photo";
import { MySqlDatabase } from "../connection/TypeOrmConnectionFactory";

const PhotoRepository = MySqlDatabase.getRepository(Photo);
