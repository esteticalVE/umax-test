import React, { useState } from "react";
import { MainLayout } from "../layouts/main";
import { BlockQuestionComponent } from "../components/blockQuestion";
import { BlockQuizComponent } from "../components/blockQuiz";
import { RadioGroupComponent } from "../components/radioGroup";
import { CheckboxGroupComponent } from "../components/checkboxGroup";
import { BlockFormComponent } from "../components/blockForm";
import { questions as questionsArray } from "../constants/questions";
import { answers as answersArray } from "../constants/answers";

export function MainPage() {
  const [total, setTotal] = useState({});
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, _] = useState(questionsArray);
  const [currentQuestionValue, setCurrentQuestionValue] = useState({
    selectedOption: null
  });

  const [form, setForm] = useState({
    name: "",
    phone: ""
  });

  const [isAgree, setIsAgree] = useState(false);

  function isAgreeToggle() {
    setIsAgree(!isAgree);
  }

  function formChangeHandler(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function submitHandler() {
    if (!isAgree) {
      return;
    }

    const data = {
      firstAnswer: total[0],
      secondAnswer: total[1],
      thirdAnswer: form
    };
    console.log(JSON.stringify(data));
  }

  function resetHandler() {
    setQuestionNumber(0);
    setTotal({});
    setCurrentQuestionValue({
      selectedOption: null
    });
  }

  function nextQuestionHandler() {
    if (questionNumber === questions.length - 1) {
      return;
    }
    setTotal({
      ...total,
      [questionNumber]: currentQuestionValue.selectedOption
    });

    setQuestionNumber(questionNumber + 1);
    setCurrentQuestionValue({ selectedOption: null });
  }

  function prevQuestionHandler() {
    if (questionNumber === 0) {
      return;
    }
    setQuestionNumber(questionNumber - 1);
  }

  function radioChangeHandler(e) {
    setCurrentQuestionValue({
      selectedOption: e.currentTarget.value
    });
  }

  function checkboxChangeHandler(e) {
    setCurrentQuestionValue({
      selectedOption: {
        ...currentQuestionValue.selectedOption,
        [e.target.name]: e.target.checked
      }
    });
  }

  function renderQuestion(number) {
    switch (number) {
      case 0:
        return (
          <BlockQuestionComponent
            data={questions[number]}
            resetHandler={resetHandler}
            nextQuestionHandler={nextQuestionHandler}
            prevQuestionHandler={prevQuestionHandler}
          >
            <RadioGroupComponent
              answers={answersArray}
              currentQuestionValue={currentQuestionValue.selectedOption}
              changeHandler={radioChangeHandler}
            />
          </BlockQuestionComponent>
        );
      case 1:
        return (
          <BlockQuestionComponent
            data={questions[number]}
            resetHandler={resetHandler}
            nextQuestionHandler={nextQuestionHandler}
            prevQuestionHandler={prevQuestionHandler}
          >
            <CheckboxGroupComponent
              answers={answersArray}
              currentQuestionValue={currentQuestionValue}
              changeHandler={checkboxChangeHandler}
            />
          </BlockQuestionComponent>
        );
      case 2:
        return (
          <BlockQuestionComponent
            data={questions[number]}
            resetHandler={resetHandler}
            nextQuestionHandler={nextQuestionHandler}
            prevQuestionHandler={prevQuestionHandler}
            submitHandler={submitHandler}
            withForm
          >
            <BlockFormComponent
              formData={form}
              onChange={formChangeHandler}
              isChecked={isAgree}
              isAgreeToggle={isAgreeToggle}
            />
          </BlockQuestionComponent>
        );
      default:
        return <BlockQuestionComponent></BlockQuestionComponent>;
    }
  }

  return (
    <MainLayout>
      <BlockQuizComponent
        progressData={{ total: questions.length, value: questionNumber + 1 }}
      >
        {renderQuestion(questionNumber)}
      </BlockQuizComponent>
    </MainLayout>
  );
}
