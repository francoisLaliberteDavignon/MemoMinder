const user = 
  {
    "sub": "auth0|64244c0868011b5232bd9c09",
    "nickname": "memo_user",
    "name": "memo_user@gmail.com",
    "picture": "https://s.gravatar.com/avatar/418ecf8a1047ed0480e7dcb206a25342?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fme.png",
    "updated_at": "2023-03-29T14:32:51.557Z",
  }

// possibles types : "journalEntry", "brainDump"


const entries = [
  {
    _id: "id",
    dateOfEntry: "date",
    user: currentUser.email, 
    type: "journalEntry",
    timestamp: "sometime yesterday",
    input: "today I found a pickle on my doorstep"
  },
  {
    _id: "id",
    dateOfEntry: "date",
    user: user2,    
    type: "brainDump",
    timestamp: "sometime two days ago",
    input: "remember to go and get pickles"
  }
]

// formatted for react-big-calendar ? or full-calendar

const reminders = [
  {
    _id: "id",
    user: user,
    data: {
      title: "newTitle",
      allDay: true,
      start: new Date(2023, 03, 28),
      end: new Date(2023, 03, 28)
    }    
  },
  {
    _id: "id",
    user: user,
    data: {
      title: "newTitle",
      allDay: false,
      start: new Date(2023, 05, 31),
      end: new Date(2023, 22, 31)
    }    
  }
]

// simple data for tracker
const habits = [
  {  
    _id: "id",
    dateOfEntry: "date",
    user: user, /*userId*/
    data:  {
      mood: 8,
      sleep: 7,
      stress: 2,
      alc : 5,
      yoga: true,
    }
  },
  {  
    _id: "id",
    dateOfEntry: "date",
    user: user,
    data:  {
      mood: 8,
      sleep: 7,
      stress: 2,
      alc : 5,
      yoga: true
    }
  }
]

// Brain dump
const brainers = [
  {  
    _id: "id",
    dateOfEntry: "date",
    data:  {
      user: user,
      isAssigned: true,
      dateAssigned: "timeStamp",
      type : "reminder",
      task: "change water"
      //flag ? some kind of icon to note the state of the brainDump entry
    }
  },
  {  
    _id: "id",
    dateOfEntry: "date",
    data:  {
      user: user,
      isAssigned: false,
      dateAssigned: "null",
      type : "reminder"
    }
  }
]

// Affirmations, to be shown randomly
const affirmations = [
  { _id: "id",
    dateOfEntry: "date",
    user: user,
    message : "I cast more shadow than any of the pickle jars i've seen yet"
  },
  {
    dateOfEntry: "date",
    user: user,
    message : "At least I am not a vampire"
  }
]
