import React from "react";

function AnotherCard({ username = "Lemons", album = "Not decided yet" }) {
  // react pass in an args called props, we can console log it (props stands for properties)
  // when you call the component in App.jsx, you can access the value of that key like a key-value pair, like props.username here! then put {} to indicate that it is javascript.
  // instead of using {props.username}, {props.job} etc. you can just destructure the object directly in the args, like AnotherCard( {username, job} )

  // to specify a default value, just write {username || "value you want"} in case props.username is not provided. => but this is not scalable (have to scroll through many code to find the conditional)
  // you can just indicate it directly in the input, like {username = "Lemons"}
  // console.log(props);
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://picsum.photos/200"
        />
      </div>

      <div className="flex flex-col items-center md:items-start gap-1">
        <span className="text-2xl font-medium">{username}</span>
        <span className="font-medium text-sky-500">{album}</span>

        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

export default AnotherCard;
