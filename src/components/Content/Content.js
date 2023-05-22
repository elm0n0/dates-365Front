import React from 'react';
import '../../styles.css'
import './Content.css';
import LoremIpsum from 'react-lorem-ipsum';

const Content = () => {
  return (
    <div className="content">
        <div className='container'>
            <div className="container-content">
                <section className="section-border">
                    <h2>Sección 1</h2>
                    <LoremIpsum p={8} />
                </section>
                <section className="section-center">
                    <h2>Sección 2</h2>
                    <LoremIpsum p={10} />
                </section>
                <section className="section-border">
                    <h2>Sección 3</h2>
                    <LoremIpsum p={8} />
                </section>
            </div>
        </div>
    </div>
  );
}

export default Content;
