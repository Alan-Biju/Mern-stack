import mongoose from 'mongoose';

const Db = async () => {
	await mongoose
		.connect(process.env.DB_HOST, {
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
