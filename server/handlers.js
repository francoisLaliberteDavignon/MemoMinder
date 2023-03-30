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

const postNewEntry = async (req, res) => {

	const entry = {
    _id: uuidv4(),
  ...req.body	
	}

  try {
    const client = new MongoClient(MONGO_URI, options)
    await client.connect()
    const db = client.db('MemoMinder')
  
    const insertEntry = await db.collection('entries').insertOne(entry)	
		insertEntry ?
			res.status(200).json({status:200, message: "entry added", data: entry}) :
			res.status(400).json({status:400, message: "'Was an error with the entry", data: entry})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}

/***********************************************************************/

const getBrainDump = async (req, res) => {

  try {
    const client = new MongoClient(MONGO_URI, options)
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
		dateOfEntry: new Date().toISOString(),
  ...req.body	
	}

  try {
    const client = new MongoClient(MONGO_URI, options)
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

const getJournalEntries = async (req, res) => {

  try {
    const client = new MongoClient(MONGO_URI, options)
    await client.connect()
    const db = client.db('MemoMinder')
  
    const Journal = await db.collection('journalEntries').find().toArray()	
		Journal ?
			res.status(200).json({status:200, message: "Here are all the journal entries", data: Journal}) :
			res.status(400).json({status:400, message: "Could'nt find the journl", data: Journal})
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
		dateOfEntry: new Date().toISOString(),
  ...req.body	
	}

	console.log(journalEntry)

  try {
    const client = new MongoClient(MONGO_URI, options)
    await client.connect()
    const db = client.db('MemoMinder')
  
    const newJournalEntry = await db.collection('journalEntries').insertOne(journalEntry)	
		newJournalEntry ?
			res.status(200).json({status:200, message: "journal entry added to the braindump", data: journalEntry}) :
			res.status(400).json({status:400, message: "'Was an error with the brainer", data: journalEntry})
		client.close()
  } catch (error) {
		res.status(500).json({status:500, message: "something went wrong!"})
		client.close()
	}
}
module.exports = { 
	postNewUser, 
	postNewEntry, 
	postNewBrainer, 
	getBrainDump, 
	getJournalEntries, 
	postNewJournalEntry 
}