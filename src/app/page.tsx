import { AuthProvider } from "./authprovider";
import { RouteProvider } from "./routeprovider";
import { RouteDictator } from "./routeprovider/RouteDictator";

export default function Index() {
  return (
    <>
      <AuthProvider>
        <RouteProvider>
          <RouteDictator />
        </RouteProvider>
      </AuthProvider>
    </>
  );
}
