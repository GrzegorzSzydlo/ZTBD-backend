import { Request, Response } from "express";
import * as faker from "faker";
import { logger } from "../config/logger";
import { Comment } from "../orm/entities/mysql/Comment";
import { Credential } from "../orm/entities/mysql/Credential";
import { News } from "../orm/entities/mysql/News";
import { SportCamps } from "../orm/entities/mysql/SportCamps";
import { SportCompetition } from "../orm/entities/mysql/SportCompetition";
import { Terms } from "../orm/entities/mysql/Terms";
import { User } from "../orm/entities/mysql/User";
import {
  commentRepository,
  credentialRepository,
  newsRepository,
  sportCampsRepository,
  sportCompetitionRepository,
  termsRepository,
  userRepository,
} from "../orm/repositories/MySqlRepositories";

export const getFirstQuery = async (req: Request, res: Response) => {
  try {
    //replace with time measurement later
    const time = faker.datatype.number({ min: 5, max: 15 });
    return res.status(200).json({ time });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const getSecondQuery = async (req: Request, res: Response) => {
  try {
    //replace with time measurement later
    const time = faker.datatype.number({ min: 10, max: 30 });
    return res.status(200).json({ time });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const getThirdQuery = async (req: Request, res: Response) => {
  try {
    //replace with time measurement later
    const time = faker.datatype.number({ min: 20, max: 50 });
    return res.status(200).json({ time });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const getFourthQuery = async (req: Request, res: Response) => {
  try {
    //replace with time measurement later
    const time = faker.datatype.number({ min: 40, max: 90 });
    return res.status(200).json({ time });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const getFifthQuery = async (req: Request, res: Response) => {
  try {
    //replace with time measurement later
    const time = faker.datatype.number({ min: 70, max: 150 });
    return res.status(200).json({ time });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const create = async () => {
  try {
    const iterator = 1000;
    for (let i = 0; i < iterator; i++) {
      const user = await createUser();
      const term = await createTerm();
      await createSportCamps(term);
      await createComment(user);
      await createCredential(user);
      await createNews(user);
      await createSportCompetition(user);
    }
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (): Promise<User> => {
  const body: Omit<User, "_id" | "id"> = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    profile_photo: faker.image.avatar(),
  };
  const user = await userRepository.create(body);
  await userRepository.save(user);
  return user;
};

const createTerm = async (): Promise<Terms> => {
  const body: Omit<Terms, "_id" | "id"> = {
    start_date: faker.date.future(1),
    end_date: faker.date.future(1),
    free_slots: faker.datatype.number({ max: 10000, min: 10 }),
    price: faker.datatype.number({ max: 100000, min: 100 }),
  };
  const terms = await termsRepository.create(body);
  await termsRepository.save(terms);
  return terms;
};

const createSportCamps = async (terms: Terms): Promise<SportCamps> => {
  const body: Omit<SportCamps, "_id" | "id"> = {
    title: faker.name.title(),
    localization: faker.address.city(),
    recommended_age: faker.datatype.number({ max: 90, min: 10 }).toString(),
    duration: faker.datatype.number({ max: 10000, min: 10 }),
    description: faker.lorem.words(20),
    camp_filename: faker.image.imageUrl(),
    terms,
  };
  const sportCamps = await sportCampsRepository.create(body);
  await sportCampsRepository.save(sportCamps);
  return sportCamps;
};

const createComment = async (user: User): Promise<Comment> => {
  const body: Omit<Comment, "_id" | "id"> = {
    content: faker.lorem.words(20),
    username: faker.name.firstName(),
    user,
  };
  const comment = await commentRepository.create(body);
  await commentRepository.save(comment);
  return comment;
};

const createCredential = async (user: User): Promise<Credential> => {
  const body: Omit<Credential, "_id" | "id"> = {
    email: faker.internet.email(),
    roles: faker.random.arrayElement(["admin", "guest"]),
    password: faker.internet.password(),
    active: faker.random.arrayElement(["false", "true"]),
    admin: faker.name.middleName(),
    user,
    facebook_id: faker.datatype.uuid(),
    google_id: faker.datatype.uuid(),
  };
  const credential = await credentialRepository.create(body);
  await credentialRepository.save(credential);
  return credential;
};

const createNews = async (user: User): Promise<News> => {
  const body: Omit<News, "_id" | "id"> = {
    title: faker.name.title(),
    description: faker.lorem.words(20),
    camp_filename: faker.image.imageUrl(),
    image: faker.image.imageUrl(),
    date: faker.date.future(1),
    user,
  };
  const news = await newsRepository.create(body);
  await newsRepository.save(news);
  return news;
};

const createSportCompetition = async (
  user: User
): Promise<SportCompetition> => {
  const body: Omit<SportCompetition, "_id" | "id"> = {
    title: faker.name.title(),
    localization: faker.address.city(),
    duration: faker.datatype.number({ max: 10000, min: 10 }),
    user,
    data_time: faker.date.future(1),
    discipline: faker.lorem.word(10),
  };
  const sportCompetition = await sportCompetitionRepository.create(body);
  await sportCompetitionRepository.save(sportCompetition);
  return sportCompetition;
};
