import { User } from '../shared/entities/User'
import { Hasher } from '../shared/utils/contracts/Hasher'

export interface CreateUserServiceParams {
  name: string
  email: string
  password: string
}

export interface CreateUserServiceParams {
  user: {
    name: string
    email: string
    password: string
  }
}

export class CreateUserService {
  constructor (
    private readonly hasher: Hasher
  ) {}

  async execute ({ name, email, password }: CreateUserServiceParams): Promise<User> {
    const hashedPassword = await this.hasher.hash(password)
    const user = new User({
      name,
      email,
      password: hashedPassword
    })
  }
}
