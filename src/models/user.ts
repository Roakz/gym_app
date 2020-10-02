import mongoose, {Schema} from 'mongoose';
import {IUser} from './interfaces';

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

export default mongoose.model<IUser>("User", UserSchema);