import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  stripeId: string;
  typeOfUser: string;
  ccLast4: string;
}

export const UserSchema: mongoose.Schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  stripeId: { type: String },
  typeOfUser: { type: String, default: 'free-trial' },
  ccLast4: { type: String }

}, { timestamps: true });

const User = mongoose.model<IUser>('User', UserSchema);
export default User;