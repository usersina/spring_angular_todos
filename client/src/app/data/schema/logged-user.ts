/**
 * Used to represent the logged in user.
 * This is different from the **User** entity.
 */
export interface LoggedUser {
  name: string;
  roles: string[];
}
