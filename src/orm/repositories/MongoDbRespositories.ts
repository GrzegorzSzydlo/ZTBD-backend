import { MongoDbDatabase } from "../connection/TypeOrmConnectionFactory";
import { Terms } from "../entities/mongodb/Terms";
import { User } from "../entities/mongodb/User";
import { Credential } from "../entities/mongodb/Credential";
import { Comment } from "../entities/mongodb/Comment";
import { News } from "../entities/mongodb/News";
import { SportCamps } from "../entities/mongodb/SportCamps";
import { SportCompetition } from "../entities/mongodb/SportCompetition";

export const termsRepository = MongoDbDatabase.getRepository(Terms);
export const userRepository = MongoDbDatabase.getRepository(User);
export const commentRepository = MongoDbDatabase.getRepository(Comment);
export const credentialRepository = MongoDbDatabase.getRepository(Credential);
export const newsRepository = MongoDbDatabase.getRepository(News);
export const sportCampsRepository = MongoDbDatabase.getRepository(SportCamps);
export const sportCompetitionRepository =
  MongoDbDatabase.getRepository(SportCompetition);
