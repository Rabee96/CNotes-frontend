# CNotes-frontend

# Project Name: Notes App

This project is a **Notes App** built with **Next.js**, **React**, **Zustand**, and **Yup** for form validation. The app allows users to create, delete, and view notes with simple CRUD operations. It uses Zustand for state management and Yup for validating the note's schema.

---

## 📦 **Features**

- **Create Notes**: Users can add new notes with a title and content.
- **Delete Notes**: Users can delete a note from the list.
- **Status Management**: Notes can have statuses (e.g., *in progress*, *completed*).
- **Real-time Updates**: The app automatically updates the UI after adding or deleting notes.
- **Form Validation**: Note data is validated using Yup.

---

## 🛠 **Technologies Used**

- **Next.js**: A React framework for building fast, server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Zustand**: A small, fast, and scalable state-management library for React.
- **Yup**: A JavaScript schema builder for validation.

---

## 🚀 **Getting Started**

### **Prerequisites**

Make sure you have **Node.js** and **npm** installed on your machine.

- Install [Node.js](https://nodejs.org/)
- Install [npm](https://www.npmjs.com/get-npm) (if not bundled with Node.js)

### **Clone the Repository**

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/notes-app.git
cd notes-app
```

### **Install Dependencies**

Run the following command to install the necessary dependencies:

```bash
npm install
```

### **Run the Development Server**

Start the development server by running:

```bash
npm run dev
```

This will start the app on [http://localhost:3000](http://localhost:3000).

---

## 🔧 **How to Use**

1. **Create a Note**:  
   Click the *+* button to open the note creation form. Fill in the title and content and click *Save* to create a new note.

2. **Delete a Note**:  
   Click the *Delete* button on any note to remove it from the list.

3. **Change Status**:  
   Toggle the status of a note between *in progress* and *completed*.

---

## 📑 **File Structure**

Here’s a breakdown of the key files and folders in the project:

```
├── components/
│   ├── FloatingActionButton.tsx      # Floating button to open the note form
│   └── NoteCard.tsx                 # Component to display individual notes
├── lib/
│   ├── api.ts                       # API requests and endpoints
│   └── types.ts                     # TypeScript types, including INote
├── store/
│   └── useNoteStore.ts              # Zustand store to manage notes state
├── pages/
│   └── index.tsx                    # The main Notes list page
├── schema/
│   └── noteSchema.ts                # Yup schema to validate note data
└── styles/
    └── globals.css                  # Global styles
```

---

## ⚙️ **Environment Variables**

If you are using any external APIs or services, you may need to configure environment variables. Create a `.env.local` file in the root directory and add your variables:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

---

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 **Contact**

If you have any questions or suggestions, feel free to open an issue or contact me directly.

---

Feel free to modify the above content to fit your project specifics! Let me know if you need more help with the README. 😊
