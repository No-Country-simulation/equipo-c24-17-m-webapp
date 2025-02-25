import  FormPariente  from "./FormPariente";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>pariente page</h1>

      <div>
        <FormPariente />
      </div>
    </div>
  );
}