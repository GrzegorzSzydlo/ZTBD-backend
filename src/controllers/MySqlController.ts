import { Request, Response } from "express";
import * as faker from "faker";

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
