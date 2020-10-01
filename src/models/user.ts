import {Document, Schema, Model, model} from 'mongoose';
import {IUser} from './interfaces';

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

const UserSchema: Schema = new Schema ({
  firstName: String,
  lastName: String,
  email: String,
  mobilePhone: String,
  authorisationRefs: Array,
});

UserSchema.methods.fullName = function(): string {
 return (this.firstName.trim() + "" + this.lastName.trim());
};

export const UserModel: Model<IUserModel> = model<IUserModel>("User", UserSchema);