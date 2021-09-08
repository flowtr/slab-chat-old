import { Router, Route } from "wouter";

export const App = () => {
    return (
        <Router>
            <p>Hello Vite + Preact!</p>
            <Route path="/">
                <p>
                    <a
                        class="link"
                        href="https://preactjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Preact
                    </a>
                </p>
            </Route>
        </Router>
    );
};
