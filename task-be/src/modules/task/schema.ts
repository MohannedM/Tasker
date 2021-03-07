export const taskSchema = `
    input CreateTaskInput{
        title: String!
        body: String!
        assignedTo: ID
    }

    input UpdateTaskInput{
        taskId: String!
        title: String
        body: String
        assignedTo: ID
    }

    type Task{
        id: ID!
        title: String!
        body: String!
        createdBy: User!
        assignedTo: User
    }

    type Mutation{
        createTask(taskInput: CreateTaskInput): Task!
        updateTask(taskInput: UpdateTaskInput): Task!
        deleteTask(userData: LoginInput): AuthData!
    }

    type Query{
        getUserCreatedTasks(token: String!): [Task]
        getUserWork(token: String!): [Task]
        getTask(taskId: String!): Task!
    }
`
