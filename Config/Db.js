import mongoose from 'mongoose';

const Db = async () => {
	await mongoose
		.connect("mongodb+srv://Alan:asdfghjkl238@cluster0.asu1c.mongodb.net/webQuark?retryWrites=true&w=majority", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.then(() => {
			console.log(`DB Connected`);
		})
		.catch((err) => {
			console.log(err.message);
		});
};
export default Db;
