/**
 *
 */
import { createRoot } from 'react-dom/client';
import router from "./config/routes/routes";
import { RouterProvider } from 'react-router-dom';
import { ThemeConfig } from './theme/theme';
import store from "./redux/store";
import { Provider } from 'react-redux';
import { Root } from "./index.styles";

const container = document.getElementById('root');

createRoot(container).render(
	<ThemeConfig>
		<Provider store={store} >
				{/* <App /> */}
				<Root container>
				<RouterProvider router={router} />
				</Root>
		</Provider>
	</ThemeConfig>,
);
