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
