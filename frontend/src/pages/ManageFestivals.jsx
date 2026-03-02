import { createFestival, deleteFestival } from "../api/festival.api";

export default function ManageFestivals() {
  return (
    <button
      onClick={() => createFestival({ name: "Holi", location: "India" })}
      className="bg-primary px-6 py-2 rounded"
    >
      Add Festival
    </button>
  );
}
