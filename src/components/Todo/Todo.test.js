import React from "react";
import Todo from "./Todo";
import {screen, render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from "@testing-library/jest-dom";


test("render todo",()=>{
    render(<Todo />);
    const val = screen.getByText('Todo APP');
    // expect(val).
});

test("add new todo",()=>{
    render(<Todo />);
    const inputVal = screen.getByRole('textbox');
    const btn = screen.getByText('Add Todo');

    fireEvent.change(inputVal, {target: {value : 'Demo session'}});
    fireEvent.click(btn)
   

    const res =  screen.getByText('Demo session');



});