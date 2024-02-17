// REACT
import { useState, useEffect } from "react";
// LIBRARIES
import { useTimeout } from "usehooks-ts";

const useReplyFormAnimation = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isOpacityApplied, setIsOpacityApplied] = useState(false);

	useEffect(() => {
		setIsFormOpen(true);
	}, []);

	useTimeout(() => {
		setIsOpacityApplied(true);
	}, 100);

	return { isFormOpen, isOpacityApplied };
};

export default useReplyFormAnimation;
