import { useEffect, useRef, useState } from "react";

const useCharacterCountLimit = (isReplying?: boolean) => {
	const characterCountBaseValue = 250;
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [characterCount, setCharacterCount] = useState(characterCountBaseValue);

	useEffect(() => {
		setCharacterCount(characterCountBaseValue);
	}, [isReplying]);

	const textAreaInputHandler = () => {
		if (characterCount > textAreaRef.current!.value.length) {
			setCharacterCount(
				characterCountBaseValue - textAreaRef.current!.value.length
			);
		} else if (textAreaRef.current!.value.length <= 0) {
			setCharacterCount(characterCountBaseValue);
		} else {
			setCharacterCount((prevState) => prevState - 1);
		}
	};
	return {
		textAreaRef,
		textAreaInputHandler,
		characterCount,
		characterCountBaseValue,
		setCharacterCount,
	};
};

export default useCharacterCountLimit;
