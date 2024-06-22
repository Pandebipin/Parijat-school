import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
function Form() {
  return (
    <div className="py-12 mt-12">
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/111613791627277985060/form/1FAIpQLSeW2XRZ665sBSevEI-dfbbsumboIXkj9HHfzjdZZKqnfZL6pw/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
}

export default Form;
