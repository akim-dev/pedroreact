import React from "react";

// Admin Panel
function AdminPanel() {
  return <div>Admin Panel</div>;
}

// login panel

function LoginPanel() {
  return <div>Login Panel</div>;
}

function ConditonalRendering() {
  let content;
  let isLoggedIn = false;
  if (!isLoggedIn === true) {
    content = <AdminPanel />;
  } else {
    // eslint-disable-next-line no-unused-vars
    content = <LoginPanel />;
  }
  return <div>{content}</div>;
}

export default ConditonalRendering;
