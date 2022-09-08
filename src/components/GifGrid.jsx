import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { isLoading, imags } = useFetchGifs( category ); 
    return (
        <>
            <h3> {category} </h3>
            {
                isLoading && ( <h2> Cargando.... </h2>)
            }
            <div className="card-grid">
                {imags.map((imag) => (
                    <GifItem key={ imag.id }
                    { ...imag }/>
                ))}
            </div>
        </>
    );
}