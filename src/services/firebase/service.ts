import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth, type Auth } from "firebase/auth";
import { initializeUI, type FirebaseUIStore } from "@firebase-oss/ui-core";

class FirebaseService {
    protected config = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
    protected app = initializeApp(this.config);
    protected auth = getAuth(this.app);
    protected ui = initializeUI({
        app: this.app,
    });

    constructor() {
        if (import.meta.env.VITE_ENV === "local") {
            connectAuthEmulator(this.auth, "http://localhost:9099");
        }
    }

    getUI(): FirebaseUIStore {
        return this.ui;
    }

    getAuth(): Auth {
        return this.auth;
    }
}

export default new FirebaseService();
