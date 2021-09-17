import React from "react";

interface IHeader {
  name: string;
}

const Header: React.FC<IHeader> = ({ name }) => <div>Header {name}</div>;

export default Header;
