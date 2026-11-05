import { useEffect, useRef } from "react";

const UseRefHook = () => {

  console.log("First Render");

  // Create ref to access input DOM element
  const inputRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Focus the input field
    inputRef.current.focus();

    // Get input value
    console.log(inputRef.current.value);
  };

  // Focus input after initial render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your name"
        style={{
          padding: "10px",
          border: "1px solid gray",
          borderRadius: "6px",
          outline: "none",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default UseRefHook;