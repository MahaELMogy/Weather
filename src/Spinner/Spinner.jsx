import { Watch } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        className="h-dvh"
        color="#cebfaa"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Spinner;
