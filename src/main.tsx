import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

const client = new ApolloClient({
    uri: import.meta.env.VITE_HYGRAPH_ENDPOINT,
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>
)
