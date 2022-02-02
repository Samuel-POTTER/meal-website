import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./Home";
import { QueryClient, QueryClientProvider } from 'react-query'
import CategoriesContextProvider from './context/CategoriesContext';

function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <CategoriesContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </CategoriesContextProvider>
        </QueryClientProvider>
    )
}

export default App;
