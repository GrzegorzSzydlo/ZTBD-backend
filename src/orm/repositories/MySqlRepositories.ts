import { MySqlDatabase } from "../connection/TypeOrmConnectionFactory";
import { Terms } from "../entities/mysql/Terms";
import { User } from "../entities/mysql/User";
import { Credential } from "../entities/mysql/Credential";
import { Comment } from "../entities/mysql/Comment";
import { News } from "../entities/mysql/News";
import { SportCamps } from "../entities/mysql/SportCamps";
import { SportCompetition } from "../entities/mysql/SportCompetition";

export const termsRepository = MySqlDatabase.getRepository(Terms);
export const userRepository = MySqlDatabase.getRepository(User);
export const commentRepository = MySqlDatabase.getRepository(Comment);
export const credentialRepository = MySqlDatabase.getRepository(Credential);
export const newsRepository = MySqlDatabase.getRepository(News);
export const sportCampsRepository = MySqlDatabase.getRepository(SportCamps);
export const sportCompetitionRepository =
  MySqlDatabase.getRepository(SportCompetition);
