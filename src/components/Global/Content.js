import React from 'react';

import './css/Content.css';

function Content() {
  return (
    <div className="Content">
      <h2>En este curso veremos las siguiente cosas: </h2>
      <ul>
          <li>Props y Constructors</li>
          <li>Utilizar Redux para el manejo de datos</li>
          <li>Testing en el nube</li>
          <li>Subir tu primera App a los servicios de AWS</li>

      </ul>
    </div>
  );
}

export default Content;
