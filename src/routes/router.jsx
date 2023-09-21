import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AddCoffees from "../pages/AddCoffees/AddCoffees";
import UpdateCoffees from "../pages/UpdateCoffees/UpdateCoffees";

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
            },
            {
                path: 'update-coffees',
                element: <UpdateCoffees />
            }
        ]
    }
])

export default router;