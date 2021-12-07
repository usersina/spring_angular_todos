/**
 * Used to represent the logged in user.
 * This is different from the **User** entity.
 */
export interface LoggedUser {
  sub: string;
  roles: Role[];
  exp: number;
}

enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}
