import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white px-5 py-10">
      <div className=" flex justify-between pb-10 flex-wrap">
        <div>
          <h3 className="text-2xl">Support</h3>
          <ul className="leading-loose pt-3">
            <li>Kampala Uganda</li>
            <li>kampala@gmail.com</li>
            <li>+2568585658860667</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl">Account</h3>
          <ul className="leading-loose pt-3">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>WishList</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl">Quick Links</h3>
          <ul className="leading-loose pt-3">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="text-center border-t">
        <p className="pt-10">Copyright 2024. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
