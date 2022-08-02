import React from 'react';

import LoadingPlaceholder from './LoadingPlaceholder';

function WithLoadingWrapper(Component) {
	return function ComponentWithLoadingWrapper({ isLoading, ...props }) {
		if (isLoading) {
			return <LoadingPlaceholder />;
		} else {
			return <Component {...props} />;
		}
	};
}

export default WithLoadingWrapper;
