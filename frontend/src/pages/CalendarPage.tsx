import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link, useNavigate } from "react-router-dom";
import "../css/calendarPage.css";
import deleteIcon from "../assets/icons8-delete-24.png";

type Note = {
  date: string;
  text: string;
};

function CalendarPage() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState<Note[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [noteDate, setNoteDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  // Notları veritabanından çek
  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:8000/api/notes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setNotes(
            data.map((note: any) => ({
              date: note.note_date,
              text: note.note_text,
            }))
          );
        } else {
          console.error("Notları alırken hata:", data.error);
        }
      } catch (err) {
        console.error("İstek hatası:", err);
      }
    };

    fetchNotes();
  }, []);

  // Not kaydet
  const handleSave = async () => {
    console.log("Save butonuna tıklandı!");

    if (!noteText.trim()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Giriş yapmanız gerekiyor.");
      return;
    }

    const formattedDate = new Date(noteDate).toISOString().split("T")[0];

    try {
      const response = await fetch("http://localhost:8000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          note_date: formattedDate,
          note_text: noteText,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Not eklendi:", data);
        setNotes((prev) => [...prev, { date: formattedDate, text: noteText }]);
        setNoteText("");
        setNoteDate(new Date().toISOString().split("T")[0]);
        setShowForm(false);
      } else {
        console.error("❌ Not eklenemedi:", data.error);
      }
    } catch (err) {
      console.error("❌ Sunucu hatası:", err);
    }
  };

  const handleDeleteNote = (indexToDelete: number) => {
    setNotes((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="calendar-page py-10 px-5 lg:px-20 flex flex-col lg:flex-row justify-between items-start gap-10">
      <button
        onClick={() => navigate("/profile")}
        className="absolute top-5 left-5 text-purple-600 hover:underline text-2xl"
      >
        ←
      </button>

      <div className="calendar-section">
        <h2 className="calendar-title">Calendar</h2>
        <Calendar
          tileClassName={({ date }) => {
            const formatted = formatDate(date);
            const hasNote = notes.some((note) => note.date === formatted);
            if (isToday(date)) return "today-highlight";
            if (hasNote) return "note-highlight";
            return "";
          }}
        />
      </div>

      <div className="notes-section flex flex-col justify-between h-full">
        <div>
          <h3 className="notes-title">Notes</h3>

          <button
            onClick={() => setShowForm(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-5 hover:bg-purple-700"
          >
            + Add Note
          </button>

          {notes.map((note, index) => (
            <div key={index} className="note relative pr-8">
              <div className="note-date">{note.date}</div>
              <div className="note-text">{note.text}</div>
              <img
                src={deleteIcon}
                alt="Delete"
                className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
                onClick={() => handleDeleteNote(index)}
                title="Delete Note"
              />
            </div>
          ))}
        </div>

        <Link to="/notes" className="see-all mt-6 self-start">
          See all →
        </Link>
      </div>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-3 text-purple-700">New Note</h2>
            <textarea
              className="w-full h-24 border border-gray-300 rounded p-2 mb-3"
              placeholder="Write your note..."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
            <input
              type="date"
              className="w-full border border-gray-300 rounded p-2 mb-3"
              value={noteDate}
              onChange={(e) => setNoteDate(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-1 text-white"
                style={{
                  backgroundColor: "#5B5B5B",
                  borderRadius: "25px",
                }}
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="text-gray-500 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarPage;