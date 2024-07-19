/** @format */
"use client";
function FilterErrorPage({ error }) {
  return (
    <div>
      <h2>An error Accured.!</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default FilterErrorPage;
