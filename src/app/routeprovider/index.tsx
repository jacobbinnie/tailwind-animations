"use client";
import { useAuth } from "../authprovider";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

function RouteProvider() {
  const { user } = useAuth();

  switch (user) {
    case null:
      return <Login />;

    default:
      return <Dashboard />;
  }
}

export default RouteProvider;
