/**
 *
 */
import { createRoot } from 'react-dom/client';
import App from './views/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeConfig } from './theme/theme';

const container = document.getElementById('root');

createRoot(container).render(
	<ThemeConfig>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeConfig>,
);
