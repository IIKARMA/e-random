import React, { useEffect } from "react";
import "./App.css";
import LaunchScreen from "./features/launch/screens";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import RadioButton from "src/components/RadioButton";
import i18n from "src/i18n/index";
import { I18nextProvider } from "react-i18next";
import RandomGeneratorNumber from "src/features/randomGenerator/numberRandom/NumberRandomGenerator";
import Header from "src/components/Header";
import Screen from "src/components/Screen";
function App() {
	useEffect(() => {
		i18n.init();
	}, []);

	return (
		<I18nextProvider i18n={i18n} defaultNS={"translation"}>
			<ChakraProvider toastOptions={{ defaultOptions: { position: "bottom" } }}>
				<Header />
				<Screen>
					<Routes>
						<Route path='/' element={<LaunchScreen />} />
						<Route path='app' element={<RadioButton />} />
						<Route path='number' element={<RandomGeneratorNumber />} />
					</Routes>
				</Screen>
			</ChakraProvider>
		</I18nextProvider>
	);
}

export default App;
