import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
}

export const UserSchema: mongoose.Schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

}, { timestamps: true });

const User = mongoose.model<IUser>('User', UserSchema);
export default User;