export class UserEntity {
  id: number;
  profile_picture_id?: number;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  bio?: string;
  date_of_birth?: Date;
  phone?: string;
  country?: string;
  is_verified: boolean;
  last_login?: Date;
  created_at: Date;
  updated_at: Date;
}
