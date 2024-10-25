import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { AudioProvider } from "./audio/AudioProvider.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AudioProvider>
            <App />
        </AudioProvider>
    </StrictMode>
)
