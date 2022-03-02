import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./Home";
import { QueryClient, QueryClientProvider } from 'react-query'
import CategoriesContextProvider from './context/CategoriesContext';
import MealContextProvider from './context/MealContext';
import ModalContextProvider from './context/ModalContext';

function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <CategoriesContextProvider>
                <MealContextProvider>
                    <ModalContextProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                            </Routes>
                        </BrowserRouter>
                    </ModalContextProvider>
                </MealContextProvider>
            </CategoriesContextProvider>
        </QueryClientProvider>
    )
}

export default App;
