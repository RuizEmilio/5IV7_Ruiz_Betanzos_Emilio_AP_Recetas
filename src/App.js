import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import estilos from './App.css';
function Home(){
  return(
    <>
      <div className='container mt-3'>
        <div className = 'mt-4 p-5 bg-primary text-white rounded' id = 'contenedorTitulo'><h1><center>DE MI JAVASCRIPT A TU COCINA</center></h1></div>
        <br />
        <br />
        <div className = ''>
          <hr className = 'hrPro' />
          <RecipeComponent/>
          <RecipeComponent/>
          <RecipeComponent/>
        </div>
        <div className = 'mt-4 p-5 bg-primary text-white rounded' id = 'contenedorTitulo'><h1><center>RECARGAR PARA MAS RECETAS</center></h1></div>
      </div>
    </>
  )
}
function DetailRecipeComponent(){
  const [articulos, setArticulos] = useState([]);
  const [recuperado, setRecuperado] = useState(false);
  function mostrarDetalles(){
    return(
      <div>
        {articulos.meals.map(item=>{
          return(
            <>
              <div className=''>
                <div className='container mt-3'>
                  <div className = 'mt-4 p-5 bg-primary text-white rounded' id = 'contenedorTitulo'><h1><center>DE MI JAVASCRIPT A TU COCINA</center></h1></div>
                </div>
                <div className = 'contenedorDeContenedores'>
                  <div className = 'contenedorDatos'>
                    <h1>PLATILL {item.strCategory}</h1>
                    <h1>ORIGEN {item.strArea}</h1>
                    <h1 key={item.strMeal}>{item.strMeal}</h1>
                    <a href="/">MASA RECETAS</a>
                  </div>
                  <div className = 'contendorDescripcion'>
                    <h1>COMO LO HICE</h1>
                    <p>{item.strInstructions}</p>
                    <a href={item.strYoutube}>MI CANAL</a>
                  </div>
                  <div><img className = 'rounded-circle' id = 'imagenDescripcion' key={"img-"+item.strMeal} alt={"img/"+item.strMeal} src={item.strMealThumb} /></div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    )
  }
  const {id}=useParams();
  useEffect(() => {
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
        setRecuperado(true)
      })
  }, [])
  if(recuperado){
    return mostrarDetalles();
  }else{
    return (<div>recuperando datos...</div>)
  }

}
function RecipeComponent() {
  const [articulos, setArticulos] = useState([])
  const [recuperado, setRecuperado] = useState(false)
  function mostrarTitulo() {
    const mostrar=()=>{
      window.location.href=`/${articulos.meals[0].idMeal}`;
    }
    return (
      <div className = 'contenedorReceta'>
        {articulos.meals.map(item=>{
          return(
            <>
              <h2 key={item.strMeal}>{item.strMeal}</h2>
              <img className = 'rounded-circle' id = 'imagenComidita' key={"img-"+item.strMeal} onClick={mostrar} alt={"img/"+item.strMeal} src={item.strMealThumb}></img>
              <hr className = 'hrPro' key={"hr"}></hr>
            </>
          );
        })}
      </div>
    );
  }
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
        setRecuperado(true)
      })
  }, [])
  if(recuperado){
    return mostrarTitulo()
  }else{
    return (<div>recuperando datos...</div>)
  }
}
const ex={Home,DetailRecipeComponent};
export default ex;
