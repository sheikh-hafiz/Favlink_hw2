import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

const LinkContainer = () => {
  const [favLinks, setFavLinks] = useState([]);

  const removeLink = (index) => {
    const newFavLinks = [...favLinks];
    newFavLinks.splice(index, 1);
    setFavLinks(newFavLinks);
  };

  const handleSubmit = (favLink) => {
    setFavLinks([...favLinks, favLink]);
  };

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table linkData={favLinks} removeLink={removeLink} />
      <br />
      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default LinkContainer;
