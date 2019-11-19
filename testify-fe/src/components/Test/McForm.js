import React from "react";

export default function McForm() {
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          onChange={onInputCh}
          id="question"
          type="textarea"
          name="name"
          value={formData.name}
        />

        <button type="submit">Add Question</button>
      </form>
    </div>
  );
}
