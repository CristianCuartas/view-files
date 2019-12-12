import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="http://docs.google.com/viewer?url=http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf"
          title="Quotes"
          target="_blank"
        >
          http://meridadesign.com/demos/quotes.pptx
        </a>
        <a
          href="http://docs.google.com/viewer?url=http://192.168.10.180:8080/filing/emails/view/file/8aa0d2ee-58f3-41ba-b2b0-24eb05a2c171.pdf"
          title="Quotes"
          target="_blank"
        >
          lexco
        </a>
        <iframe
          src="https://view.officeapps.live.com/op/embed.aspx?src=http://192.168.10.180:8080/filing/emails/view/file/026ec294-67f2-4ba9-bf44-e398aa8540c3.doc"
          width="px"
          height="px"
          frameborder="0"
        ></iframe>
        <iframe
          src="http://docs.google.com/viewer?url=http://192.168.10.180:8080/filing/emails/view/file/8aa0d2ee-58f3-41ba-b2b0-24eb05a2c171.pdf"
          width="600"
          height="300"
          // style="border: none;"
        ></iframe>
        <iframe
          src="http://docs.google.com/viewer?url=http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf&embedded=true"
          width="600"
          height="300"
          // style="border: none;"
        ></iframe>

        <div style={{ width: '100px' }}>a</div>
      </header>
    </div>
  );
}

export default App;
