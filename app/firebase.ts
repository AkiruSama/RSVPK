import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyDwxJTYSzMzyVhkbp2XyiB9FvyMpD3CzmM",
  // authDomain: "kehadiran-rsvp-2401.firebaseapp.com",
  // projectId: "wedding-public",
  // storageBucket: "kehadiran-rsvp-2401",
  // messagingSenderId: "1089501681156",
  // appId: "1:1089501681156:web:5f672b33c24803f8ed0751",
  apiKey: "AIzaSyDwxJTYSzMzyVhkbp2XyiB9FvyMpD3CzmM",
  authDomain: "kehadiran-rsvp-2401.firebaseapp.com",
  projectId: "kehadiran-rsvp-2401",
  storageBucket: "kehadiran-rsvp-2401.firebasestorage.app",
  messagingSenderId: "712107323943",
  appId: "1:712107323943:web:b86fe7a0554dc3b607d402",
  measurementId: "G-6H7EEF9F08"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendReservation(
  name: string,
  wish: string,
  presence: string,
  numOfPeople: string | null,
  waktuKehadiran: string | null
) {
  try {
    await addDoc(collection(db, "reservation"), {
      name: name,
      wish: wish,
      presence: presence,
      time: serverTimestamp(),
      numOfPeople: numOfPeople,
      waktuKehadiran: waktuKehadiran,
    });
  } catch (e) {
    alert(e);
  }
}

export { db, sendReservation };
