import mongoose, {Schema} from 'mongoose';
import {IWorkout} from './interfaces';

const WorkoutSchema: Schema = new Schema ({
  title: String,
  description: String,
  exerciseObj: Array,
  imageSlug: String,
  startDate: Date,
  finishDate: Date,
  trainerNotes: String
});

export default mongoose.model<IWorkout>("Workout", WorkoutSchema);