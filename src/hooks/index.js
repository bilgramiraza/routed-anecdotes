import { useState } from "react";

export const useField = (name, type) => {
	const [value, setValue] = useState('');

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onReset = () => {
		setValue('');
	};

	return {
		name,
		type,
		value,
		onChange,
		onReset,
	};
};
