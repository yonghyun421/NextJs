import { age, name } from "./data";
import Hello from "./hello";

export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {/* <Hello /> */}
      <div className="cart-item">
        <p>
          상품명
          {/* {age} {name} */}
        </p>
        <p>$40</p>
        <p>1개</p>
      </div>
      {장바구니.map((item, index) => {
        return <CartItem key={index} item={item} />;
      })}
      <Banner content="현대카드" />
      <Banner content="롯데카드" />
      <RedButton color="red" />
      <RedButton color="blue" />
    </div>
  );
}

function Banner({ content }) {
  return <h5>{content} 결제 행사중</h5>;
}

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function RedButton({ color }) {
  return <button style={{ background: color }}>Buy</button>;
}
