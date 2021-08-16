import user from '../Model/User.js';

///---------------------------------------------------------------------------------------------
export const register = async (req, res) => {
	const { firstname, lastname, gender, age, country } = req.body;
	/* if (IsUser) {
		 return res.status(400).send('email already exist');
	} */
	try {
		await user
			.create({
				firstname,
				lastname,
				gender,
				age,
				nationality: country,
			})
			.then((response) => {
				res.send('user added').status(201);
			});
	} catch (error) {
		res.status(500).json({
			sucess: false,
			data: 'Server Error Try Again later',
		});
		console.log(error);
	}
};
//-------------------------------------------------------------------------------
export const User = async (req, res) => {
	try {
		const post = await user.find();
		res.json(post);
	} catch (error) {
		res.json({ message: error.message });
	}
};
//----------------------------------------------------------------------------------
export const UserInfo = async (req, res) => {
	const { id } = req.params;

	try {
		const post = await user.find({ _id: id });
		res.json(post);
	} catch (error) {
		console.log(error);
	}
};
