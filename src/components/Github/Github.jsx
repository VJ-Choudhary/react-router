import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const data = useLoaderData()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/VJ-Choudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div
      className="text-center m-4 bg-gray-500 text-white p-4 text-3xl"
      style={{ marginTop: 90, fontFamily: "-moz-initial" }}
    >
      <h2
        style={{
          fontWeight: "bold",
          color: "wheat",
          marginLeft: 15,
          display: "flex",
          justifyContent: "center",
          boxShadow:'2px 2px 12px 2px lightgrey',
          marginBottom: 10,
          padding:5
        }}
      >
        {" "}
        {data.name}{" "}
      </h2>
      <div style={{ display: "flex" }}>
        {" "}
        <img
          src={data.avatar_url}
          alt="Git picture"
          style={{
            width: 250,
            borderRadius: "100%",
            border: "2px solid green",
            boxShadow:"3px 3px 10px 3px white"

          }}
        />
        <div style={{ padding: 10, marginLeft: 45, fontWeight: "bold" ,width:'100%',textAlign:'left',fontSize:16,lineHeight:2.5,boxShadow:"3px 3px 13px 5px white",color:'wheat', }}>
         <h1>Username:{data.login}</h1>
          <div>Followers :- {data.followers} {", "}  Following :-{data.following}</div>
          <h6>Location: {data.location}</h6>
          <h6 >Bio: {data.bio}</h6>
        </div>
      </div>
    </div>
  );
}

export default Github;

// export const GithubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/VJ-Choudhary')
//     return response.json()
// }
