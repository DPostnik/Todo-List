export interface Todo{
  title: string;
  done: boolean;
  priority?: Priority;
}

export enum Priority{
  Low = 'Low', Medium = 'Medium', High = 'High', All = 'All'
}
