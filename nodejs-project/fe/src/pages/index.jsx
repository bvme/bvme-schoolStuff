import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [data, setData] = useState();
  const [form, setForm] = useState();
  const [age, setAge] = useState();

  // ADD FUNCTION

  const createData = async () => {
    if (form === undefined || age === undefined) {
      window.alert("hooson bn");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ form, age, id: uuidv4() }),
      });
      const res = await response.json();
      setData(res);
    } catch (error) {
      console.error("Error", error);
    }
  };

  // DELETE FUNCTION

  const deleteList = async () => {
    try {
      const res = await fetch("http://localhost:8080/user", {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-type": "application/json",
        },
        body: JSON.stringify({ form, age }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex pt-[100px] gap-3">
        <input
          className=" border-[1px] border-black rounded h-[30px] w-[500px] "
          type="text"
          placeholder="name"
          onChange={(event) => setForm(event.target.value)}
        />
        <input
          className="border-[1px] border-black rounded w-[500px]"
          type="number"
          placeholder="age"
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <button
        onClick={createData}
        className="border-[1px] border-black rounded"
      >
        <div className="p-[5px] font-bold">SUBMIT</div>
      </button>
      <div className="flex flex-col w-[100vh] gap-4">
        {data?.map((element, index) => (
          <ul
            className=" flex justify-between border-[1px] border-black rounded "
            key={index}
          >
            <li className=" p-2 ">name: {element.form}</li>
            <li className=" p-2 ">age: {element.age}</li>
            <div className=" flex gap-2 p-4">
              <button className="border-[1px] border-black rounded">
                <div className="p-2 backdrop:bg-gray-500 w-full">edit</div>
              </button>
              <button className="border-[1px] border-black rounded">
                <div className="p-2" onClick={deleteList}>
                  delete
                </div>
              </button>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}
