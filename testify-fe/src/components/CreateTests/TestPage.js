import React from "react";
import McForm from "./McForm";
import FibForm from "./FibForm";

export default function TestPage() {
  return (
    <div className="testpage">
      <FibForm />
      <McForm />
    </div>
  );
}

//create button from TestList will take you to this page/compoenet

//where a form of input for test title will be created

//i want to load questions from forms here undert the created test name

//this is where the test questions will load (does this need to be in a seperate component??)

//and the question forms will also be imported on this page so see all the actions here

//the finish button will post the test  and questions to the BE??
