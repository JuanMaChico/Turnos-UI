import { Root } from './Profile.styles';
import AppBar from 'Components/AppBar/AppBar';

const Profile = () => {
	return (
		<Root item md={12} sm={12} xs={12}>
			<AppBar />
			<h1>Profile</h1>
		</Root>
	);
};

export default Profile;
