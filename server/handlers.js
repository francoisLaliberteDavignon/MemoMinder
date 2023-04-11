"use strict";

const { MongoClient } = require("mongodb")
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");

/***********************************************************************/

const postNewUser = async (req, res) => {

  const user = {
    _id: uuidv4(),
  ...req.body
  }
	const client = new MongoClient(MONGO_URI, options)
	await client.connect()
	const db = client.db('MemoMinder')

  try {
		let findUser = await db.collection('users').findOne({nickname: req.body.nickname})  

		if (!findUser) {
			const addUser = await db.collection('users').insertOne(user)	
			addUser ?
				res.status(200).json({status:200, message: "user added", data: user}) :
				res.status(400).json({status:400, message: "'Was an error", data: user})
		} else {
			res.status(409).json({status:409, message: "User already exists", data: user})
		}
  } catch (error) {
		res.status(500).json({status:500, data: error.stack, message: "something went wrong!"})
	}
	client.close()
}


/***********************************************************************/

const getBrainDump = async (req, res) => {

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const BrainDump = await db.collection('brainers').find().toArray()	
		BrainDump ?
			res.status(200).json({status:200, message: "Here are all the brainers", data: BrainDump}) :
			res.status(400).json({status:400, message: "Could'nt find the brainDump", data: BrainDump})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}

/***********************************************************************/
const postNewBrainer = async (req, res) => {

	const brainer = {
    _id: uuidv4(),
		dateOfEntry: new Date().toISOString().substring(0, 10),
  ...req.body	
	}

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const insertBrainer = await db.collection('brainers').insertOne(brainer)	
		insertBrainer ?
			res.status(200).json({status:200, message: "brainer added to the braindump", data: brainer}) :
			res.status(400).json({status:400, message: "'Was an error with the brainer", data: brainer})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}
/***********************************************************************/
const scheduleBrainer = async (req, res) => {

	const scheduledBrainer = {
  ...req.body	
	}

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const scheduled = await db.collection('reminders').insertOne(scheduledBrainer)	
		console.log(scheduled)
		if (scheduled) {
			await db.collection('brainers').deleteOne({_id: scheduledBrainer._id})
			res.status(200).json({status:200, message: "brainer added to the braindump", data: scheduledBrainer})
		} else {
			res.status(400).json({status:400, message: "'Was an error with the brainer", data: req.body})
		}
		client.close()
  } catch (error) {
		console.log(error.stack)
		res.status(500).json({status:500, message: "something went wrong!", data: error.stack})
		client.close()
	}
}

/***********************************************************************/

const patchBrainer = async (req, res) => {

	const _id = req.body._id;

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const updateBrainer = await db.collection('brainers').findOne({_id: _id})	
		if (updateBrainer) {

			const query = {_id: _id}
			const update = { $set: { isImportant : !updateBrainer.isImportant}}

			const updated = await db.collection('brainers').updateOne(query, update)
			res.status(200).json({status:200, message: "brainer was changed", updated})
		} else {
			res.status(400).json({status:400, message: "'Was an error with the brainer"})
		}
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}

/***********************************************************************/

const deleteBrainer = async (req, res) => {

	const { _id } = req.params

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const deleteBrainerBy_ID = await db.collection('brainers').deleteOne({_id: _id})	
		deleteBrainerBy_ID.deletedCount === 1 ?
			res.status(200).json({status:200, message: "Brainer deleted"}) :
			res.status(400).json({status:400, message: "T'was an error"})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!", error: error.stack})
		client.close()
	}
}

/***********************************************************************/

const getJournalEntries = async (req, res) => {

	const paramsDate = req.params;

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const journal = await db.collection('journalEntries').find({date: paramsDate.date}).toArray()	
		journal ?
			res.status(200).json({status:200, message: `Here are all the journal entries from ${paramsDate.date}`, data: journal}) :
			res.status(400).json({status:400, message: "Could'nt find the journal", data: journal})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}

/***********************************************************************/

const postNewJournalEntry = async (req, res) => {

	const journalEntry = {
    _id: uuidv4(),
		dateOfEntry: new Date().toISOString().substring(0, 10),
  ...req.body	
	}

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const newJournalEntry = await db.collection('journalEntries').insertOne(journalEntry)	
		newJournalEntry ?
			res.status(200).json({status:200, message: "journal entry added", data: journalEntry}) :
			res.status(400).json({status:400, message: "'Was an error with the brainer", data: journalEntry})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}

/***********************************************************************/

const getAffirmations = async (req, res) => {

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const affirmations = await db.collection('affirmations').find().toArray()	
		affirmations ?
			res.status(200).json({status:200, message: `Here are all the affirmations`, data: affirmations}) :
			res.status(400).json({status:400, message: "Could'nt find the journal", data: affirmations})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}

/***********************************************************************/

const postNewAffirmation = async (req, res) => {

	const affirmation = {
    _id: uuidv4(),
		dateOfEntry: new Date().toISOString().substring(0, 10),
  ...req.body	
	}

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const newAffirmation = await db.collection('affirmations').insertOne(affirmation)	
		newAffirmation ?
			res.status(200).json({status:200, message: "Affirmation added!", data: affirmation}) :
			res.status(400).json({status:400, message: "'Was an error with adding the affirmation", data: newAffirmation})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!", data: error.stack})
		client.close()
	}

}

/***********************************************************************/

const getReminders = async (req, res) => {

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const reminders = await db.collection('reminders').find().toArray()	
		reminders ?
			res.status(200).json({status:200, message: `Here are all the reminders`, data: reminders}) :
			res.status(400).json({status:400, message: "Nothing here...", data: req.query})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}

/***********************************************************************/

const getRemindersByDate = async (req, res) => {

	const { date } = req.params
	
	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const reminders = await db.collection('reminders').find({start: date}).toArray()
		reminders ?
			res.status(200).json({status:200, message: `Here are all the reminders for this date!`, data: reminders}) :
			res.status(400).json({status:400, message: "Nothing here..."})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}

/***********************************************************************/

const postNewReminder = async (req, res) => {

	const newReminder = {
    _id: uuidv4(),
		dateOfEntry: new Date().toISOString().substring(0, 10),
  ...req.body	
	}

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const reminder = await db.collection('reminders').insertOne(newReminder)	
		reminder ?
			res.status(200).json({status:200, message: "New reminder added", data: newReminder}) :
			res.status(400).json({status:400, message: "T'was an error", data: req.body})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!", error: error.stack})
		client.close()
	}
}

/***********************************************************************/

const deleteReminder = async (req, res) => {

	const { _id } = req.params

	const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    const db = client.db('MemoMinder')
  
    const deleteReminder = await db.collection('reminders').deleteOne({_id: _id})	
		deleteReminder.deletedCount === 1 ?
			res.status(200).json({status:200, message: "Reminder deleted"}) :
			res.status(400).json({status:400, message: "T'was an error"})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!", error: error.stack})
		client.close()
	}
}

module.exports = { 
	postNewUser, 
	postNewBrainer,
	scheduleBrainer,
	patchBrainer, 
	deleteBrainer,
	getBrainDump, 
	getJournalEntries, 
	postNewJournalEntry,
	getAffirmations,
  postNewAffirmation,
	getReminders,
	getRemindersByDate,
	postNewReminder,
	deleteReminder,

}