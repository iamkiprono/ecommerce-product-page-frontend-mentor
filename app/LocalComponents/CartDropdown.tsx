import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cart } from "../page";

export function CartDropDown({
  cart,
  clearCart,
}: {
  cart: cart[];
  clearCart: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          className="w-8 cursor-pointer  transition-all "
          src="/icon-cart.svg"
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
        {cart.length === 0 && (
          <p className="text-center py-6">Your cart is empty</p>
        )}
        {cart.map((x, i) => {
          return (
            <>
              <DropdownMenuSeparator />

              <div key={i} className="flex gap-2 items-center py-2">
                <div>
                  <img className="w-10" src={x?.image} alt="" />
                </div>
                <div>
                  <p className="text-sm">{x?.name}</p>
                  <p>
                    ${x?.price} x {x?.quantity}
                    {"    "}
                    <span className="font-bold">
                      ${x?.price * x?.quantity}
                    </span>{" "}
                  </p>
                </div>
                <div
                  onClick={() => {
                    clearCart();
                  }}
                  className="ml-4 cursor-pointer"
                >
                  <img src="/icon-delete.svg" alt="" />
                </div>
              </div>
            </>
          );
        })}
        <DropdownMenuSeparator />

        {cart.length !== 0 && (
          <DropdownMenuItem>
            <Button className="w-full bg-Orange my-2">Checkout</Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
