import mongoose, {Schema} from 'mongoose';
import {IExercise} from './interfaces';

const ExerciseSchema: Schema = new Schema ({
  name: String,
  description: String,
  muscleRefs: Array,
});

export default mongoose.model<IExercise>("Exercise", ExerciseSchema);