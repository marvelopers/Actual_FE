import React from "react";
import Categories from "./Categories";
import { useSelector } from "react-redux";

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));
  //

  return <Categories categories={categories} />;
}
