import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Index from './components/index/index';
import Authentication from './components/authentication/authentication';
import HomePro from './components/HomePro/HomePro';
import Messages from './components/messages/messages';
import Map from './components/map/map';
import ProfilePro from './components/profile-entreprise/profile-entreprise';
import ProfileClient from './components/profile-client/profile-client';
import Matchs from './components/matchs/matchs';
import './App.css';

const root = ReactDOM.createRoot(document.querySelector('main'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/authentification" element={<Authentication />} />
        <Route path="/home/pro" element={<HomePro />} />
        <Route path="/matchs" element={<Matchs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile-pro" element={<ProfilePro />} />
        <Route path="/profile-client" element={<ProfileClient />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
