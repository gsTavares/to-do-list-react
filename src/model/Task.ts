import User from "./User"

export default interface Task {
    id?: number,
    user: User,
    description: string,
    creationDate?: Date,
    timeToComplete?: Date,
    completed: boolean
}