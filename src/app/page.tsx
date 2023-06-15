import Image from "next/image";
import Dashboard from "./pages/dashboard";
import { AuthProvider } from "./authprovider";
import RouteProvider from "./routeprovider";
import Navbar from "./components/Navbar";

export default function Index() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <RouteProvider />
      </AuthProvider>
    </>
  );
}
