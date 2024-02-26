import { useState } from "react";
export default function Home() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState("");
  const [age, setAge] = useState("");

// ADD FUNCTION

  const createData = async () => {
    const response = await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form, age }),
    });
    const res = await response.json();
    setData(res);
  };
  const addData = () => {
    console.log(form);
    console.log(age);
    createData();
  };

// DELETE FUNCTION

  const deleteData = async (index) => {
    try {
      const response = await fetch(`http://localhost:3001/${index}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("fe ajildgue");
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
      <button onClick={addData} className="border-[1px] border-black rounded">
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
                <div className="p-2">edit</div>
              </button>
              <button className="border-[1px] border-black rounded">
                <div onClick={deleteData} className="p-2">
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
