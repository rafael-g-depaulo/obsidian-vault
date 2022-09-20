
### React Router implementation

[Original article](https://medium.com/geekculture/under-the-hood-react-router-466365fee324). Quick implementation

#### Implementation
```typescript
import { useEffect, useState } from 'react';

const Router = ({ routes, defaultComponent }) => {
	const [currentPath, setCurrentPath] = useState(
		() => window.location.pathname,
	);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', onLocationChange);
		return () => {
			window.removeEventListener(
				'popstate',
				onLocationChange,
			);
		};
	}, []);

	return (
		routes.find((route) => route.path === currentPath)
			?.component ?? defaultComponent
	);
};

export const navigate = (href) => {
	window.history.pushState(null, '', href);
	const navEvent = new PopStateEvent('popstate');
	window.dispatchEvent(navEvent);
};

export default Router;
```
