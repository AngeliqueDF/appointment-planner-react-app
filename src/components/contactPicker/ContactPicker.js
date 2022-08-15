import React from "react";

export const ContactPicker = ({ contact, contacts, onChange }) => {
	const defaultOption = "Choose a contact";
	return (
		<select value={contact || defaultOption} onChange={onChange}>
			<option value={defaultOption}>{defaultOption}</option>
			{contacts.map((storedContact) => (
				<option key={storedContact.id} value={storedContact.name}>
					{storedContact.name}
				</option>
			))}
		</select>
	);
};
