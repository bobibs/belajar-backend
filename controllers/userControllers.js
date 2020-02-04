// Import Database
const db = require('../connections/index');

module.exports = {
	// 1. CREATE DATA STORE
	userCreateStore: (req, res) => {
		console.log(req.body);
		// Get Data From FrontEnd
		let { storeName } = req.body;

		// Set Data For Database
		let data = {
			storeName // storeName (Nama Kolom) : req.body.storeName (Value)
		};

		// Syntax SQL
		let sql = `INSERT INTO store SET ?`;

		// Database Action
		db.query(sql, data, (err, result) => {
			if (err) res.status(500).send(err);
			res.status(200).send(result);
		});
	},

	// 2. GET DATA STORE
	userGetStore: (req, res) => {
		// Syntax SQL
		let sql = `SELECT * FROM store`;

		// Database Action
		db.query(sql, (err, result) => {
			if (err) res.status(500).send(err);
			res.status(200).send(result);
		});
	},

	// 3. UPDATE DATA STORE
	userUpdateStore: (req, res) => {
		// Get Data From Frontend
		let { storeId, storeName } = req.body;

		// Set Data For Database
		let data = {
			storeName // storeName (Nama Kolom) : req.body.storeName (Value Kolom)
		};

		// Syntax SQL
		let sql = `UPDATE store SET ? WHERE storeId = ?`;

		// Database Action
		db.query(sql, [data, storeId], (err, result) => {
			if (err) res.status(500).send(err);
			res.status(200).send(result);
		});
	},

	// 4. DELETE DATA STORE & PRODUCT (Constraint Method)
	userDeleteData: (req, res) => {
		// Get Id Store From Frontend
		const storeId = req.params.id;

		// Set Data For Database
		let data = {
			storeId // storeId (Nama Kolom) : req.body.storeId (Value Kolom)
		};

		// Syntax SQL
		let sql = `DELETE FROM store WHERE storeId = ?`;

		// Database Action
		db.query(sql, [data], (err, result) => {
			if (err) res.status(500).send(err);
			res.status(200).send(result);
		});
	},

	// 5. INSERT DATA TO PRODUCT
	userAddProduct: (req, res) => {
		// Get Data From Frontend
		const { storeId, productName, productPrice } = req.body;

		// Set Data To Database
		let data = {
			storeId, // storeId (Nama Kolom) : req.body.storeId (Value Kolom)
			productName, // productName (Nama Kolom) : req.body.productName (Value Kolom)
			productPrice // productPrice (Nama Kolom) : req.body.productPrice (Value Kolom)
		};

		// Syntax SQL
		let sql = 'INSERT INTO product SET ?';

		// Database Action
		db.query(sql, [data], (err, result) => {
			if (err) res.status(500).send(err);
			res.status(200).send(result);
		});
	}
};
