import { useEffect, useState } from "react";
import ExpanseFilter from "./components/ExpanseFilter";
import ExpanseList from "./components/ExpanseList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  useEffect(() => {
    document.title = "MyExpenses App";
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpanses] = useState([
    {
      id: 2,
      description: "Monthly Rent",
      amount: 1200.0,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Movie Night",
      amount: 25.0,
      category: "Entertainment",
    },
  ]);

  const visibleExpanses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <h1 className="text-center">MyExpenses Tracker</h1>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpanses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpanseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpanseList
        expenses={visibleExpanses}
        onDelete={(id) => setExpanses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
