// Слайс контактів

// У файлі contactsSlice.js оголоси слайс контактів, використовуючи функцію createSlice().

// Екшени слайса для використання в dispatch:

// addContact - додавання нового контакту до властивості items
// deleteContact - видалення контакту за id з властивості items


// Оголоси функції-селектори для використання в useSelector:

// selectContacts - повертає список контактів з властивості items.


// З файла слайса експортуй редюсер, а також його екшени і селектори.
import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  reducers: {
    addContact: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
    }),
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});
export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;