export enum IncrementType {
  LIKES = "likes",
  VIEWS = "views",
  FIRES = "fires",
  ROCKETS = "rockets",
  CLAPS = "claps",
}

export interface Reactions {
  views: number;
  likes: number;
  rockets: number;
  fires: number;
  claps: number;
}

export const DEFAULT_REACTIONS: Reactions = {
  views: 0,
  likes: 0,
  rockets: 0,
  fires: 0,
  claps: 0,
};
