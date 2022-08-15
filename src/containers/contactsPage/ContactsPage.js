import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "./../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
	/*
  Define state variables for 
  contact info and duplicate check
  */
	const [name, setName] = useState("");
	const [duplicateName, setDuplicateName] = useState(false);
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		/*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
		if (duplicateName) return;
		const { name, phone, email } = e.target;
		addContact({ name: name.value, phone: phone.value, email: email.value });
		setName("");
		setPhone("");
		setEmail("");
	};

	/*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
	useEffect(() => {
		const nameIsDuplicate = contacts
			.map((contact) => contact.name)
			.includes(name);
		if (nameIsDuplicate) {
			return setDuplicateName(true);
		}
		setDuplicateName(false);
	});

	return (
		<div>
			<section>
				<h2>Add Contact</h2>

				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList itemsArray={contacts} />
			</section>
		</div>
	);
};
