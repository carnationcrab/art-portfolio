import { render } from "@testing-library/react";
import { Button, Card, Divider, InputNumber, Image } from "antd";
import React, { useState } from "react";
import { Art } from "../../../assets/art";

const categories = new Array();
const artCategories = Art.filter((piece) => {
  if (categories.includes(piece.category)) {
    return false;
  }
  categories.push(piece.category);
  return true;
});

console.log(categories);

export default function Gallery(props: any) {
  return (
    <div className="App">
      {categories.map((category) => (
        <Card title={category}>
          {Art.map((piece) =>
            piece.category == category ? <Image src={piece.src} /> : <div></div>
          )}
          <Divider />
        </Card>
      ))}
    </div>
  );
}
