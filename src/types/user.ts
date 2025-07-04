export interface IUser {
  id: string;
  email: string;
  isActive?: boolean;
  role: " SUPER_ADMIN" | " USER" | "ADMIN" | "SERVICE_PROVIDER";
  iat?: number;
  exp?: number;
}
