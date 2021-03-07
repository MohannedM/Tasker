export const taskSchema = `
    input CreateTaskInput{
        title: String!
        body: String!
        assignedTo: ID!
    }

    input UpdateTaskInput{
        taskId: String!
        title: String
        body: String
        assignedTo: ID
    }

    type Task{
        _id: ID!
        title: String!
        body: String!
        createdBy: User!
        assignedTo: User!
        createdAt: String
        updatedAt: String
    }

    extend type Mutation{
        createTask(taskInput: CreateTaskInput): Task!
        updateTask(taskInput: UpdateTaskInput): Task!
        deleteTask(taskId: ID!): Task!
    }

    extend type Query{
        getUserCreatedTasks: [Task]!
        getUserAssignedTasks: [Task]!
        getTask(taskId: String!): Task!
    }
`
