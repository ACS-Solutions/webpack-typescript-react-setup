import * as React from 'react';
import { Router, Route, Link } from 'react-router'
import { Props as BaseProps, BaseModule} from './BaseModule';

interface Props extends BaseProps {
	name: string;
}

export default class Users extends BaseModule<Props, any> {
	render() {
		var styles:any = this.getStyles('modules/Users.css');

		return (
			<div className={styles.copy}>
				<ul>
					<li><Link to="/users/1">User 1</Link></li>
					<li><Link to="/users/2">User 2</Link></li>
					<li><Link to="/users/3">User 3</Link></li>
				</ul>
				<div className={styles.userInfo}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
