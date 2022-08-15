import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
	/*
  Define state variables for 
  contacts and appointments 
  */
	const [contacts, setContacts] = useState([
		{
			id: 1,
			name: "Engracia Petranek",
			email: "epetranek0@hubpages.com",
			phone: "949-402-2282",
		},
		{
			id: 2,
			name: "Emilie Grzegorczyk",
			email: "egrzegorczyk1@liveinternet.ru",
			phone: "530-714-9443",
		},
		{
			id: 3,
			name: "Drake Stannard",
			email: "dstannard2@google.co.uk",
			phone: "464-347-4756",
		},
	]);
	const [appointments, setAppointments] = useState([
		{
			id: 1,
			title: "Namfix",
			date: "1/24/2022",
			time: "4:57 PM",
		},
		{
			id: 2,
			title: "Asoka",
			date: "8/18/2021",
			time: "8:56 PM",
		},
		{
			id: 3,
			title: "Tin",
			date: "9/5/2021",
			time: "10:11 PM",
		},
		{
			id: 4,
			title: "Lotstring",
			date: "6/3/2022",
			time: "1:51 AM",
		},
	]);

	const ROUTES = {
		CONTACTS: "/contacts",
		APPOINTMENTS: "/appointments",
	};

	/*
  Implement functions to add data to
  contacts and appointments
  */
	function addContact(newContact) {
		setContacts((prev) => [newContact, ...prev]);
	}
	function addAppointments(newAppointment) {
		setAppointments((prev) => [newAppointment, ...prev]);
	}

	return (
		<>
			<nav>
				<NavLink to={ROUTES.CONTACTS} activeClassName="active">
					Contacts
				</NavLink>
				<NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
					Appointments
				</NavLink>
			</nav>
			<main>
				<Switch>
					<Route exact path="/">
						<Redirect to={ROUTES.CONTACTS} />
					</Route>
					<Route path={ROUTES.CONTACTS}>
						{/* Add props to ContactsPage */}
						<ContactsPage contacts={contacts} addContact={addContact} />
					</Route>
					<Route path={ROUTES.APPOINTMENTS}>
						{/* Add props to AppointmentsPage */}
						<AppointmentsPage
							contacts={contacts}
							setContacts={setContacts}
							appointments={appointments}
							addAppointments={addAppointments}
						/>
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;
