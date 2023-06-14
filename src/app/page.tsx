import Image from "next/image";
import Dashboard from "./pages/dashboard";
import { AuthProvider } from "./authprovider";
import RouteProvider from "./routeprovider";

export default function Index() {
  return (
    <>
      <AuthProvider>
        <RouteProvider />
      </AuthProvider>
    </>
  );
}
