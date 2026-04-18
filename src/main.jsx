import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RecipeProvider from './context/RecipeContext.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
    <RecipeProvider>
        <HelmetProvider>
            <BrowserRouter>
                <App />
                <ToastContainer />
            </BrowserRouter>
        </HelmetProvider>
    </RecipeProvider>
);