import GridLoader from "react-spinners/GridLoader";

interface Load {
    load: any,
}

export const InitialSpinner: React.FC<Load> = ({load}) => {
  const color = "#DC9402";
  return (
    <div className='h-screen flex justify-center align-middle'>
        <div className="mx-auto mt-[10%] md:mt-[20%]">
        <GridLoader color={color} loading={load} size={10} />
        </div>
    </div>
  )
}