import { ReactNode, useState } from "react";
import { AppSettingsContext } from "./appSettingsProvider.context";

type AppSettingsProviderProps = {
	children: ReactNode;
}

export const AppSettingsProvider = ({ children }: AppSettingsProviderProps) => {
	const [showControls, setShowControls] = useState(true);

	return (
		<AppSettingsContext.Provider value={{ showControls, setShowControls }}>
			{children}
		</AppSettingsContext.Provider>
	)
}

