export interface Todo {
  title: string;
  done: boolean;
  priority?: Priority;
}

export enum Priority {
  Low = 'Low', Medium = 'Medium', High = 'High', All = 'All'
}

export enum Notification {
  No = '', Create = 'Successfully add new todo', Error = `Error was appear`, Remove = 'Successfully remove todo'
}
