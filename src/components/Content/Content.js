import React, { useEffect, useState } from 'react';
import '../../styles.css';
import './Content.css';
import LoremIpsum from 'react-lorem-ipsum';


const Content = () => {

    const [titulos, setTitulos] = useState([]);

    const [nichos, setNichos] = useState([]);

    const [articulo, setArticulo] = useState(null);

    const [nichoActual, setNichoActual] = useState('');

    const [tituloActual, setTituloActual] = useState('');

    const [filtroNichos, setFiltroNichos] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/Articulos/obtenerNichos')
          .then(response => response.json())
          .then(data => setNichos(data));
      }, []);

  useEffect(() => {
    if (nichoActual !== '') {
      const obtenerTitulos = async () => {
        try {
          const response = await fetch(`http://localhost:8080/Articulos/obtenerTitulos?nicho=${encodeURIComponent(nichoActual)}`);
          const data = await response.json();
          setTitulos(data);
        } catch (error) {
          console.error('Error al obtener los artículos:', error);
        }
      };
      window.scrollTo(0, 0);
      obtenerTitulos();
      setArticulo(null);
      setTituloActual('');
    }
  }, [nichoActual]);

  useEffect(() => {
    if (tituloActual !== '') {
      const obtenerArticulos = async () => {
        try {
          const response = await fetch(`http://localhost:8080/Articulos/obtenerArticulo?titulo=${encodeURIComponent(tituloActual)}`);
          const data = await response.json();
          setArticulo(data);
        } catch (error) {
          console.error('Error al obtener los artículos:', error);
        }
      };

      obtenerArticulos();
      window.scrollTo(0, 0);
    }
  }, [tituloActual]);

  const handleChangeFiltroNichos = (event) => {
    setFiltroNichos(event.target.value);
  };

  const seleccionarNicho = nicho => {
    setNichoActual(nicho);
  };

  const obtenerArticuloPorTitulo = titulo => {
    setTituloActual(titulo);
  }

  return (
    <div className="content">
        <div className='container'>
            <div className="container-content">
                <section className="section-border">
                  <h2>Selecciona un Tema</h2>
                  {nichos.map((nicho, index) => (
                      <div key={index}>
                      <p 
                        className='nicho'
                        onClick={() => seleccionarNicho(nicho.nicho)}>
                          {nicho.nicho}
                      </p>
                      {
                        titulos.length > 0 ? (
                        <ul>
                        {titulos.map( (titulo, index) => (
                          titulo.nicho === nicho.nicho ?
                          <li 
                          key={index}
                            className='titulo' 
                            onClick={() => obtenerArticuloPorTitulo(titulo.titulo)}>{titulo.titulo}</li>
                            : null
                          ))}
                        </ul>) : null
                      }
                    </div>
                  ))}
                </section>
                <section className="section-center">
                    {
                      <h2>{tituloActual}</h2>
                    }
                    <div className="content">   
                        {
                          articulo !== undefined && articulo !== null ? (
                          <>
                          <h3 className='introduccionTitle'>INTRODUCCION:</h3>
                          <p key={articulo} className='parrafo'>{articulo.introduccion}</p>
                          {articulo.parrafos.map((parrafo, index) => (
                            <p key={index} className='parrafo'>{parrafo}</p>
                          ))}
                          <h3 className='introduccionTitle'>Lo Bueno</h3>
                          <ul>
                            {articulo.loBueno.map((lb, index) => (
                              <li key={index} className='loBueno'>{lb}</li>
                            ))}
                          </ul>
                          <h3 className='introduccionTitle'>Lo Malo</h3>
                          <ul>
                            {articulo.loMalo.map((lm, index) => (
                              <li key={index} className='loMalo'>{lm}</li>
                            
                            ))}
                            </ul>
                          </>) : null
                        }
                    </div>
                </section>
                <section className="section-border">
                    <h2>Sección 3</h2>
                    <LoremIpsum p={5} />
                </section>
            </div>
        </div>
    </div>
  );
}

export default Content;
