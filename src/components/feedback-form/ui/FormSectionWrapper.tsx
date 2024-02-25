// REACT
import { ReactNode } from "react";

const FormSectionWrapper = ({ children }: { children: ReactNode }) => {
	return <div className="flex flex-col space-y-2">{children}</div>;
};

export default FormSectionWrapper;
