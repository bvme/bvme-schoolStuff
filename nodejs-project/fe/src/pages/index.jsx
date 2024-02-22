import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState("");
  const [form, setForm] = useState([]);

  const createData = async () => {
    const response = await fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => response.json());
    setData(response);
  };
  const addData = () => {
    createData();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex pt-[100px] gap-3">
        <input
          className=" border-[1px] border-black rounded h-[30px] w-[500px] "
          type="text"
          placeholder="username"
          onChange={(event) => setForm({ name: event.target.value })}
        />
        {/* <input
          className="border-[1px] border-black rounded w-[500px]"
          type="number"
          placeholder="age"
          onChange={(event) => setForm(event.target.value)}
        /> */}
      </div>
      <button onClick={addData} className="border-[1px] border-black rounded">
        <div className="p-[5px]">SUBMIT</div>
      </button>
      <ul>
        {data.map((element) => (
          <li>{element.name}</li>
        ))}
      </ul>
    </div>
  );
}
                                       