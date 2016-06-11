function Test() {
	return {
		scope: {
			name2: '@'
		}
	}
}

angular
	.module('app')
	.directive('test', Test);
