function PersonCard({ person, index, selectedPerson, setSelectedPerson }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "4px",
        padding: "8px",
        margin: "8px",
        backgroundColor:
          selectedPerson === person.id
            ? "lightblue"
            : index % 2 === 0
            ? "lightgray"
            : "white",
      }}
    >
      {person.name} {person.age}
      <button
        onClick={() => {
          setSelectedPerson(person.id);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default PersonCard;
