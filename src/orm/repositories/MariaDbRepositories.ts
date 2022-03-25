import { MariaDbDatabase } from "../connection/TypeOrmConnectionFactory";
import { Terms } from "../entities/mariadb/Terms";
import { User } from "../entities/mariadb/User";
import { Credential } from "../entities/mariadb/Credential";
import { Comment } from "../entities/mariadb/Comment";
import { News } from "../entities/mariadb/News";
import { SportCamps } from "../entities/mariadb/SportCamps";
import { SportCompetition } from "../entities/mariadb/SportCompetition";

export const termsRepository = MariaDbDatabase.getRepository(Terms);
export const userRepository = MariaDbDatabase.getRepository(User);
export const commentRepository = MariaDbDatabase.getRepository(Comment);
export const credentialRepository = MariaDbDatabase.getRepository(Credential);
export const newsRepository = MariaDbDatabase.getRepository(News);
export const sportCampsRepository = MariaDbDatabase.getRepository(SportCamps);
export const sportCompetitionRepository =
  MariaDbDatabase.getRepository(SportCompetition);
