export default function Home() {
  const API_URL = "http://localhost:8080/";
  const getUsers = async()=>{
    try {
      const res = fetch(API_URL);
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
   const handleSubmit = async()=>{
    try {
      const res = fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify
      });
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
   }
  return (
    <div className="flex flex-row gap-[10px] bg-blue-300 w-[500px] h-[500px]">
      <input className=" h-6" type="text" />
      <input className=" h-6" type="number" />
      <button className="h-6 bg-blue-100" onClick={handleSubmit}>submit</button>
    </div>
  );
}
