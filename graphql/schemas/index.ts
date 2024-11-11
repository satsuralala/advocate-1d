import { gql } from "graphql-tag";

export const typeDefs = gql`
  scalar Date

  type Task{
  _id:ID!
  taskName:String!
  isDone:Boolean!
  priority:Int!
  createdAt:Date
  updatedAt:Date
  }

  type Query{
      getFinishedTasksLists:[Task]
      getAllTasks:[Task]
  }
  
  type Mutation{
  addTask(taskName:String!, priority:Int!):Task
  updateTask(_id:ID!, taskName:String, priority:Int, isDone:Boolean):Task
  }
`;


