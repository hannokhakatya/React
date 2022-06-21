import Button from '../../common/Button/Button';
import Logo from './copmonents/Logo/Logo';
import s from './Header.module.css';

function Header() {
	return (
		<div className={s.header}>
			<Logo />
			<div className={s.logout}>
				<div className={s.name}>Katya</div>
				<Button buttonText='Logout' />
			</div>
		</div>
	);
}

export default Header;
