import React, { useEffect, useState } from 'react';

function Question() {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
    const data = await response.json();
    return setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Question 1</h2>
      <p>{console.log(user)}</p>
    </div>
  );
}

export default Question;
