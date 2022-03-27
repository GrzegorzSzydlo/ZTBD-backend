import { Request, Response } from "express";
import * as faker from "faker";
import { Terms } from "../orm/entities/mongodb/Terms";
import {
  commentRepository,
  credentialRepository,
  newsRepository,
  sportCampsRepository,
  sportCompetitionRepository,
  termsRepository,
  userRepository,
} from "../orm/repositories/MongoDbRespositories";
import { User } from "../orm/entities/mongodb/User";
import { SportCamps } from "../orm/entities/mongodb/SportCamps";
import { Comment } from "../orm/entities/mongodb/Comment";
import { Credential } from "../orm/entities/mongodb/Credential";
import { News } from "../orm/entities/mongodb/News";
import { SportCompetition } from "../orm/entities/mongodb/SportCompetition";
import { ObjectId } from "mongodb";

export const getFirstQuery = async (req: Request, res: Response) => {
  try {
    const start = Date.now();
    await credentialRepository.findOne({
      where: { email: "Mike_Reichert@yahoo.com" },
    });

    const stop = Date.now();
    const time = stop - start;
    return res.status(200).json({ time });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const getSecondQuery = async (req: Request, res: Response) => {
  try {
    const start = Date.now();
    await userRepository.find({
      where: { first_name: "Rusty" },
    });
    const stop = Date.now();
    const time = stop - start;
    return res.status(200).json({ time });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const getThirdQuery = async (req: Request, res: Response) => {
  try {
    const start = Date.now();
    const news = await newsRepository.find({
      where: {
        date: { $gt: new Date("2023-01-06") } as any,
      },
    });

    const resp = news.map(async (item) => {
      const user = await userRepository.findOne({
        where: { _id: new ObjectId(item.userId) } as any,
      });
      return user;
    });
    await Promise.all(resp);
    const stop = Date.now();
    const time = stop - start;
    return res.status(200).json({ time });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const getFourthQuery = async (req: Request, res: Response) => {
  try {
    const start = Date.now();

    const stop = Date.now();
    const time = stop - start;
    return res.status(200).json({ time });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const create = async () => {
  try {
    const iterator = 5000;
    for (let i = 0; i < iterator; i++) {
      const user = await createUser();
      const term = await createTerm();
      await createSportCamps(term.id.toString());
      await createComment(user.id.toString());
      await createCredential(user.id.toString());
      await createNews(user.id.toString());
      await createSportCompetition(user.id.toString());
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

const createSportCamps = async (termsId: string): Promise<SportCamps> => {
  const body: Omit<SportCamps, "_id" | "id"> = {
    title: faker.name.title(),
    localization: faker.address.city(),
    recommended_age: faker.datatype.number({ max: 90, min: 10 }).toString(),
    duration: faker.datatype.number({ max: 10000, min: 10 }),
    description: faker.lorem.words(20),
    camp_filename: faker.image.imageUrl(),
    termsId,
  };
  const sportCamps = await sportCampsRepository.create(body);
  await sportCampsRepository.save(sportCamps);
  return sportCamps;
};

const createComment = async (userId: string): Promise<Comment> => {
  const body: Omit<Comment, "_id" | "id"> = {
    content: faker.lorem.words(20),
    username: faker.name.firstName(),
    userId,
  };
  const comment = await commentRepository.create(body);
  await commentRepository.save(comment);
  return comment;
};

const createCredential = async (userId: string): Promise<Credential> => {
  const body: Omit<Credential, "_id" | "id"> = {
    email: faker.internet.email(),
    roles: faker.random.arrayElement(["admin", "guest"]),
    password: faker.internet.password(),
    active: faker.random.arrayElement(["false", "true"]),
    admin: faker.name.middleName(),
    userId,
    facebook_id: faker.datatype.uuid(),
    google_id: faker.datatype.uuid(),
  };
  const credential = await credentialRepository.create(body);
  await credentialRepository.save(credential);
  return credential;
};

const createNews = async (userId: string): Promise<News> => {
  const body: Omit<News, "_id" | "id"> = {
    title: faker.name.title(),
    description: faker.lorem.words(20),
    camp_filename: faker.image.imageUrl(),
    image: faker.image.imageUrl(),
    date: faker.date.future(1),
    userId,
  };
  const news = await newsRepository.create(body);
  await newsRepository.save(news);
  return news;
};

const createSportCompetition = async (
  userId: string
): Promise<SportCompetition> => {
  const body: Omit<SportCompetition, "_id" | "id"> = {
    title: faker.name.title(),
    localization: faker.address.city(),
    duration: faker.datatype.number({ max: 10000, min: 10 }),
    userId,
    data_time: faker.date.future(1),
    discipline: faker.lorem.word(10),
  };
  const sportCompetition = await sportCompetitionRepository.create(body);
  await sportCompetitionRepository.save(sportCompetition);
  return sportCompetition;
};
