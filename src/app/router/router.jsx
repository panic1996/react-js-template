import { PATHS } from "@/shared/constants";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home/home.page";
import { Layout } from "@/shared/ui";

const router = createBrowserRouter([
	{
		path: PATHS.index,
		element: <Layout />,
		children: [{ index: true, element: <HomePage /> }],
	},
]);

const Provider = () => {
	return <RouterProvider router={router} />;
};

export { Provider as RouterProvider };
