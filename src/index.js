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
import { GoogleOAuthProvider } from '@react-oauth/google';

const container = document.getElementById('root');

createRoot(container).render(
	<ThemeConfig>
		<Provider store={store} >
			<GoogleOAuthProvider clientId='794506793903-8u2flm2aplgibs0dq6ai8ccip143qhcn.apps.googleusercontent.com'>
				<Root container>
					<RouterProvider router={router} />
				</Root>
			</GoogleOAuthProvider>
		</Provider>
	</ThemeConfig>,
);
