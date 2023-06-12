import React from 'react';
import '../../styles.css';
import './Content.css';
import LoremIpsum from 'react-lorem-ipsum';


const Content = () => {
  return (
    <div className="content">
        <div className='container'>
            <div className="container-content">
                <section className="section-border">
                <LoremIpsum p={5} />
                </section>
                <section className="section-center">
                <LoremIpsum p={5} />
                </section>
                <section className="section-border">
                    <LoremIpsum p={5} />
                </section>
            </div>
        </div>
    </div>
  );
}

export default Content;
