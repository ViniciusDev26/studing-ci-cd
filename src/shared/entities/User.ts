import { randomUUID } from 'crypto'

export interface UserParams {
  id?: string
  name: string
  email: string
  password: string
}

export class User {
  private readonly id: string
  private readonly name: string
  private readonly email: string
  private readonly password: string

  constructor ({ id, name, email, password }: UserParams) {
    this.id = id ?? randomUUID()
    this.name = name
    this.email = email
    this.password = password
  }

  public getId (): string {
    return this.id
  }

  public getName (): string {
    return this.name
  }
}
