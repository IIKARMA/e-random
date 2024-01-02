import { FC } from "react";
import Header from "src/components/Header";
import { Outlet } from "react-router-dom";
import Screen from "src/components/Screen";
const Loyaot: FC = () => {
	return (
		<Screen>
			<>
				<Header />
				<Outlet />
			</>
		</Screen>
	);
};
export default Loyaot;
