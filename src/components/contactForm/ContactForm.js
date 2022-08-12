import React from "react";

export const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<label>
				name
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</label>

			<label>
				phone
				<input
					type="tel"
					name="phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
				/>
			</label>

			<label>
				email
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>

			<input type="submit" />
		</form>
	);
};
