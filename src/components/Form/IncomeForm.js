import React, { useState } from "react";
import styled from "styled-components";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/GlobalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/icons";

export default function Form() {
  const { addIncome, getIncome,error,setError } = useGlobalContext();

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    description: "",
    date: "",
    category: "",
  });

  const { title, amount, description, date, category } = inputState;

  const handleInput = (name) => (e) => {
    const value = e.target.value;
    setInputState({
      ...inputState,

      [name]: name === "amount" ? Number(value) : value,
    });
    setError('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    
      setInputState({
        title: "",
        amount: "",
        description: "",
        date: "",
        category: "",
      });
    
    getIncome();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="number"
          value={amount}
          name="amount"
          placeholder="Amount"
          onChange={handleInput("amount")}
        />
      </div>

      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter a date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>

      <div className="selects input-controls">
        <select
          value={category}
          required
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">bitcoin</option>
          <option value="bank">Bank</option>
          <option value="youtube">Youtube</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="selects input-control">
        <textarea
          onChange={handleInput("description")}
          name="description"
          value={description}
          placeholder="Add a reference"
          id="description"
          cols={30}
          rows={4}
        ></textarea>
      </div>

      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={"0.8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent)"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }

  .input-control {
    input {
      width: 100%;
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;
