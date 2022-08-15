import React from "react";
import { ContactPicker } from "./../contactPicker/ContactPicker";

export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	const getTodayString = () => {
		const [month, day, year] = new Date()
			.toLocaleDateString("en-US")
			.split("/");
		return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
	};

	function handleContactChange(e) {
		if (e.target.value === "Choose a contact") {
			setContact("");
		}
		setContact(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<ContactPicker
				contact={contact}
				contacts={contacts}
				onChange={handleContactChange}
			/>
			<input
				type="text"
				name="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				min={getTodayString()}
				type="date"
				name="date"
				value={date}
				onChange={(e) => setDate(e.target.value)}
			/>
			<input
				type="time"
				name="time"
				value={time}
				onChange={(e) => setTime(e.target.value)}
			/>
			<input type="submit" />
		</form>
	);
};
