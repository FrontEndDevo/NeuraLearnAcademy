import ShopingCart from "../components/ShopingCart/ShopingCart";
import { useAuthenticationChecking } from "../shared/Registration/useAuthenticationChecking";

function ShoppingCartPage() {
  useAuthenticationChecking();

  return (
    <>
      <ShopingCart />
    </>
  );
}

export default ShoppingCartPage;
