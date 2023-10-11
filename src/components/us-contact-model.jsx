import React, { useEffect, useState } from "react";

export default function UsCountryModel() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://contact.mediusware.com/api/country-contacts/United States/"
        );
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Us Contact List</h1>
      <ul>
        {(contacts?.results || []).map((contact) => (
          <li key={contact.id}>
            {contact.country.name} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
