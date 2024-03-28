import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createClient} from '@supabase/supabase-js'
import {SessionContextProvider} from "@supabase/auth-helpers-react"

const supabase= createClient(
  "https://onloamijsclgasmnyyky.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ubG9hbWlqc2NsZ2FzbW55eWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NzIxNTAsImV4cCI6MjAyNzE0ODE1MH0.SOHKMKIpHBrzjIAGsEbmFMtL-13zdlRzBbuw4kVfnwk",
)


// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Call render method on the root
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
    
  </React.StrictMode>
);

