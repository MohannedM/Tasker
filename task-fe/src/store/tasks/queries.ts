import { taskInputType } from "./types";

export const createTaskQuery = (taskInput: taskInputType) => {
    return {
        query: `
            mutation {
                createTask(taskInput: {
                    title: "${taskInput.title}",
                    body: "${taskInput.body}",
                    assignedTo: "${taskInput.assignedTo}"
                }) {
                    _id
                    title
                    body
                    createdAt
                    updatedAt
                    assignedTo {
                        _id
                        username
                        email
                    }
                    createdBy {
                        _id
                        username
                        email
                    }
                }
            }
        `
    }
}

export const getUserTasksQuery = () => {
    return {
        query: `
        {
            getUserCreatedTasks {
              _id
              title
              body
              createdBy{
                _id
                username
                email
              }
              assignedTo{
                _id
                username
                email
              }
              createdAt
              updatedAt

            }
          }
        `
    }
}

export const getAssignedTasksQuery = () => {
    return {
        query: `
        {
            getUserAssignedTasks {
              _id
              title
              body
              createdBy{
                _id
                username
                email
              }
              assignedTo{
                _id
                username
                email
              }
              createdAt
              updatedAt

            }
          }
        `
    }
}

export const getTaskQuery = (taskId: string) => {
  return {
      query: `
      {
          getTask(taskId: "${taskId}") {
            _id
            title
            body
            createdBy{
              _id
              username
              email
            }
            assignedTo{
              _id
              username
              email
            }
            createdAt
            updatedAt

          }
        }
      `
  }
}

export const deleteTaskQuery = (taskId: string) => {
  return {
      query: `
      mutation {
        deleteTask(taskId: "${taskId}") {
            _id
            title
            body
            createdBy{
              _id
              username
              email
            }
            assignedTo{
              _id
              username
              email
            }
            createdAt
            updatedAt

          }
        }
      `
  }
}

export const updateTaskQuery = (taskId: string, taskInput: taskInputType) => {
  return {
      query: `
      mutation {
        updateTask(taskInput: {
          taskId: "${taskId}",
          title: "${taskInput.title}",
          body: "${taskInput.body}",
          assignedTo: "${taskInput.assignedTo}"
        }) {
            _id
            title
            body
            createdBy{
              _id
              username
              email
            }
            assignedTo{
              _id
              username
              email
            }
            createdAt
            updatedAt

          }
        }
      `
  }
}
