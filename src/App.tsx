import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
	const [alertVisible, setAlertVisible] = useState(false);

	return (
		<div>
			{alertVisible && (
				<Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
			)}
			<Button onClick={() => setAlertVisible(true)}>button</Button>
		</div>
	);
}

export default App;
