import User from "./User"

export default interface Task {
    id?: number,
    user: User,
    description: string,
    timeToComplete?: Date,
    creationDate?: Date
}