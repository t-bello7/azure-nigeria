import Button from "../atoms/Button";

function Jumbotron() {
  return (
    <div className="bg-jumbotroImg">
      <div className="space container m-6 mx-auto flex h-[60vh] max-w-[80%] flex-col items-center justify-around rounded-xl p-9 shadow-2xl">
        <h1 className="mt-[-20px] text-center font-[#adadad] md:text-5xl">
          Innovative Possibilities in Africa with Artificial Intelligence|
          {" "}
          <br />
          {" "}
          <span className="text-3xl ">
            27-28 October with over 50 sessions
            {" "}
          </span>
        </h1>
        <div>
          <div>
            <p className="text-regular md:text-[22px]">
              Lagos, Nigeria | 10am African Time
            </p>
          </div>
        </div>
        <Button name="Register" className="m-2" />
      </div>
    </div>
  );
}

export default Jumbotron;
