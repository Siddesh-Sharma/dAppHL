const express = require("express");
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  query,
  collection,
  where,
  getDocs,
  getDocsFromServer,
} = require("firebase/firestore");
const { default: axios } = require("axios");
const firebaseConfig = {
  apiKey: "AIzaSyCuHCN25WRQ7THUy2paezcYmx0reLd_SbM",
  authDomain: "dauthclient.firebaseapp.com",
  projectId: "dauthclient",
  storageBucket: "dauthclient.appspot.com",
  messagingSenderId: "588055944940",
  appId: "1:588055944940:web:3f8f6db83afd881eff0fc9",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const app = express();
app.get("/storedState", async (req, res) => {
  try {
    const docs = await getDocs(collection(db, "users"));
    const snapshotArray = [];
    docs.docs.map((eachItem) => {
        snapshotArray.push(eachItem.data())
    })

    res.send(snapshotArray);
  } catch (error) {
    console.error(error);
  }
});

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log("listening on ", Port);
});
