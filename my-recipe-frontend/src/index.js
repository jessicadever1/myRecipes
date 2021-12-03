import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeMenu from './components/recipeMenu.tsx'
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';

ReactDOM.render(
  <React.StrictMode>
    <EuiProvider colorMode="light">
      <RecipeMenu />
    </EuiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
