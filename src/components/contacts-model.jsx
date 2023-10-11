import React, { useEffect, useState } from "react";
import CountryDetailsModel from "./country-details-model";

export default function ContactsModel() {
  const [contacts, setContacts] = useState([]);
  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://contact.mediusware.com/api/contacts/"
        );
        const data = await response.json();
        if (isChecked) {
          const evenNumbersList = data?.results.filter(
            (contact) => contact.id % 2 === 0
          );
          setContacts(evenNumbersList);
        } else {
          setContacts(data?.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchContacts();
  }, [isChecked]);

  const HandleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {(contacts || []).map((contact) => (
          <li key={contact.id}>
            <CountryDetailsModel contact={contact} />
          </li>
        ))}
      </ul>

      <div class="form-check">
        <input
          onChange={HandleChecked}
          className="form-check-input"
          type="checkbox"
          id="flexCheckChecked"
          checked={isChecked}
        />
        <label class="form-check-label" for="flexCheckChecked">
          Checked Even
        </label>
      </div>
    </div>
  );
}
