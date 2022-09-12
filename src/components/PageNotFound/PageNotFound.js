import React from 'react';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();

  return (
    <div className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__title">Страница не найдена</p>
      <button className="not-found__button" onClick={() => history.goBack()}>Назад</button>
    </div>
  )
}

export default PageNotFound;
