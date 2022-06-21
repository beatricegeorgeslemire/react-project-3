import './App.css';
import firebase from './firebase';
import Header from './Header';
import Form from './Form';
import CommentSection from './CommentSection';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database'

function App() {

  const [message, setMessage] = useState([]);

  //ON PAGELOAD (initial render/ component mount)
  useEffect(() => {
    // console.log('intialized this dope app');
    //create a variable that holds our database details (getDatabase)
    const database = getDatabase(firebase);
    //create a variable that makes a reference to our database (ref)
    const dbRef = ref(database);

    //we need to add our onValue event listener, so that it will run some code whenever our database value changes
    onValue(dbRef, (response) => {
      //get our database values
      //.val() is a firebase module that gets us the information we want from the response
      const data = response.val();
      //our data is an object, so we need to iterate through it suing a for in loop to access each book name and turn it into an array
      const newState = [];

      for (let key in data) {
        //inside our loop, we push each book name to our newState array which we have already created
        newState.push(
          {
            key: key,
            name: data[key]
          }
        );
      }
      //update state to match our database values
      setMessage(newState);
    });
  }, []);

  return (
    <body className='body'>
      <Header />
      <CommentSection messageProps={message} />
      <Form />
      <Footer />
    </body>
  );
}


export default App;
