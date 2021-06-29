import { useContext, useEffect, useMemo, useState } from "react";
import { Gain } from "tone";
import { useNoise } from "./noise.hooks";
import { ControlsSection } from "../../../UI/controlsSection";
import { Knob } from "../../../UI/knob";
import { NormalRange } from "tone/build/esm/core/type/Units";
import { RegisteredComponent } from "../../synthesizer.types";
import { useRegister } from "../../synthesizer.hooks";
import { TransportProvider } from "../../../../providers";

export const Noise = ({ register }: RegisteredComponent<Gain>) => {
	const noise = useNoise();
	useRegister(register, noise);
	const { setConfig } = useContext(TransportProvider.Context);

	const [gain, setGain] = useState<NormalRange>(0);

	useEffect(() => {
		noise?.set({
			gain
		})

		setConfig(state => ({
			...state,
			noise: gain
		}))

		// should run on config values change
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gain])
	return useMemo(() => (
		<ControlsSection title="Noise">
			<Knob label="Gain" onChange={setGain} value={gain} />
		</ControlsSection>
	), [gain])
}