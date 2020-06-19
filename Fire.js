import firebase from 'firebase'


class Fire {
 constructor(){

    this.init()
    this.checkAuth()
 }
 
 init = () => {
     if(!firebase.apps.length){
         firebase.initializeApp({            
            apiKey: "AIzaSyDBMj9I5JNz89sfYT2iRftoxLm-iJ31lx0",
            authDomain: "reactchatappbase.firebaseapp.com",
            databaseURL: "https://reactchatappbase.firebaseio.com",
            projectId: "reactchatappbase",
            storageBucket: "reactchatappbase.appspot.com",
            messagingSenderId: "468310040473",
            appId: "1:468310040473:web:b782d7498cfb6b067b7d08",
            measurementId: "G-BF34LEX3F7"
         });
     }
 };
 
 checkAuth = () => {
     firebase.auth().onAuthStateChanged(user =>{
        if (!user){
            firebase.auth().signInAnonymously();
        }

     });
 };

 send = messages => {
     messages.forEach( item => {
          const message = {
               text: item.text,
               timestamp: firebase.database.ServerValue.TIMESTAMP,
               user: item.user
          }
          this.db.push(message)
     });
 };

 parse = message => {
   const {user, text, timestamp} = message.val()
   const {key: _id} = message
   const createdAt = new Date(timestamp)

   return{
       _id,
       createdAt,
       text,
       user
   };
 };

 get = callback => {
   this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
 };

off(){
this.db.off()
}

 get db() {
     return firebase.database().ref("messages");
 }

 get uid() {
     return (firebase.auth().currentUser || {}).uid
 }
}

export default new Fire();