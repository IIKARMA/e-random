import "./App.css";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import Header from "src/components/Header";
import { I18nextProvider } from "react-i18next";
import LaunchScreen from "./features/launch/screens";
import ListRandomGenerator from "src/features/randomGenerator/screens/ListRandomGenerator";
import RadioButton from "src/components/RadioButton";
import RandomGeneratorNumber from "src/features/randomGenerator/screens/NumberRandomGenerator";
import Screen from "src/components/Screen";
import i18n from "src/i18n/index";
import { theme } from "src/theme";

function App() {
	useEffect(() => {
		i18n.init();
	}, []);

	return (
		<I18nextProvider i18n={i18n} defaultNS={"translation"}>
			<ChakraProvider
				theme={theme}
				toastOptions={{ defaultOptions: { position: "bottom" } }}>
				<Screen>
					<>
						<Header />
						<Routes>
							<Route path='/' element={<LaunchScreen />} />
							<Route path='app' element={<RadioButton />} />
							<Route path='number' element={<RandomGeneratorNumber />} />
							<Route path='list' element={<ListRandomGenerator />} />
						</Routes>
					</>
				</Screen>
			</ChakraProvider>
		</I18nextProvider>
	);
}

export default App;
