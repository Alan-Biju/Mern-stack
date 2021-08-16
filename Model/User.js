import mongoose from 'mongoose';
const userFile = mongoose.Schema({
	firstname: {
		type: String,
		require: true,
	},
	lastname: {
		type: String,
		require: true,
	},
	gender: {
		type: String,
		require: true,
	},
	age: {
		type: Number,
		require: true,
	},
	nationality: {
		type: String,
		require: true,
	},
});
const user = mongoose.model('User', userFile);

export default user;
