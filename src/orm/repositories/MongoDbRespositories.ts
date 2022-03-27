import { MongoDbDatabase } from "../connection/TypeOrmConnectionFactory";
import { Terms } from "../entities/mongodb/Terms";
import { User } from "../entities/mongodb/User";
import { Credential } from "../entities/mongodb/Credential";
import { Comment } from "../entities/mongodb/Comment";
import { News } from "../entities/mongodb/News";
import { SportCamps } from "../entities/mongodb/SportCamps";
import { SportCompetition } from "../entities/mongodb/SportCompetition";

export const termsRepository = MongoDbDatabase.getMongoRepository(Terms);
export const userRepository = MongoDbDatabase.getMongoRepository(User);
export const commentRepository = MongoDbDatabase.getMongoRepository(Comment);
export const credentialRepository =
  MongoDbDatabase.getMongoRepository(Credential);
export const newsRepository = MongoDbDatabase.getMongoRepository(News);
export const sportCampsRepository =
  MongoDbDatabase.getMongoRepository(SportCamps);
export const sportCompetitionRepository =
  MongoDbDatabase.getMongoRepository(SportCompetition);
