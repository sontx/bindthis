function filterMethods(_this: any, filter?: (value: string, index: number) => boolean): string[] {
	const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(_this));
	const methodFilter = filter || (() => true);
	return keys
		.map(key => {
			const member = _this[key];
			return typeof member === "function" && key;
		})
		.filter(Boolean)
		.filter(methodFilter) as string[];
}

/**
 * Binds "this" to all methods of your class
 * @param _this your "this" object
 * @param filter [optional] you can control which methods should be bound with "this", binds all methods except for "constructor" by default
 */
export default function bindMethods(_this: any, filter?: (value: string, index: number) => boolean): any {
	if (_this) {
		const methods = filterMethods(_this, filter || (method => method !== "constructor"));
		methods.forEach(method => {
			_this[method] = _this[method].bind(_this);
		});
	}
	return _this;
}
