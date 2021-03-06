import type { Component } from 'solid-js';
import { Routes, Route } from "solid-app-router"

import { useStore } from './store';

import Home from "./pages/Home"
import Users from "./pages/User"

const App: Component = () => {
  return (
    <Routes>
      <Route path="/users" component={Users} />
      <Route path="/" component={Home} />
      <Route path="/about" element={<div>This site was made with Solid</div>} />
    </Routes>
  );
}

export default App;
