import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import FirebaseService from "./services/firebase/service.ts";
import {
    EmailLinkAuthScreen,
    FirebaseUIProvider,
} from "@firebase-oss/ui-react";

const firebaseService = FirebaseService;

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" />
                </Routes>
                <FirebaseUIProvider ui={firebaseService.getUI()}>
                    <h1>Hello world</h1>

                    <EmailLinkAuthScreen
                        onSignIn={(credential) => {
                            console.log("Signed in:", credential.email);
                        }}
                    ></EmailLinkAuthScreen>
                </FirebaseUIProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
