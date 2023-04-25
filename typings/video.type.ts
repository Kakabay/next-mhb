import { ISource } from "./source.type";

export interface IVideo {
  id: number;
  views: number | string;
  title: string;
  img: string;
  premium?: boolean;
  source: ISource;
}
