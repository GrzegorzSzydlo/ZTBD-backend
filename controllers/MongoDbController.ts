import { logger } from "../config/logger";
import { Request, Response } from "express";
import * as faker from "faker";
import { Terms } from "../orm/entities/mongodb/Terms";
import { termsRepository } from "../orm/repositories/MongoDbRespositories";

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

export const create = async (req: Request, res: Response) => {
  try {
    const iterator = 10;
    for (let i = 0; i < iterator; i++) {
      logger.debug(`iter = ${iterator}`);
      await createTerms();
    }
    return res.status(200).json({ succes: true });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const createTerms = async (): Promise<Terms> => {
  const body: Omit<Terms, "_id" | "id"> = {
    start_date: new Date(),
    end_date: new Date(),
    free_slots: 0,
    price: 0,
  };
  const terms = await termsRepository.create(body);
  await termsRepository.save(terms);
  return terms;
};
