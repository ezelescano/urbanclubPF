import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { googleIsAuthenticated } from "../../redux/authSlice"; // Importa la acción correspondiente

const Success = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 60000);
  }, []);

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    console.log("user:", user);
  }, [isAuthenticated, user]);

  useEffect(() => {
    dispatch(googleIsAuthenticated(true)); // Cambia el estado de isAuthenticated a true
  }, [dispatch]);

  return <div>Estás logueado con Google</div>;
};

export default Success;
