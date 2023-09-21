import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AddCoffees from "../pages/AddCoffees/AddCoffees";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'add-coffees',
                element: <AddCoffees />
            }
        ]
    }
])

export default router;